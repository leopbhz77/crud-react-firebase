import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import './App.css';

import { db } from './firebase-config'

function App() {
    
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users")

  const createUser = async () => {
    await addDoc(usersRef, {name: newName, age: Number(newAge)})
  }
  
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newField = {age: age + 1}
    await updateDoc(userDoc, newField)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)

    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  })

  return (
    <div className="App">
      <input placeholder="...name" type="text" onChange={(e) => {setNewName(e.target.value)}} />
      <input placeholder="...age" type="number" onChange={(e) => {setNewAge(e.target.value)}} />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
        <div key={user.id}>
          <h1>name: {user.name}</h1>
          <h1>age: {user.age}</h1>
          <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
        )
      })}
    </div>
  );
}

export default App;
