import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <>
        <span className="welcome">Welcome, {user.name}</span>
        &nbsp; &nbsp;
        <Link to="/notes">Notes History</Link>
        &nbsp; | &nbsp;
        <Link to="/notes/new">New Note</Link>
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </>
    </nav>
  );
}
