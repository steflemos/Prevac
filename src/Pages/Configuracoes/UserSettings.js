import React, { useEffect, useState } from "react";
import {
  auth,
  firestore,
} from "/Users/tiagosilva/Desktop/sitePrevac/Prevac/src/Pages/Login/firebase-config.js";
import "./UserSettings.css";

const UserSettings = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await firestore
          .collection("users")
          .doc(currentUser.uid)
          .get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="user-settings-container">
      {user ? (
        <div className="user-info">
          <h2>Configurações do Usuário</h2>
          <p>
            <strong>Nome Completo:</strong> {userData.fullName}
          </p>
          <p>
            <strong>Função:</strong> {userData.role}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Senha:</strong> ••••••••
          </p>
        </div>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
};

export default UserSettings;
