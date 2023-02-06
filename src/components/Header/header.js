import './header.scss'

function Header(props) {
    return (
      <div className="main__header">
        {props.children}
      </div>
    );
  }
export default Header