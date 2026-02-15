import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import  {AuthContext} from "../context/AuthContext";

 function Profile() {
     const [profileData, setProfileData] = useState({});
     const {user} = useContext(AuthContext);

     useEffect(() => {

async function getSecretProfileData() {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/secrets', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`
            },
        });
        setProfileData(response.data);

    } catch (e) {
        console.error(e);
    }
}

void getSecretProfileData();
 }, [])
      return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </section>
        {Object.keys(profileData).length > 0 &&
      <section>
        <h2>Strikt geheime profiel-content</h2>
          <h3>{profileData.title}</h3>
          <p>{profileData.content}</p>
      </section>
        }
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;