import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useUser from "../../../../customHooks/useUser";
import DisplayUser from "./DisplayUser";

const AllUser = () => {
  const [users, refetch] = useUser();

  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://skytrip.vercel.app/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoading(false);
          toast.success("Deleted successfully");
          refetch();
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Server error");
      });
  };

  return (
    <div className="overflow-x-auto w-full mt-3">
      {users?.user.length === 0 ? (
        <p className="text-center mt-10 dark:text-white">No data</p>
      ) : (
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users?.user.map((user, idx) => (
              <DisplayUser
                key={idx}
                user={user}
                handleDelete={handleDelete}
                loading={loading}
              ></DisplayUser>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUser;
