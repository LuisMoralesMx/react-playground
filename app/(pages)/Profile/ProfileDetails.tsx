'use client';

export interface ProfileProps {
  name: string;
  email: string;
  timeStamp: string;
}

export default function ProfileDetails({ name, email, timeStamp }: ProfileProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold">Profile</h1>

        <div className="mt-5">
          <p className="mt-4 text-lg">Welcome, {name}!</p>
          <p className="mt-2 text-lg">Email: {email}</p>
          <p className="mt-2 text-lg">Last Updated: {new Date(timeStamp).toLocaleString()}</p>
        </div>
      </div>
    </>
  );
}
