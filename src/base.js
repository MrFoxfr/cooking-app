import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaNn8uWIeVvrWNN4B1Y2nGBfikFFmRsDo",
  authDomain: "cooking-app-53286.firebaseapp.com",
  databaseURL: "https://cooking-app-53286.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
