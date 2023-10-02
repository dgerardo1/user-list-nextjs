import Image from "next/image";

const getUser = async (id) => { 
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}


const UserPage = async ({ params }) => {
    const user = await getUser( params.id );

    getUser()
    return (
        <div className="bg-slate-400 p-10 rounded-md">
            <Image 
                src={user.avatar}
                width={100}
                height={100}
                alt=""
                className="m-auto my-4"
            />
            <h3
                className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
            <p>email: {user.email}</p>
        </div>
    )
}

export default UserPage