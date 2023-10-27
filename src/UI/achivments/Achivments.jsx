import React, {useEffect} from 'react';
import '../../pages/profile/profile.css'
import {useGameContext} from "../../GameContext";
import AchivModals from "../modals/AchivModals";
import './achivments.css'
const Achivments = () => {
  const {
    isModalOpen,
    setModalOpen,
    score,
    isAchievementUnlocked,
    setAchievementUnlocked
  } = useGameContext();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (score >= 100) {
      setAchievementUnlocked(true);
    }
  }, [score]);

  return (
    <>
      {isAchievementUnlocked && (
        <ul className="user__achievements-list">
          <li className="user__achievements-item">
            <img
              className={'profile__achieve'}
              src="/img/profile-achive.jpg"
              alt=""
              onClick={openModal}
            />
          </li>
        </ul>
      )}

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AchivModals />
          </div>
        </div>
      )}
    </>
  );
};

export default Achivments;