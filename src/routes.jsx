import {
  HomeIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { Home, Tables, Users ,Event } from "@/pages/dashboard";
const icon = {
  className: "w-5 h-5 text-inherit",
};
export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },     
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Hestels",
        path: "/tables",
        element: <Tables />,
      },
    //  {     
    //    icon: <TableCellsIcon {...icon} /> , 
    //    path:"/hostel/:id"  , `
    //    name: "HestelDetail",
    //   element:<HostelDetailPage />  
    //   } , 
       {
        icon: <TableCellsIcon {...icon} />,
        name: "Event",
        path: "/event" , 
        element: <Event />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Users" ,
        path: "/users" , 
        element: <Users />,
      },

    ],
  },

];

export default routes;
