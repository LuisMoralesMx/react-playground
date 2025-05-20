import ProfileDetails, { ProfileProps } from './ProfileDetails';

export default async function Profile() {
  const users = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
    cache: 'no-store',
  });

  const userData: ProfileProps = await users.json();

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <ProfileDetails
          name={userData.name}
          email={userData.email}
          timeStamp={userData.timeStamp}
        />
      </div>
    </>
  );
}
