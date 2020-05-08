import ShopActionType from './shop.types';
import {firestore, convertCollectionsSnapshotToMap}  from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
payload:collectionsMap
});


export const fetchCollectionsFailure = errorMessage => ({
type:ShopActionType.FETCH_COLLECTIONS_FAILUR,
payload:errorMessage
});



export const fetchCollectionsStartAsync = () => {
    return dispatch => {
     
        const collectionRef = firestore.collection('collections');
          dispatch(fetchCollectionsStart());

        collectionRef
        .get()
        .then( Snapshot => {
         const collectionsMap =  convertCollectionsSnapshotToMap(Snapshot);
         dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));

    }
}