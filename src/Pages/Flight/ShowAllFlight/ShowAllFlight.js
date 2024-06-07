import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ShowAllFlight = ({ flight, setFlight, role }) => {
  const [specificUser, setSpecificUser] = useState({});

  useEffect(() => {
    fetch(`https://skytrip.vercel.app/user?email=${flight?.companyEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        if (data) {
          setSpecificUser({ ...data });
        }
      });
  }, [flight?.companyEmail]);

  console.log(specificUser, "specific user");

  return (
    <div className="card card-side flex-col p-3 md:flex-row justify-between items-center px-10 bg-base-100 shadow-xl w-[70vw] mx-auto my-10 hover:scale-110 transition cursor-pointer">
      <figure className="basis-[38%]">
        <img
          className="w-[200px] object-cover"
          src={specificUser?.image}
          alt="Company pic"
        />
      </figure>

      <div className="basis-[38%]">
        <h2 className="text-xl font-bold">
          {flight?.from} <FontAwesomeIcon icon={faJetFighter} />{" "}
          {flight?.destination}
        </h2>
        <p>{flight?.time}</p>
        <p>{flight?.seats} seats</p>
        <p>${flight?.price}</p>
      </div>
      <div className="basis-[20%]">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            setFlight(flight);
          }}
          className="btn btn-base bg-deepViolet rounded-full my-3 md:my-0"
          disabled={flight?.seats === 0 || role !== "User"}
        >
          Book
        </label>
      </div>
    </div>
  );
};

export default ShowAllFlight;
