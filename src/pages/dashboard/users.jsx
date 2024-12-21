import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Input } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export function Users() {
  // const [users, setUsers] = useState([
  //   { id: 1, img: "/img/team-2.jpeg", name: "John Michael", capacity: 500, available: true, date: "23/04/18" },
  //   { id: 2, img: "/img/team-1.jpeg", name: "Alexa Liras", capacity: 300, available: false, date: "11/01/19" },
  //   { id: 3, img: "/img/team-2.jpeg", name: "John Michael", capacity: 500, available: true, date: "23/04/18" },
  //   { id: 4, img: "/img/team-1.jpeg", name: "Alexa Liras", capacity: 300, available: false, date: "11/01/19" },
  // ]);




  const [users, setUsers] = useState([
    { id: 1, img: "/img/team-2.jpeg", name: "John Michael", capacity: 500, available: true, date: "23/04/18", type: "organization" },
    { id: 2, img: "/img/team-1.jpeg", name: "Alexa Liras", capacity: 300, available: false, date: "11/01/19", type: "club" },
    { id: 3, img: "/img/team-2.jpeg", name: "John Michael", capacity: 500, available: true, date: "23/04/18", type: "private" },
    { id: 4, img: "/img/team-1.jpeg", name: "Alexa Liras", capacity: 300, available: false, date: "11/01/19", type: "organization" },
  ]);
  

  const [filter, setFilter] = useState("");

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
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));

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
          Users Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Userame", "Available", "Date_of_Join","type" ,"","",""].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(({ id, img, name, type, available, date }, key) => {
                const className = `py-3 px-5 ${
                  key === filteredUsers.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <Avatar src={img} alt={name} size="sm" variant="rounded" />
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color={available ? "green" : "blue-gray"}
                        value={available ? "Online" : "Offline"}
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">{date}</Typography>
                    </td>
            
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{type}</Typography>
                    </td>
                    <td>

                    </td>
                    <td>

</td>
                    
                    <td className={className}>
                      <button
                        onClick={() => handleDelete(id)}
                        className="flex hover:scale-110 transition-all items-center gap-2"
                      >
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

export default Users;
