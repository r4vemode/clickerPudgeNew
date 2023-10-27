import React, {useState} from 'react';
import './profile.css';
import {useGameContext} from "../../GameContext";
import Header from "../../components/Header";
import {Link} from "react-router-dom";
import Achivments from "../../UI/achivments/Achivments";
import AchivModals from "../../UI/modals/AchivModals";

const Profile = () => {
  const {
    score,
    name,
    setName,
    savedName,
    setSavedName,
    inputVisible,
    setInputVisible,
    profileImage,
    setProfileImage,
    experience,
    maxExperience,
    level,

  } = useGameContext();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSavedName(name);
      setName('');
      setInputVisible(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const experienceBarStyle = {
    width: `${(experience / maxExperience) * 100}%`,
  }


  return (
    <>
      <div>
        <Header/>
      </div>
    <div className={'profile__container'}>
      <div className="user__container">
        <div className="user__info">
          <div className="user__info-container">
            <div className="profile__flex-container">
              <div className="user__input-img">
                <div className="profile__img-container">
                  <img className={'profile__img'} src={profileImage} alt="Profile"/>
                </div>
                <input
                  id="customFileInput"
                  type="file"
                  onChange={handleImageChange}
                  className="custom-file-input"
                />
                <label style={{
                  cursor: 'pointer'
                }}
                       className="custom-file-label" htmlFor="customFileInput">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_403_3194)">
                      <path d="M22.95 9.59982C22.7625 9.41235 22.5082 9.30703 22.243 9.30703C21.9779 9.30703 21.7236 9.41235 21.536 9.59982L10.644 20.5388C10.1797 21.0032 9.62853 21.3715 9.02188 21.6229C8.41524 21.8742 7.76503 22.0036 7.10838 22.0036C5.78221 22.0037 4.51033 21.477 3.57252 20.5393C2.63472 19.6016 2.10781 18.3298 2.10772 17.0037C2.10762 15.6775 2.63435 14.4056 3.57202 13.4678L14.121 2.87582C14.6851 2.32071 15.4457 2.01099 16.2371 2.01412C17.0285 2.01725 17.7866 2.33297 18.3463 2.89252C18.906 3.45208 19.2219 4.21012 19.2252 5.00153C19.2285 5.79294 18.919 6.5536 18.364 7.11782L7.81502 17.7098C7.62477 17.8921 7.37149 17.9938 7.10802 17.9938C6.84456 17.9938 6.59127 17.8921 6.40102 17.7098C6.21355 17.5223 6.10824 17.268 6.10824 17.0028C6.10824 16.7377 6.21355 16.4833 6.40102 16.2958L15.793 6.86082C15.9752 6.67222 16.076 6.41961 16.0737 6.15742C16.0714 5.89522 15.9662 5.64441 15.7808 5.459C15.5954 5.27359 15.3446 5.16842 15.0824 5.16615C14.8202 5.16387 14.5676 5.26466 14.379 5.44682L4.98702 14.8818C4.70839 15.1604 4.48737 15.4911 4.33657 15.8552C4.18578 16.2192 4.10816 16.6093 4.10816 17.0033C4.10816 17.3973 4.18578 17.7875 4.33657 18.1515C4.48737 18.5155 4.70839 18.8462 4.98702 19.1248C5.55864 19.6703 6.3184 19.9746 7.10852 19.9746C7.89864 19.9746 8.6584 19.6703 9.23002 19.1248L19.778 8.53182C20.696 7.59012 21.206 6.32467 21.1976 5.00959C21.1892 3.69451 20.663 2.4357 19.733 1.50584C18.803 0.575987 17.5441 0.0499642 16.229 0.0417243C14.914 0.0334843 13.6486 0.54369 12.707 1.46182L2.15802 12.0538C0.845201 13.3666 0.107666 15.1472 0.107666 17.0038C0.107666 18.8604 0.845201 20.641 2.15802 21.9538C3.47084 23.2666 5.25141 24.0042 7.10802 24.0042C8.96463 24.0042 10.7452 23.2666 12.058 21.9538L22.95 11.0178C23.0435 10.9249 23.1176 10.8144 23.1682 10.6927C23.2188 10.5711 23.2448 10.4406 23.2448 10.3088C23.2448 10.177 23.2188 10.0466 23.1682 9.9249C23.1176 9.80322 23.0435 9.69275 22.95 9.59982Z" fill="#374957"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_403_3194">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  Выберете аватар
                </label>
              </div>
              <div className="user__score">
                <h1 className="profile__title">{savedName}</h1>
                {inputVisible && (
                  <input
                    type="text"
                    className="username-input"
                    placeholder={'Enter your name'}
                    value={name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                  />
                )}
                <p className="profile__score">Pugs: {score}</p>
                <div className="lvl__container">
                  LVL: {level}
                  <div className="experience-bar">
                    <div className="experience-fill" style={experienceBarStyle}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="user__achievements">
        <h2 className="user__achievements-title">Achievements</h2>
        <div className="user__achievements__list-container">
          <Achivments />
        </div>
      </div>
    </div>
</>
)
  ;
};

export default Profile;