import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice"


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
          })
        );
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Ubsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
      // Toggle GPT Search button
      dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
      className="w-48 mx-auto md:mx-0" src={LOGO} alt="logo" 
      />
      { user && (
        <div className="flex justify-end items-center gap-4 p-4">
          {showGPTSearch && <select className="p-2 bg-gray-900 text-white rounded" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}

          <button
            className="py-2 px-4 bg-purple-900 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            { showGPTSearch ? "Home" : "GPT Search"}
          </button>

          <img className="w-10 h-10" alt="usericon" src={user.photoURL} />

          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>

      )}
    </div>
  )
}

export default Header