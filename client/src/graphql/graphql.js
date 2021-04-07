import { gql } from "@apollo/client";

// GET COLLECTIONS QUERY
export const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;

// GET ONE COLLECTION QUERY
export const GET_COLLECTION_BY_ID = gql`
  query Collection($id: ID!) {
    collection(id: $id) {
      id
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`;

export const GET_COLLECTION_BY_TITLE = gql`
  query GetCollectionByTitle($title: String!) {
    getCollectionByTitle(title: $title){
      id 
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`;


export const ADD_COLLECTION = gql`
  mutation AddCollection($title: String!) {
    addCollection(title: $title) {
      id
      title
    }
  }
`;

// UPDATE COLLECTION MUTATION
export const UPDATE_COLLECTION = gql`
  mutation UpdateCollection(
    $id: ID!
    $title: String!
  ) {
    updateCollection(
      id: $id
      title: $title
    ) {
      id
      title
    }
  }
`;

// DELETE COLLECTION
export const DELETE_COLLECTION = gql`
  mutation DeleteCollection($id: ID!) {
    deleteCollection(id: $id) {
      id
    }
  }
`;

// GET COLLECTION ITEMS
export const GET_ITEMS_BY_COLLECTION = gql`
  query GetItemsByCollection($collection: ID!) {
    getItemsByCollection(collection: $collection) {
      id
      name
      imageUrl
      price
      collection {
        id
      }
    }
  }
`;

// GET FEATURED ITEMS
export const GET_FEATURED_ITEMS = gql`
  {
    getFeaturedItems {
      id
      name
      imageUrl
      price
    }
  }
`;


export const GET_ITEM_BY_ID = gql`
  query Item($id: ID!) {
    item(id: $id) {
      id
      name
      price
      imageUrl
      featured
      collection {
        id
        title
      }
    }
  }
`;

// ADD ITEM MUTATION
export const ADD_ITEM = gql`
  mutation AddItem(
    $name: String! 
    $imageUrl: String! 
    $price: Int! 
    $collectionId: ID!
  ) {
    addItem(
      name: $name 
      imageUrl: $imageUrl 
      price: $price 
      collectionId: $collectionId
    ) {
      id
      name
      imageUrl
      price
      collection {
        id
        title
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: ID!
    $name: String!
    $imageUrl: String!
    $price: Int!
    $featured: Boolean!
    $collectionId: ID!
  ) {
    updateItem(
      id: $id
      name: $name
      imageUrl: $imageUrl
      price: $price
      featured: $featured
      collectionId: $collectionId
    ) {
      id name imageUrl price featured collection {
        id
        title
      }
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
