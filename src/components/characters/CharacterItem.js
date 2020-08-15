import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Actor Name :</strong> {item.portrayed}</li>
                        <li><strong>NickName : </strong> {item.nickname} </li>
                        <li><strong>birthday : </strong>{item.birthday}</li>
                        <li><strong>Status : </strong>{item.status}</li>
                        <li><strong>Apearance : </strong>{item.appearance}</li>
                        <li><strong>Occupation : </strong>{item.occupation}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
