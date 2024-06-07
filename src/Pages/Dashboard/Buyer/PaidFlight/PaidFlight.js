import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import ShowPaidFlight from "./ShowPaidFlight";

const PaidFlight = () => {
  const { user } = useContext(AuthContext);

  const [paidFlight, setPaidFlight] = useState([]);

  useEffect(() => {
    fetch(`https://skytrip.vercel.app/specificPaidFlight?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaidFlight(data);
      });
  }, [user?.email]);

  return (
    <div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Company email</th>
            <th>From</th>
            <th>Destination</th>
            <th>Flight date</th>
            <th>Transaction id</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {paidFlight?.length !== 0 &&
            paidFlight?.map((item) => (
              <ShowPaidFlight key={item._id} item={item}></ShowPaidFlight>
            ))}
        </tbody>
      </table>

      {paidFlight?.length === 0 && (
        <p className="text-center text-red-500 font-bold my-5">No item</p>
      )}
    </div>
  );
};

export default PaidFlight;
