import PropTypes from "prop-types";

export default function Navbar(prop) {
  return (
    <>
      <div className="Container  font-semibold bg-purple-800 h-[8vh] shadow-xl  ">
        <ul>
          <li className="flex justify-center text-2xl text-white py-2">
            {prop.Name}
          </li>
        </ul>
      </div>
    </>
  );
}

Navbar.proptype = {
  Name: PropTypes.string,
};

Navbar.defaultProptypes = {
  Name: "Welcome to the Word Counter",
};
