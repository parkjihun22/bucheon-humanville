import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "확정된 개발호재로<br />부천을 더 새롭게 살수록 높아지는 미래가치",
    contentText:
      "연축지구, 효자구역 , 회덕IC <br />충청권 광역철도 등 풍부한 미래가치<br />",
  },
  {
    img: section2Image2,
    titleText: "쌍용건설만의 특화설계 및 쾌적한 단지설계",
    contentText:
      "세련된 커튼월룩 외관<br />펜트리 및 광폭드레스룸 등 특화설계 적용",
  },
  {
    img: section2Image3,
    titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통",
    contentText:
      "2호선 읍내역(28년예정)단지 인근 역세권<br />호남고속도로, 경부고속도로 인접<br /> 광역교통 프리미엄",
  },
  {
    img: section2Image4,
    titleText:
      "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활",
    contentText:
      "이마트, 하나로마트 , 오정농수산물 시장과<br /> 부천병원,회덕초등학교 등 편리한 인프라",
  },
  {
    img: section2Image5,
    titleText: "품격있는 주거공간 프리미엄",
    contentText:
      " 전세대 4BAY 판상형 설계로 활용도 높은 주거공간<br/>영구조망권으로 조망권프리미엄까지",
  },
  {
    img: section2Image6,
    titleText:
      "부천의 중심<br /> 단지 앞 도서관, <br /> 계족산 공원프리미엄까지  ",
    contentText:
      " 부천의 중심 핵심주거타운 <br /> 쌍용건설 프리미엄은 덤으로",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>원종 휴먼빌 클라츠 - 입지안내</title>
        <meta
          name="description"
          content="이 단지는 최적의 입지 조건과 우수한 교통망, 풍부한 생활 인프라, 쾌적한 녹지 환경이 완벽하게 어우러져, 편리한 생활과 미래 가치 상승을 기대할 수 있습니다. 입지안내를 통해 주변 시설, 접근성 및 발전 가능성을 상세히 확인해보세요"
        />
        <meta
          name="keywords"
          content="원종 휴먼빌 클라츠, 부천 휴먼빌 클라츠, 원종 휴먼빌 클라츠모델하우스"
        />
        <link rel="canonical" href="https://www.marvelpartners.co.kr/LocationEnvironment/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="원종 휴먼빌 클라츠 - 입지안내"
        />
        <meta
          property="og:description"
          content="이 단지는 최적의 입지 조건과 우수한 교통망, 풍부한 생활 인프라, 쾌적한 녹지 환경이 완벽하게 어우러져, 편리한 생활과 미래 가치 상승을 기대할 수 있습니다. 입지안내를 통해 주변 시설, 접근성 및 발전 가능성을 상세히 확인해보세요"
        />
        <meta
          property="og:image"
          content="https://www.marvelpartners.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.marvelpartners.co.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="원종 휴먼빌 클라츠" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="원종 휴먼빌 클라츠 - 입지안내"
        />
        <meta
          name="twitter:description"
          content="이 단지는 최적의 입지 조건과 우수한 교통망, 풍부한 생활 인프라, 쾌적한 녹지 환경이 완벽하게 어우러져, 편리한 생활과 미래 가치 상승을 기대할 수 있습니다. 입지안내를 통해 주변 시설, 접근성 및 발전 가능성을 상세히 확인해보세요"
        />
        <meta
          name="twitter:image"
          content="https://www.marvelpartners.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.marvelpartners.co.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
				 {
			 "@context": "https://schema.org",
			 "@type": "WebPage",
			 "name": "원종 휴먼빌 클라츠 - 입지안내",
			 "description": "이 단지는 최적의 입지 조건과 우수한 교통망, 풍부한 생활 인프라, 쾌적한 녹지 환경이 완벽하게 어우러져, 편리한 생활과 미래 가치 상승을 기대할 수 있습니다. 입지안내를 통해 주변 시설, 접근성 및 발전 가능성을 상세히 확인해보세요",
			 "url": "https://www.marvelpartners.co.kr/LocationEnvironment/intro"
				 }
				 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        원종 휴먼빌 클라츠 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        원종 휴먼빌 클라츠의 입지 안내 페이지는 이 단지의 위치와 주변 인프라에
        대한 상세 정보를 제공합니다. 교통, 교육, 상업시설 등 다양한 생활 편의
        시설을 고려하여 이 아파트가 제공하는 생활 환경을 종합적으로 살펴볼 수
        있습니다. 입지 조건을 바탕으로 더 나은 선택을 할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 부천</div>
        <div>살수록 높아질 원종 휴먼빌 클라츠</div>
        <div>도시를 압도할 자부심 </div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="원종 휴먼빌 클라츠 입지안내 이미지"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      {/* <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※평택 브레인시티 개발계획 관련내용은 '경기도 고시 제2022-283호' 및
          '평택도시공사 브레인시티 토지 이용 계획'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※아주대학교 평택병원 및 카이스트 평택캠퍼스 관련 내용은 '평택시청'
          2024년 주요업무계획을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※평택동부고속화도로 관련 내용은 '평택시 고지 제 2023-407호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨
          교통분야 3대 혁신 전략'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※신설도로 관련내용은 '경기도 평택시 고시 제2023-316호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계
          기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을
          알려드립니다
        </div>
        <div className={styles.notice}>
          ※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경,
          허가관청 및 국가시책에 따라 변경될 수 있습니다.
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
