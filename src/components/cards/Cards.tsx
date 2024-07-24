import { useRouter } from 'next/navigation';
import React from 'react';


const UserCard = ({ user }:any) => {
    
  const router = useRouter();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto bg-white" onClick={()=> {router.push(`/home/${user.homeId}`)}}>
      {/* <img className="w-full" src={user.photo} alt={`${user.name}'s photo`} /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.tenantName || "NA"}</div>
        <p className="text-gray-700 text-base">Home Id: {user.homeId}</p>
        <p className="text-gray-700 text-base">Phomne Number: {user.tenantPhoneNummber}</p>
      </div>
    </div>
  );
};

export const CardList = ({ users } : any) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        {users.map((user: any, index: React.Key | null | undefined) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample user data


// const App = () => {
//   return (
//     <div>
//       <h1 className="text-center text-3xl my-4">User Cards</h1>
//       <UserCardList users={users} />
//     </div>
//   );
// };

// export default App;
