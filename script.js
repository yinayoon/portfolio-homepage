// 팝업 관련 요소 가져오기
const popupOverlay = document.getElementById('popupOverlay');
const popupIframe = document.getElementById('popupIframe');
const projectInfo = document.getElementById('projectInfo');
const closePopupButton = document.getElementById('closePopup');

// 졸업작품 버튼 클릭 이벤트
document.getElementById('showVideo1').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/wp6_vV1jOVE';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>프로젝트 정보</h3>
    <ul>
      <li><strong>제작 년도 :</strong> 2017</li>
      <li><strong>제작 기간 :</strong> 4개월</li>
      <li><strong>재생 길이 :</strong> 2분 49초</li>
    </ul>
    <h4>활용 미디어 소프트웨어</h4>
    <ul>
      <li><strong>3D 모델링 및 애니메이션:</strong> 3D's Max</li>
      <li><strong>합성 및 비디오 편집:</strong> Nuke, Premiere Pro, After Effects</li>
      <li><strong>그래픽 디자인:</strong> Photoshop</li>
    </ul>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 현대건설기술교육원 영상 1 버튼 클릭 이벤트
document.getElementById('showVideo2').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/AuhMEIVxDHE';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>현대건설기술교육원 강의를 위해 개발한 첫 번째 예제 게임입니다.</h3>
    <ul>
      <li><strong>게임 룰 : </strong> 포크레인이 20초 안에 골인 지점에 도달해야 함</li>
      <li><strong>이동 :</strong>  W(앞), S(뒤), D(오른쪽), A(왼쪽)</li>
      <li><strong>재시작 방법 :</strong> Space bar</li>
    </ul>
    <button class="link-button" onclick="window.open('https://github.com/yinayoon/Example-01-Driving-Poclain', '_blank')">GITHUB</button>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 현대건설기술교육원 영상 2 버튼 클릭 이벤트
document.getElementById('showVideo3').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/1dJA_3MQJRw';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>현대건설기술교육원 강의를 위해 개발한 두 번째 예제 게임입니다.</h3>
    <ul>
      <li><strong>게임 룰 : </strong> 마우스로 컨트롤하여 공간을 살펴보고 원하는 센서의 데이터를 확인 (건설 시공 환경 데이터는 - Json 데이터에서 추출함)</li>
      <li><strong>이동 :</strong> 마우스 컨트롤 및 Space bar로 회전 및 위치 초기화</li>
    </ul>
    <button class="link-button" onclick="window.open('https://github.com/yinayoon/Example-02-Digital-Twin', '_blank')">GITHUB</button>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 현대건설기술교육원 영상 3 버튼 클릭 이벤트
document.getElementById('showVideo4').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/zI8jZFITG-U';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>현대건설기술교육원 강의를 위해 개발한 세 번째 예제 게임입니다.</h3>
    <ul>
      <li><strong>게임 룰 : </strong> 드론이 제한시간 동안 비트 코인을 수집</li>
      <li><strong>이동 :</strong> W(앞), S(뒤), D(오른쪽), A(왼쪽), E(위), Q(아래)</li>
      <li><strong>재시작 방법:</strong> Space bar</li>
    </ul>
    <button class="link-button" onclick="window.open('https://github.com/yinayoon/Example-03-Driving-Drone', '_blank')">GITHUB</button>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 현대건설기술교육원 영상 4 버튼 클릭 이벤트
document.getElementById('showVideo5').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/BNePcGlrugk';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>현대건설기술교육원 강의를 위해 개발한 네 번째 예제 게임입니다.</h3>
    <ul>
      <li><strong>내용 :</strong> 스마트폰 환경에서 로봇의 애니메이션을 AR 형태로 확인할 수 있음 (Vuforia 홈페이지에서 Vuforia Engine SDK를 다운 받아 Unity Editor에 import하여야 함, Vuforia Engine 10.27버전 사용)</li>
    </ul>
    <button class="link-button" onclick="window.open('https://github.com/yinayoon/Example-04-AR-Sphere-Robot', '_blank')">GITHUB</button>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 현대건설기술교육원 영상 5 버튼 클릭 이벤트
document.getElementById('showVideo6').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/qQnPvwk4-UQ';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>현대건설기술교육원 강의를 위해 개발한 다 번째 예제 게임입니다.</h3>
    <ul>
      <li><strong>게임 룰 : </strong> 드론이 제한시간 동안 파랑, 초록, 빨강의 링을 통과하여 점수를 얻는 게임 (파랑 : 5점, 초록 : 3점, 빨강 : 1점 / 현재 영상에는 거꾸로 되어 있으나 Github의 코드에는 수정되어 업로드되어 있음)</li>
      <li><strong>이동 :</strong> Meta Quest 2 Controller Thumbstick (앞,뒤,오른쪽,왼쪽), Trigger(위), Grip(아래)</li>
      <li><strong>재시작 방법 :</strong> 왼쪽 컨트롤러 Y버튼, 오른쪽 컨트롤러 B버튼</li>
      <li><strong>HMD 장비 :</strong>  메타 퀘스트 2</li>
    </ul>
    <button class="link-button" onclick="window.open('https://github.com/yinayoon/Example-05-VR-Driving-Drone', '_blank')">GITHUB</button>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 전자기술연구원 영상 1 버튼 클릭 이벤트
document.getElementById('showVideo7').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/-KPKUhT_fBc';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>디지털 트윈 3D 가시화 응용소프트웨어 개발</h3>
    <p>
      공간 내에 센서를 통해 넘어온 에너지와 관련한 다양한 데이터를 가시화하여 이를 사용자가 웹상에서 확인할 수 있는 애플리케이션을 개발하였습니다.
    </p>
    <p>
      우선 데이터를 수집하는 센서가 설치된 공간과 동일한 구조의 3차원 모델을 블랜더(Blender) 소프트웨어를 활용하여 구성하였습니다. 이후 유니티 엔진(Unity Engine)을 사용해 데이터 가시화, 사용자 인터랙션 부분을 개발하였습니다. 
      최종적으로 유니티 엔진의 크로스 플랫폼 기능을 활용해 WebGL로 빌드하였습니다.
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 전자기술연구원 영상 2 버튼 클릭 이벤트
document.getElementById('showVideo8').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/E7dueP8KHwU';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>디지털 트윈 3D 가시화 응용소프트웨어 개발</h3>
    <p>
      공장 내부에 센서를 통해 넘어온 에너지와 관련한 다양한 데이터를 가시화하여 이를 사용자가 웹상에서 확인할 수 있는 애플리케이션을 개발하였습니다.
    </p>
    <p>
      깊이 값을 적외선으로 추출해 능동적 3차원 획득 방식을 사용하는 Azure Kinect DK을 활용해 공간을 복원하고 이를 통해 획득한 Point Cloud를 Unity Engine에 업로드하여 에너지 관리 애플리케이션을 개발하였습니다. 
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 전자기술연구원 영상 3 버튼 클릭 이벤트
document.getElementById('showVideo9').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/ro1YcQYlIa4';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>안전한 실내 스포츠 활동을 위한 지능형 실내 환경 및 안전 관리 기술 개발</h3>
    <p>
      재실자의 운동 중 안전 및 상황을 포착하기 위해 개발된 어플리케이션입니다. 웹을 통해 넘어오는 Json형식의 데이터를 C#의 Jobject, Jarray 등을 활용하여 파싱 후 이를 유니티로 가시화 합니다. 검출된 재실자별로 1초에 5개 프레임 데이터가 넘어옵니다. 또한 각각 ID 값이 있으며 딥러닝시 반복해서 재실자의 숫자와 ID값이 변하므로 이를 고려하여 개발하고 가시화 하였습니다. (영상 촬영에는 zed 카메라가 사용되었고 재실자 검출에는 YOLOZ가 활용되었습니다.) 
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 전자기술연구원 영상 4 버튼 클릭 이벤트
document.getElementById('showVideo10').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/c43pqXHfVZ8';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>2차원 도면을 활용한 3차원 공간 제작 웹 애플리케이션 개발 </h3>
    <p>
      해당 애플리케이션은 사용자가 웹에서 2차원 도면을 기반으로 마우스로 박스를 그리고 이후 3차원의 공간을 만들어 보는 것을 그 목적을 둡니다. 이 애플리케이션을 활용하면 대략적인 건물의 형태, 건물의 부피 값 등을 확인 할 수 있습니다.
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 한양대학교 영상 버튼 클릭 이벤트
document.getElementById('showVideo11').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/tpFVJ7_bkPw';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>정신질환(우울증 및 조현병) 치료를 위한 다중감각 가상현실(VR)/증강현실(AR) 환경 구현</h3>
    <p>
      해당 프로젝트를 위해 개발된 소프트웨어는 Tobii사의 시선추적기능이 탑재되어 있는 HTC VIVE PRO EYE가 사용되었습니다. 최대 20개의 360도 영상을 적용할 수 있고 설문 기능 이나 다양한 데이터를 검출하여 출력하는 기능 등을 가지고 있습니다. 일단 사용자는 HMD를 활용하여 단순히 360도 영상을 감상합니다. 그러나 컴퓨터의 경우 딥러닝의 YOLO3 모델이 적용된 영상 속 RGB 값을 검출하고 이후 Photoshop을 통해 편집된 이미지의 Color 값을 검출합니다. 즉 사용자가 움직이는 사물(사람, 자동차 등)을 바라보면 해당 물체에 적용된 색상 값을 검출하여 결과에 반영하고, 사용자가 움직이지 않는 물체를 바라보면 Phoshop으로 편집된 이미지의 Color 값을 검출해 결과에 반영합니다.
    </p>
    <p>
      출력되는 시선추적 이미지의 경우 간단한 이미지 처리를 거칩니다. 우선 원본 이미지를 Gray Scale로 변환 후 여기에 시선추적을 표시하는 Point이미지를 합성합니다. 합성과정은 만약 RGB값이 (255, 255, 255)가 아니라면 시선 추적의 결과 값을 찍고 (255, 255, 255)라면 배경 이미지 Color 값을 Pixel에 적용합니다. 이러한 과정을 거치면 회색의 360도 이미지에서 시선 추적 경로와 관련한 결과를 확인할 수 있습니다.
    </p>
        <p>
      최종적으로 사용자가 하나의 360도 영상을 시청하면 총 세가지(시선추적 경로 이미지, 시선추적 결과 데이터, 설문 결과 데이터)의 데이터를 자동으로 출력합니다. 자동으로 D 드라이브에 Result Folder를 생성하고 각각의 결과를 알맞은 폴더에 출력합니다.  시선 추적 경로 이미지의 경우 위와 같은 상태로 출력 됩니다. 또한 바라본 사물(ROI), 시선이 이동한 거리(Saccade), 눈을 깜빡인 횟수 등의 데이터가 엑셀을 통해 출력됩니다. 마지막으로 피험자가 수행한 설문의 결과가 엑셀로 출력됩니다.
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 전자기술연구원 영상 버튼 클릭 이벤트
document.getElementById('showVideo12').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/1qDJDmynXPc';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>실감형 과학 문화전시 VR 콘텐츠 개발</h3>
    <p>
       한국전자기술연구원에서 실감형 과학 문화전시 VR 콘텐츠 개발과제에 참여하였습니다. 당시 HTC VIVE PRO와 Kinect V2, Leapmotion 등을 활용한 인터렉티브 과학 교육 컨텐츠를 개발하였습니다. 콘텐츠의 타겟은 10세에서 13세 정도의 어린이였으며 해당 콘텐츠를 개발 후 대전 국립 중앙 과학관과 부산 국립과학관에서 전시를 수행하였습니다. 부산과학관의 경우 “우주로의 도전”(2019.12.13~2020.03.01)이라는 행사에 개발한 천체 관련 교육 콘텐츠를 전시하였습니다.
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 연세대학교 영상 버튼 클릭 이벤트
document.getElementById('showVideo13').addEventListener('click', () => {
  // 팝업에 YouTube URL 설정
  popupIframe.src = 'https://www.youtube.com/embed/lSeFzNc18yA';
  // 팝업에 프로젝트 정보 추가
  projectInfo.innerHTML = `
    <h3>시니어를 위한 디지털 컴페니언 VR 콘텐츠 개발</h3>
    <p>
       연세대학교 기술과 디자인 연구센터에 재직당시 리빙렙 기반 디지털 컴페니언 컨셉 디자인 및 제품의 평가와 검증이라는 과제와 관련하여 VR HMD 기반의 콘텐츠를 개발하였습니다. 어르신들의 외로움을 달래주는 로봇 즉 디지털 컴페니언과 상호작용을 하는 콘텐츠를 개발하였습니다. 해당 콘텐츠를 활용해 설문도 진행하였으며 어르신들로 부터 나쁘지 않은 반응을 얻어냈습니다.
    </p>
  `;
  // 팝업 표시
  popupOverlay.style.display = 'flex';
});

// 팝업 닫기 버튼 클릭 이벤트
closePopupButton.addEventListener('click', () => {
  // 팝업 숨기기 및 내용 초기화
  popupOverlay.style.display = 'none';
  popupIframe.src = ''; // iframe 초기화
  projectInfo.innerHTML = ''; // 프로젝트 정보 초기화
});
