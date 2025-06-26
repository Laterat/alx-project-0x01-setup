
import { UserData, UserModalProps } from '@/interfaces';
import React, { useState } from 'react';


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {

    const [user, setUser] = useState<UserData>({
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value}=e.target;
        setUser((prevUser)=>({...prevUser, [name]: value }));
    }

    const handleSubmit=(e: React.FormEvent) =>{
        e.preventDefault();
        onSubmit(user);
        onClose();
    }
     
    return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                 <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
                      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                      
                      <form onSubmit={handleSubmit}>
                              
                                {/* Basic User Info */}
                                   <div className="mb-4 flex space-x-4   items-center">
                                         <label htmlFor="name" className=" text-gray-700 font-medium ">Name</label>
                                         <input
                                               type="text"
                                               id="name"
                                               name="name"
                                               value={user.name}
                                               onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter full name"
                                                required
                                              />
                                    </div>
                                    


                             <div className="flex justify-between items-center">
                                  <button
                                          type="button"
                                          onClick={onClose}
                                          className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                                        >Cancel</button>

                                  <button
                                         type="submit"
                                         className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                         >Add Ueer</button>
                            </div>  
                      </form>
                 </div>
            </div>
    );
}



export default UserModal;