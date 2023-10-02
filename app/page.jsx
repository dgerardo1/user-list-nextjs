import Users from '@/components/Users'

const fetchUsers = async () => { 
  const resp = await fetch('https://reqres.in/api/users')
  const data = await resp.json()
  // console.log(data.data)
  return data.data
 }

const HomaPage = async () => {

  const users = await fetchUsers()

  return (
    <Users users={users} />
  )
}

export default HomaPage