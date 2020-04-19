import React from 'react';
import './CollectionPreview.style.scss';
import CollectionItem from '../collection-item/collection-item.component'


const CollectionPreview = ({title,items} ) => 
   (
   <div className="collection-preview">
       <h1 className="tilte">{title.toUpperCase()}</h1>
       <div className="preview">
         {items.filter((item ,idx) => idx < 4)
         .map(({id, ...otheritemprops})=> (
          
              <CollectionItem key={id}{...otheritemprops}/>
          ))}
       </div>
   </div>

    );

export default CollectionPreview;





