import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Booking",
    value: "20",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Users",
    value: "8",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "7",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },

];

export default statisticsCardsData;
