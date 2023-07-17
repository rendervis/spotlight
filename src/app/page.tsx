"use client";
import { useSearchParams } from "next/navigation";

// project import
import InfoPanel from "@src/components/InfoPanel";
import Person from "@src/components/Person";

//TODO:: replace mock data with api when ready
const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    telephone: "40 123 456 789",
    title: "manager",
  },
  {
    id: 2,
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    telephone: "40 123 456 789",
    title: "analyst",
  },
  {
    id: 3,
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
    telephone: "40 123 456 789",
    title: "analyst",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    telephone: "40 123 456 789",
    title: "analyst",
  },
  {
    id: 5,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    telephone: "40 123 456 789",
    title: "analyst",
  },
  {
    id: 6,
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
    telephone: "40 123 456 789",
    title: "analyst",
  },
];

export default function Home() {
  const searchParams = useSearchParams();

  const searchId = searchParams.get("id");
  const person = people.find((person) => person.id.toString() === searchId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-16 mx-auto max-w7xl">
      {/** List */}
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>

      {/** Info Panel */}
      {person ? (
        <InfoPanel person={person} />
      ) : (
        <p>User not yet present in our database.</p>
      )}
    </div>
  );
}
