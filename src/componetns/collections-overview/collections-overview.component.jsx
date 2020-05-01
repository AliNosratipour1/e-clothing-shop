import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview.components';

import {selectCollectionsForPreviw} from '../../redux/shop/shop.selector'
import './collections-overview.styles.scss';


const CollectionsOverviw = ({collections}) =>(
    <div className='collections-overview'>
           {collections.map(({id, ...othercollectionprops}) =>(
               <CollectionPreview key={id} {...othercollectionprops}/>
           ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreviw
});

export default connect(mapStateToProps)(CollectionsOverviw)



