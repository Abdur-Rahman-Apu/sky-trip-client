import React from 'react';

const DisplayUser = ({ user, handleDelete }) => {

    const { _id, name, image, email } = user;

    return (
        <tr>
            <td>
                <h1 className='font-bold'>{name}</h1>
            </td>
            <td>
                <img className='w-36' src={image} alt="img" />
            </td>

            <td>
                {email}
            </td>
            <th>

                <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>

            </th>
        </tr>
    );
};

export default DisplayUser;