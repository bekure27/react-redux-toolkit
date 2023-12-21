import { useSelector, useDispatch } from 'react-redux'
import {toggleMode} from '../../redux/themeSlice' 
import { logoutUser } from '../../redux/authSlice';

function Home() {
  const theme = useSelector((state) => state.theme.mode);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
// const theme = "light";
// const user = 1;
  console.log(useSelector((state) => state.auth.user))
// console.log(user)
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      {user ? (
        <div>
          <h2>Welcome,   {user.username} !</h2>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}

      {user ? (
        <div>
          <p>Change theme here</p>
          <button onClick={()=> dispatch(toggleMode()) }>Toggle Theme</button>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
