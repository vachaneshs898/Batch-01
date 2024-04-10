import Button from "../common/Button";
import './index.css';

function Header() {
  return (
    <div className="header">
      <h1>This is Header</h1>
      <Button btnType="error" icon="*" disabled>Log in</Button>
    </div>
  );
}

export default Header;
