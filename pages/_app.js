import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from '../firebase'
import Login from './login'
import LoadingComponent from '../components/LoadingComponent'
import firebase from 'firebase'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if(user){
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        avator: user.photoURL
      },
      {merge: true})
    }
  }, [user])

  if(loading) return <LoadingComponent />;

  if(!user) return <Login />;

  return <Component {...pageProps} />
}

export default MyApp
