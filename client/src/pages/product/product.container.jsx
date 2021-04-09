import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../../graphql/graphql";

import ProductPage from "./product.component";
import Spinner from "../../components/spinner/spinner.component";

const ProductPageContainer = ({ match }) => {
  const { loading, data } = useQuery(GET_ITEM_BY_ID, { variables: {id: match.params.productId}});

  if(loading) return <Spinner />
  return <ProductPage product={data.item} />
};

export default ProductPageContainer;