import React, {useEffect, useState} from 'react';
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

  const [activeAchievementId, setActiveAchievementId] = useState(null);

  const openModal = (id) => {
    setActiveAchievementId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveAchievementId(null);
  };

  const achievements = [
    { threshold: 100, imgSrc: "/img/100pugs.jpg", id: 1 },
    { threshold: 1000, imgSrc: "/img/1000pugs.jpg", id: 2 },
    { threshold: 10000, imgSrc: "/img/10000pugs.jpg", id: 3 },
    { threshold: 100000, imgSrc: "/img/100000pugs.jpg", id: 4 },
    { threshold: 1000000, imgSrc: "/img/1000000pugs.jpg", id: 5 },
    { threshold: 10000000, imgSrc: "/img/10000000pugs.jpg", id: 6 },
  ];

  useEffect(() => {
    achievements.forEach((ach) => {
      if (score >= ach.threshold) {
        setAchievementUnlocked((prev) => ({ ...prev, [ach.id]: true }));
      }
    });
  }, [score]);

  return (
    <>
      <ul className="user__achievements-list">
        {achievements.map((ach) => (
          isAchievementUnlocked[ach.id] && (
            <li className="user__achievements-item" key={ach.id}>
              <img
                className={"profile__achieve"}
                src={ach.imgSrc}
                alt=""
                onClick={() => openModal(ach.id)}
              />
            </li>
          )
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {activeAchievementId && <AchivModals achievementId={activeAchievementId} />}
          </div>
        </div>
      )}
    </>
  );
};


export default Achivments;