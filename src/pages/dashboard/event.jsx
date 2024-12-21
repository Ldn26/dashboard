import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Input, Button } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export function Event() {
  const [formData, setFormData] = useState({
    placeOfBirth: "",
    checkInDate: "",
    checkOutDate: "",
    reservationType: "",
  });
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    { id: 1, eventName: "Tech Conference 2023", type: "conference", location: "New York", start_date: "2023-09-12", end_date: "2023-09-14", img: "/img/tech-conference.jpg" },
    { id: 2, eventName: "Art Expo", type: "exhibition", location: "Los Angeles", start_date: "2023-10-05", end_date: "2023-10-07", img: "/img/art-expo.jpg" },
    { id: 3, eventName: "Music Festival", type: "festival", location: "Austin", start_date: "2023-11-20", end_date: "2023-11-22", img: "/img/music-festival.jpg" },
    { id: 4, eventName: "Startup Meetup", type: "meetup", location: "San Francisco", start_date: "2024-01-15", end_date: "2024-01-16", img: "/img/startup-meetup.jpg" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);

    try {
      const response = await fetch("/api/delete-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      console.log("User deleted successfully:", await response.json());
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) => user.eventName.toLowerCase().includes(filter.toLowerCase()));

  const formFields = [
    { name: "eventName", placeholder: "Event name" },
    { name: "location", placeholder: "Location" },
    { name: "checkInDate", placeholder: "Check-in Date", type: "date" },
    { name: "checkOutDate", placeholder: "Check-out Date", type: "date" },
  ];

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by Name"
        className="mb-4 w-full"
      />
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Event Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg  h-[90%] w-[50%] relative" style={{ maxWidth: "80%", maxHeight: "90vh" }}>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                  X
                </button>
                <div className="flex space-x-6">
                  <div className="flex-1 ml-30">
                    <h3 className="font-bold text-white bg-black w-full p-4 text-2xl mb-4">Add A New Event</h3>
                    <div className="mb-1 flex flex-col gap-6">
                      {formFields.map(({ name, placeholder, type = "text" }) => (
                        <Input
                          key={name}
                          size="lg"
                          type={type}
                          placeholder={placeholder}
                          value={formData[name] || ""}
                          name={name}
                          onChange={handleChange}
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />

                      ))}
<div className="flex items-center justify-center">
<button className="bg-green-400 px-8  w-[400px] py-3 hover:scale-110 transition-all   text-white rounded-full  ">
                        Confirm
                      </button>
</div>

              

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className="relative">
                <button onClick={() => setIsOpen(true)} className="absolute bg-green-600 text-sm px-4 hover:scale-105 transition-all py-2 right-12 text-white rounded-full">Add Event</button>
                {["Event name", "type", "location", "start_date", "end_date"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(({ id, eventName, type, location, start_date, end_date }, key) => {
                const className = `py-3 px-5 ${key === filteredUsers.length - 1 ? "" : "border-b border-blue-gray-50"}`;

                return (
                  <tr key={id}>
                    <td></td>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {eventName}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">{location}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{type}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{start_date}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{end_date}</Typography>
                    </td>
                    <td className={className}>
                      <button onClick={() => handleDelete(id)} className="flex hover:scale-110 transition-all items-center gap-2">
                        <MdDelete size={20} color="red" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Event;
