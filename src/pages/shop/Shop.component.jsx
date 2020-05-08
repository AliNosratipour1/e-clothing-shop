import React from 'react';
import CollectionOverviewContainer from '../../componetns/collections-overview/collections-overview.container';
import {Route} from 'react-router-dom';

import CollectionPageContainer from '../collection/collections.container';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import CollectionsOverviewContainer from '../../componetns/collections-overview/collections-overview.container';


class ShopPage extends React.Component{

componentDidMount(){
const  {fetchCollectionsStart} = this.props;
fetchCollectionsStart();

}

render(){

  const {match} = this.props;
  return (
    <div className="shop-page"> 
    <Route  exact path={`${match.path}`} component={CollectionsOverviewContainer} /> 
    <Route  exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}  />} /> 
    </div>  

  );
}

  
} 

       

 const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
 });

   
     
        
export default  connect(null, mapDispatchToProps)  (ShopPage);