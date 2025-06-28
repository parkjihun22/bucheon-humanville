// src/pages/FloorPlan/Emodel.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "46", key: "59A" },
    { title: "59A", key: "59B" },
    { title: "84A", key: "84A" },
    { title: "84B", key: "84B" },
  ];

  // selectedType과 동일한 키를 가진 객체여야 합니다.
  const vrUrls = {
    "59A": "http://xn--oi2b45cf3edslp8bdznnf9d50q.com/vr/46.html",
    "59B": "http://xn--oi2b45cf3edslp8bdznnf9d50q.com/vr/59a.html",
    "84A": "https://xn--oi2b45cf3edslp8bdznnf9d50q.com/vr/84a.html",
    "84B": "https://xn--oi2b45cf3edslp8bdznnf9d50q.com/vr/84b.html",
  };

  const [selectedType, setSelectedType] = useState("59A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  // 페이지 이동 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤에 따라 헤더 스타일 변경용
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <title>원종 휴먼빌 – E-모델하우스</title>
        <meta
          name="description"
          content="원종 휴먼빌 E-모델하우스를 온라인으로 편리하게 체험해 보세요."
        />
        <meta name="keywords" content="원종휴먼빌, E-모델하우스, 온라인모델하우스" />
        <link
          rel="canonical"
          href="https://your-domain.com/FloorPlan/Emodel"
        />
        <meta
          property="og:title"
          content="원종 휴먼빌 – E-모델하우스"
        />
        <meta
          property="og:description"
          content="원종 휴먼빌 E-모델하우스를 온라인으로 편리하게 체험해 보세요."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/assets/thumbnail.png"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/FloorPlan/Emodel"
        />
        <meta property="og:site_name" content="원종 휴먼빌" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="원종 휴먼빌 – E-모델하우스" />
        <meta
          name="twitter:description"
          content="원종 휴먼빌 E-모델하우스를 온라인으로 편리하게 체험해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/assets/thumbnail.png"
        />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        원종 휴먼빌 – E-모델하우스
      </h1>

      {/* 상단 탭 버튼 */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* VR 임베드 섹션 */}
      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
