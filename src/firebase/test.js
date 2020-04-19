import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('yRQtddHdAnwfc5WJtYJf').collection('cartItems')

.doc('yccvVF7mM7UKHnxhCg8V');

firestore.doc('users/yRQtddHdAnwfc5WJtYJf/cartitems/yccvVF7mM7UKHnxhCg8V');
firestore.collection('users/yRQtddHdAnwfc5WJtYJf/cartitems');