import NextImage from "next/image";
//third party
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

// project import
import { Person } from "@src/types/global";

export default function InfoPanel({ person }: { person: Person }) {
  const { name, email, telephone, title, role, imageUrl } = person;

  return (
    <div className="flex flex-col w-full p-16">
      <div
        key={email}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-full "
      >
        <div className="flex flex-1 flex-col p-8">
          <NextImage
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={imageUrl}
            alt="Person avatar"
            width={100}
            height={100}
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{title}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {role}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Email
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${telephone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
