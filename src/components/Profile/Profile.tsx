import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated ? (<div>
            <img src={user.picture} />
            <JSONPretty data={user}>
            </JSONPretty>
        </div>) : <></>
    )
}

export default Profile;
