import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import Header from '@/components/layout/Header';
import { UserData, UserProps } from '@/interfaces';
import React, { useState } from 'react';

const Users: React.FC<{posts: UserProps[]}>= ({posts}) => {
  

    const [user, setUser] = useState<UserData | null>(null);

    const [isModalOpen, setModalOpen] = useState(false);

   const handleAddUser = () => {
       setUser((prevUser) => ({...prevUser,
                                  id: posts.length + 1, 
                                  name: '', username: '',
                                   email: '', phone: '', 
                                   website: '', 
                                   address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },
                                    company: { name: '', catchPhrase: '', bs: '' } 
                                }));
   }




  return (
    <div className="flex flex-col h-screen">
        <Header/>
        <main className='p-4'>
             <div className="flex justify-between">
                 <h1 className="text-2xl font-semibold">User Page</h1>
                 <button   onClick={() => setModalOpen(true)}
                       className="bg-blue-700 px-4 py-2 rounded-full text-white"
                       >Add User</button>
             </div>
             <div className="grid grid-cols-2 gap-2">
                  {
                      posts.map(({ id, name, username, email, address, phone, website, company} : UserProps, key: number) => (
                                <UserCard key={key} id={id}  name={name}  username={username} email={email} 
                                  address={address}  phone={phone} website={website} company={company} />  )
                                 )
                  }
             </div>
        </main>

        {
          isModalOpen &&(
            <UserModal 
              onClose={() => setModalOpen(false)} 
              onSubmit={handleAddUser} 
            />
          )
        }
    </div>
         
    
  );
};


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;
