import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-12 mb-5">
        <img src={logo} alt="" />
      </div>
      <p className="text-center text-xl text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl  font-medium text-[#403F3F] text-center mb-2">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
