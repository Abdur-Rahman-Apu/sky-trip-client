import React from 'react';

const DisplayCompanyPaidInfo = ({ item }) => {

    return (
        <tr>
            <td>{item?.buyerEmail}</td>
            <td>{item?.transactionId}</td>
            <td>{item?.flightInfo?.from}</td>
            <td>{item?.flightInfo?.destination}</td>
            <td>{item?.flightInfo?._id}</td>
            <td>{item?.flightInfo?.time}</td>
            <td>{item?.flightInfo?.flightDate}</td>
            <td>{item?.bookInfo?.seat}</td>
            <td>{item?.price}</td>

        </tr>
    );
};

export default DisplayCompanyPaidInfo;