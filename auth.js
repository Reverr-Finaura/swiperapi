const { initializeApp } = require("firebase/app");

const {
  getDocs,
  collection,
  getFirestore,
  updateDoc,
  doc,
} = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAG7aYqGunCEEqMePnR7YN_uMsn8yvwtcM",
  authDomain: "reverr-25fb3.firebaseapp.com",
  databaseURL: "https://reverr-25fb3-default-rtdb.firebaseio.com",
  projectId: "reverr-25fb3",
  storageBucket: "reverr-25fb3.appspot.com",
  messagingSenderId: "710745964607",
  appId: "1:710745964607:web:9c0b08192f30bb97bab88a",
  measurementId: "G-7S7P5C52RG",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore();

module.exports.fetchUsers = async () => {
  try {
    let Users = [];
    await (
      await getDocs(collection(database, `Users`))
    ).forEach((doc) => {
      Users.push({ ...doc.data() });
    });
    return Users;
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateSwipeInDatabse = async (uid, data) => {
  try {
    return await updateDoc(doc(database, "Users", uid), data);
  } catch (err) {
    console.log("Err: ", err);
  }
};
