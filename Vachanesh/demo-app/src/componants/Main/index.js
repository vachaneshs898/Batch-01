import Button from '../common/Button';
import './index.css';

const users = [
  {
    name: 'Vachanesh',
    city: 'Pune'
  },
  {
    name: 'Snehal',
    city: 'Mumbai'
  },
  {
    name: 'Sanket',
    city: 'Nashik'
  }
]

function Main() {
  const usersData = users.map((user) => {
    return (
      <div className='user-item'>
        <div><span>Name :</span><span>{user.name}</span></div>
        <div><span>city :</span><span>{user.city}</span></div>
      </div>
    )
  })

  return (
    <div className='main-wrapper'>
      <h1>This is Main</h1>

      <Button btnType="primary">User Info</Button>


      <div>
        {usersData}
      </div>
    </div>
  );
}

export default Main;