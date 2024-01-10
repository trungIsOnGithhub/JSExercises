import React, { useState } from 'react';

function MainPage() {
    const [click, setClick] = useState(true);

    const user = {
        name: "Trung",
        birthyear: 2002,
        url: "https://youtube.com"
    };

    const userProfile = (
        <div>
            <h3>{user.name}</h3>
            <p>{user.birthyear}</p>
            <a target='_blank' href={user.url}></a>
        </div>
    );

    return <Component1 profile={userProfile}></Component1>;
}