import NextLink from "next/link";
import NextImage from "next/image";

// third party
import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";

// project import
import { Person } from "@src/types/global";

export default function Person({ person }: { person: Person }) {
  return (
    <li
      key={person.email}
      className="relative flex justify-between gap-x-6 py-5"
    >
      <div className="flex gap-x-4">
        <NextImage
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={person.imageUrl}
          alt="Person avatar"
          width={80}
          height={80}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            <NextLink href={`/?id=${person.id}`}>
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {person.name}
            </NextLink>
          </p>
          <p className="mt-1 flex text-xs leading-5 text-gray-500">
            {person.email}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{person.role}</p>
          {person.lastSeen ? (
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Last seen{" "}
              <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
            </p>
          ) : null}
        </div>
        <ChevronRightIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}
