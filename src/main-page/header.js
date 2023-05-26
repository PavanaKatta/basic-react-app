//import logo from './GloboLogo.png';
// export function header(){

//   return(

//   );
// }

const Header = ({ title, subTitle }) => (
  <header className="row">
    <div className="col-md-5">
      {title}
      {/* <img src={logo} className="logo" alt="logo" /> */}
    </div>
    <div className="col-md-7 mt-5 subtitle">{subTitle}</div>
  </header>
);
export default Header;
