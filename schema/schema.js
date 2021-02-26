const graphql = require("graphql");
const Item = require("../models/Item");
const Collection = require("../models/Collection");
const User = require("../models/User");
const { validateRegisterInput, validateLoginInput } = require("../util/validators");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../util/check-auth");


const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;


const generateToken = user => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      displayName: user.displayName
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h"
    }
  )
};


const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {type: GraphQLID},
    displayName: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    isAdmin: {type: GraphQLBoolean},
    token: {type: GraphQLString}
  })
});

const ItemType = new GraphQLObjectType({
  name: "Item",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    price: {type: GraphQLInt},
    featured: {type: GraphQLBoolean},
    collection: {
      type: CollectionType,
      resolve(parent, args) {
        //return _.find(collections, {id: parent.collectionId})
        return Collection.findById(parent.collectionId);
      }
    }
  })
});

const CollectionType = new GraphQLObjectType({
  name: "Collection",
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        //return _.filter(items, {collectionId: parent.id});
        return Item.find({collectionId: parent.id});
      }
    }
  })
});


const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: { 
      type: UserType,
      args: {
        email: {type: GraphQLString}
      },
      resolve: (parent, {email}) => {
        return User.findOne({email});
      }
    },
    item: {
      type: ItemType,
      args: {
        id: {type: GraphQLID}
      },
      resolve: (parent, {id}) => {
        //return _.find(items, {id: args.id})
        return Item.findById(id);
      }
    },
    collection: {
      type: CollectionType,
      args: {
        id: {type: GraphQLID}
      },
      resolve: (parent, {id}) => {
        //return _.find(collections, {id: args.id});
        return Collection.findById(id);
      }
    },
    getCollectionByTitle: {
      type: CollectionType,
      args: {
        title: {type: GraphQLString}
      },
      resolve: (parent, {title}) => {
        return Collection.findOne({title: title});
      }
    },
    getItemsByCollection: {
      type: new GraphQLList(ItemType),
      args: {
        collection: {type: GraphQLID}
      },
      resolve(parent, { collection }) {
        return Item.find({collectionId: collection})
      }
    },
    getFeaturedItems: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return Item.find({featured: true})
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        //return items;
        return Item.find({});
      }
    },
    collections: {
      type: new GraphQLList(CollectionType),
      resolve(parent, args) {
        //return collections;
        return Collection.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        displayName: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLID)},
        confirmPassword: {type: new GraphQLNonNull(GraphQLID)}
      },
      async resolve(parent, {displayName, email, password, confirmPassword}) {
        // Validate users data
        const {valid, errors} = validateRegisterInput(displayName, email, password, confirmPassword);
        if(!valid){
          console.log(errors.message)
          throw new Error(errors.message);
        }
        // Make sure that user doesnt already exists
        const user = await User.findOne({email});
        if(user){
          throw new Error("This user already exists")
        }
        // Hash password
        password = await bcrypt.hash(password, 12);
        const newUser = new User({
          displayName,
          email,
          password,
        });
        
        const res = await newUser.save();
        const token = generateToken(res);
        
        return {
          ...res._doc,
          id: res._id,
          isAdmin: res.isAdmin,
          token
        }
      }
    },
    login: {
      type: UserType,
      args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLID)}
      },
      async resolve(parent, {email, password}){
        const {valid, errors} = validateLoginInput(email, password);
        if(!valid){
          throw new Error(errors.message);
        }

        const user = await User.findOne({email});
        if(!user){
          errors.general = "Wrong credentials";
          throw new Error(errors.general);
        }

        const match = await bcrypt.compare(password, user.password);
        if(!match){
          errors.general = "Wrong credentials";
          throw new Error(errors.general);
        }

        const token = generateToken(user);

        return {
          ...user._doc,
          id: user._id,
          isAdmin: user.isAdmin,
          token
        }
      }
    },
    addItem: {
      type: ItemType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        imageUrl: {type: new GraphQLNonNull(GraphQLString)},
        price: {type: new GraphQLNonNull(GraphQLInt)},
        collectionId: {type: new GraphQLNonNull(GraphQLID)}
      },
      async resolve(parent, {name, imageUrl, price, collectionId}, context) {
        const user = checkAuth(context);
        if(user && user.isAdmin){
          try {
            const newItem = new Item({
              name,
              imageUrl,
              price,
              collectionId
            });
            const item = await newItem.save();
            return item;
          } catch(err) {
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed");
        }
      }
    },
    updateItem: {
      type: ItemType,
      args: {
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        imageUrl: {type: new GraphQLNonNull(GraphQLString)},
        price: {type: new GraphQLNonNull(GraphQLInt)},
        featured: {type: new GraphQLNonNull(GraphQLBoolean)},
        collectionId: {type: new GraphQLNonNull(GraphQLID)}
      },
      async resolve(parent, {id, name, imageUrl, featured, price, collectionId}, context) {
        const user = checkAuth(context);

        if(user && user.isAdmin) {
          try { 
            let updatedItem = await Item.findByIdAndUpdate(id, {
              name,
              imageUrl,
              price,
              featured,
              collectionId
            });
            return updatedItem;
          } catch(err){
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed")
        }
      }
    },
    deleteItem: {
      type: ItemType,
      args: {id: {type: GraphQLID}},
      async resolve(parent, {id}, context) {
        const user = checkAuth(context);

        if(user && user.isAdmin) {
          try {
            let deletedItem = await Item.findByIdAndDelete(id);
            return deletedItem;
          } catch(err) {
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed");
        }
      }
    },
    addCollection: {
      type: CollectionType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, {title}, context) {
        const user = checkAuth(context);

        if(user && user.isAdmin) {
          try {
            const newCollection = new Collection({
              title
            });
            const collection = await newCollection.save()
            return collection;
          } catch(err) {
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed");
        }
      }
    },
    updateCollection: {
      type: CollectionType,
      args: {
        id: {type: GraphQLID},
        title: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, {id, title}, context) {
        const user = checkAuth(context);

        if(user && user.isAdmin) {
          try {
            let updatedCollection = await Collection.findByIdAndUpdate(id, {title});
            return updatedCollection;
          } catch(err) {
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed");
        }
      }
    },
    deleteCollection: {
      type: CollectionType,
      args: {id: {type: GraphQLID}},
      async resolve(parent, {id}, context) {
        const user = checkAuth(context);

        if(user && user.isAdmin) {
          try {
            let deletedCollection = await Collection.findByIdAndDelete(id);
            return deletedCollection;
          } catch(err) {
            throw new Error(err);
          }
        } else {
          throw new Error("Action not allowed");
        }
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: Mutation
});

module.exports = schema;

