import React, { useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Web developer and tech enthusiast.',
        profilePicture: 'default-profile.jpg',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="user-profile">
            <img src={user.profilePicture} alt="Profile" />
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <textarea name="bio" onChange={handleChange} value={user.bio}></textarea>
            <button>Save Changes</button>
        </div>
    );
}

export default UserProfile;