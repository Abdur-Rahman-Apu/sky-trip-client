import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const DisplaySearchFlight = ({ item, setItem, role }) => {
  //   const [specificUser] = useSpecificUser(item?.companyEmail);

  const [companyImage, setCompanyImage] = useState(null);

  useEffect(() => {
    const getCompanyImage = async () => {
      const res = await fetch(
        `https://skytrip.vercel.app/user?email=${item?.companyEmail}`
      );

      const data = await res.json();

      setCompanyImage(data?.image);
    };

    getCompanyImage();
  }, [item?.companyEmail]);
  console.log(item, "item");

  return (
    <div className="card card-side flex-col md:flex-row p-3 justify-between items-center px-10 bg-base-100 shadow-xl w-[70vw] mx-auto my-10">
      <figure className="basis-[38%]">
        <img
          className="h-44 w-full object-scale-down"
          src={companyImage}
          alt="company pic"
        />
      </figure>

      <div className="basis-[38%]">
        <h2 className="text-xl font-bold">
          {item?.from} <FontAwesomeIcon icon={faJetFighter} />{" "}
          {item?.destination}
        </h2>
        <p>{item?.time}</p>
        <p>{item?.seats} seats</p>
        <p>${item?.price}</p>
      </div>
      <div className="basis-[20%]">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            setItem(item);
          }}
          className="btn btn-base bg-deepViolet rounded-full my-3 md:my-0"
          disabled={Number(item?.seats) === 0 || role !== "User"}
        >
          Book
        </label>
      </div>
    </div>
  );
};

export default DisplaySearchFlight;
