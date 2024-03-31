import { useLoaderData } from "react-router-dom";

const Booking = () => {
    const booking = useLoaderData();
    return (
        <div className="container mx-auto">
           <p>Room Rent: {booking.price} Euro</p>
           <button className="border border-green-400 rounded-lg w-36">{booking.book}</button>
        </div>
    );
};

export default Booking;