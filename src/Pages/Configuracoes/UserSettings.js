import React, { useEffect, useState } from 'react';
import { auth, db } from '../Login/firebase-config';
import './UserSettings.css'; 

const UserSettings = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      console.log('Usuário atual:', user); // Verifica se o usuário está autenticado
      if (user) {
        try {
          const userDoc = await db.collection('users').doc(user.uid).get();
          console.log('Dados do documento do usuário:', userDoc.data()); // Verifica os dados do documento
          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('Documento de usuário não encontrado.');
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      } else {
        console.log('Usuário não autenticado.');
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Carregando...</p>; 
  }

  return (
    <div className="user-settings">
      <h2>Configurações do Usuário</h2>
      <p><strong>Nome:</strong> {userData.nome}</p>
      <p><strong>Função:</strong> {userData.funcao}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default UserSettings;
