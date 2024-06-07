import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useRole from "../../../customHooks/useRole";
import Loading from "../../Shared/Loading/Loading";
import BookModal from "../BookModal/BookModal";
import ShowAllFlight from "../ShowAllFlight/ShowAllFlight";

const Flight = () => {
  const [allFlight, setAllFlight] = useState([]);
  const [role] = useRole();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [flight, setFlight] = useState(null);

  useEffect(() => {
    const fetchingFlights = () => {
      setLoading(true);
      fetch(`https://skytrip.vercel.app/allFlight`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setAllFlight(data);
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Fetch data failed");
          setError(error?.message);
        });
    };

    fetchingFlights();
  }, []);

  //search functionality
  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;

    fetch(`https://skytrip.vercel.app/searchFlight?search=${search}`)
      .then((res) => res.json())
      .then((data) => setAllFlight(data));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row justify-center mt-10"
      >
        <div className="form-control mb-5 md:mb-0  md:w-1/2 mr-4">
          <input
            type="text"
            name="search"
            placeholder="Enter location"
            className="input input-bordered w-full"
          />
        </div>
        <input
          className="btn bg-deepViolet btn-md text-white font-bold "
          type="submit"
          value="Search"
        />
      </form>
      {allFlight.length === 0 ? (
        <p className="text-center font-bold mt-10 text-red-500 my-10">
          No flights are found
        </p>
      ) : (
        allFlight?.map((flight) => (
          <ShowAllFlight
            key={flight._id}
            flight={flight}
            setFlight={setFlight}
            role={role}
          ></ShowAllFlight>
        ))
      )}

      {flight && <BookModal flight={flight} setFlight={setFlight}></BookModal>}
    </div>
  );
};

export default Flight;
