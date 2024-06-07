import React from "react";

const DisplayUser = ({ user, handleDelete, loading }) => {
  const { _id, name, image, email } = user;

  return (
    <tr>
      <td>
        <h1 className="font-bold">{name}</h1>
      </td>
      <td>
        <img
          className="w-20 h-20 mx-auto rounded-full object-cover"
          src={image}
          alt="img"
        />
      </td>

      <td>{email}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-error"
          disabled={loading}
        >
          {loading ? "wait..." : "Delete"}
        </button>
      </th>
    </tr>
  );
};

export default DisplayUser;
