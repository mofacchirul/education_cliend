import React from "react";
import EventsTan from "./EventTan/EventTan";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineCastForEducation } from "react-icons/md";

const Events = () => {
    const [events, loading] = EventsTan();

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if (!Array.isArray(events) || events.length === 0) {
        return <p className="text-red-500 text-center">No events found.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto py-14">
            <div className="text-center mb-8">
                <h1 className="text-yellow-500 mx-auto lg:text-2xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-40 lg:w-60 justify-center">
                    <MdOutlineCastForEducation /> Event Now
                </h1>
                <h1 className="text-2xl lg:text-4xl font-extrabold">
                    Details About <span className="text-yellow-500">Event Now</span> Eduka.
                </h1>
                <p className="text-white">
                    There are many variations of passages available but the majority have suffered alteration.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3  lg:gap-6">
                {events.map((event) => (
                    <div key={event._id} className="card border bg-base-100 rounded-4xl p-3 w-80 lg:w-96 mx-auto shadow-sm">
                        <h1 className="flex gap-1.5 pb-2 items-center text-xl font-semibold">
                            <span className="text-yellow-500"><CiLocationOn /></span> New Work ,USA
                        </h1>
                        <figure>
                            <img src={event.thumbnail} className="w-full h-48 object-cover" alt={event.event_title} />
                        </figure>
                        <div className="flex gap-1.5">
                            <h1 className="flex gap-1.5 items-center text-sm mt-3 lg:text-xl font-semibold">
                                <span className="text-yellow-500"><FaCalendarAlt /></span> {event.date || "No date"}
                            </h1>
                            <h1 className="flex gap-1.5 items-center text-sm mt-3 lg:text-xl font-semibold">
                                <span className="text-yellow-500"><CiClock2 /></span> {event.time || "No time"}
                            </h1>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{event.event_title}</h2>
                            <p>{event.event_description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/join_event/${event._id}`}>
                                    <button className="btn bg-yellow-500 text-white hover:bg-teal-950 hover:rounded-3xl">
                                        Join Event
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
