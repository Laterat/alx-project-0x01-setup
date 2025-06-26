
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
    return (
          <div className=" max-w-xl mx-auto my-6 p-6  bg-white  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">

            <div className="mb-4 ">
                <h1 className="text-2xl font-semibold flex justify-center">Infomation</h1>
                <h1> <span className=" font-semibold text-gray-800">User ID:</span> {id}</h1>
               <h2><span className=" font-semibold text-gray-800">Name:</span> {name}</h2>
                <p><span className=" font-semibold text-gray-800">Username: </span>{username}</p>
                <p><span className=" font-semibold text-gray-800">Email:</span> {email}</p>
                <p><span className=" font-semibold text-gray-800">Phone:</span> {phone}</p>
                <p><span className=" font-semibold text-gray-800">Website: </span>{website}</p>
            </div>

            <div className="mb-4">
                <h3>Address</h3>
                <p>Street: {address.street}</p>
                <p>Suite: {address.suite}</p>
                <p>City: {address.city}</p>
                <p>Zipcode: {address.zipcode}</p>
                <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
             </div>  

            <div className="mb-4">
                <h3>Company</h3>
                <p>Name: {company.name}</p>
                <p>Catch Phrase: {company.catchPhrase}</p>
                <p>BS: {company.bs}</p>
            </div>

            
          </div>
    );
}

export default UserCard;