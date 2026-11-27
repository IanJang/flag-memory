# Flag Memory (세계 국기 메모리) — 설치형 웹앱(PWA)

## 1. 인터넷에 올리기 (무료, GitHub Pages)
1. github.com에서 새 저장소(Public)를 만듭니다. 예: `flag-memory`
2. **Add file > Upload files**로 이 폴더 안의 파일을 모두 올립니다(icons 폴더 포함).
3. **Settings > Pages**에서 Branch를 `main`, 폴더 `/ (root)`로 정하고 Save.
4. 1~2분 뒤 `https://내아이디.github.io/flag-memory/` 주소가 생겨요.

## 2. 패드에 설치하기
- 안드로이드(Chrome): 주소를 열고 메뉴(⋮) > **앱 설치** (또는 "홈 화면에 추가 > 설치")
- 아이패드(Safari): 주소를 열고 공유 버튼 > **홈 화면에 추가**

설치하면 주소창 없이 전체 화면 앱으로 열리고, 한 번 연 뒤에는 인터넷 없이도 실행돼요.
기록은 그 기기 안에 저장돼요.

## 게임을 고쳤을 때
파일을 바꿔 올리면 인터넷이 될 때 앱을 열면 바로 새 버전이 적용돼요(1~2분 배포 시간 후). `sw.js`의 `VERSION`도 올려 주면 오래된 캐시가 정리돼요.
