---
title: 베이직 어텐션 토큰, 광고모델을 재발명하다
description: 웹3에 기반한 주목경제의 새로운 광고모델
date: "2021-08-02T12:30:00Z"
author: 코인별
tags:
- 토큰경제
- $BAT
- 공부하기
- 번역
---

이번 글은 Shermin Voshmgir의 저서 The Token Economy의 한 챕터를 번역한 내용입니다. [원문은 여기서](https://github.com/Token-Economy-Book/EnglishOriginal) 찾아볼 수 있고, [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) 라이센스로 공개되어 있습니다. 

This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.

---

베이직 어텐션 토큰 프로젝트는 사용자의 관심을 토큰화하고 더 투명하고 효율적인 광고 시장을 만드는 개념이다. 베이직 어텐션 토큰은 광고업계 참여자들의 역할을 뒤집고, 누가 당신의 관심과 브라우징 경험을 소유하는지, 누가 누구로부터 무엇에 대해 지불을 받는지에 대한 질문을 재정의한다.

역사적으로 경제적인 거래는 주로 생산물을 돈, 부채 또는 기타 생산물과 교환하는 것을 말했다. 선택은 제한적이었고 고객의 기대는 상대적으로 낮았다. 재화의 부족함 때문에 생산자는 제품을 개인의 기호에 맞추거나 다른 제품과 차별화할 필요성을 느끼지 못했다. 산업혁명(1860-1920)은 생산비용을 낮췄고 재화의 수요와 공급의 역학을 변화시켰다. 생산이 수요를 넘기 시작하면서 시장은 점점 더 경쟁적이 되었고, 생산품은 상품화되었고, 세일즈와 마케팅을 통해 기업들은 경쟁업체로부터 자신들의 제품을 차별화했다. 세일즈 혁명(1920-1940)이 뒤따랐다. 이를 이어 마케팅 혁명(1940-1990)이 일어났고, 20세기 후반과 21세기 초반의 입자가 고운 마케팅 혁명들로 이어졌다. 이들은 관계 마케팅과 소셜미디어 마케팅에 초점을 맞췄다. 자유무역협정과 인터넷의 출현 덕분에 기업들은 점점 더 생산과 서비스를 다른 국가로 아웃소싱하고 제품디자인, 브랜딩과 광고에 집중할 수 있게 되었다.

농업혁명 이후 처음으로 인간은 음식, 돈, 지식과 같은 자원들이 풍족한 단계에 접어들고 있다. 대부분의 현대시대의 부족함은 배분의 비효율성 때문이며 정말로 제품이 부족한 경우는 거의 드물다. 넘쳐나는 정보, 최적화된 공급망, 알고리듬으로 작동하는 시장체계의 시대에서 이런 비효율성은 더 낮출 수 있다. 15세기 인쇄기의 발명은 첫번째 정보혁명으로 볼 수 있다면 인터넷의 등장은 2차 정보혁명을 가져왔고, 이와 함께 정보가 풍부하게 되었다. 데이터는 정보경제의 연료가 되었고, 관심은 희소자원이 되었다. 우리가 "한계비용 제로 사회"[^1]에 근접하면서 시간과 관심은 가장 희귀한 두가지 자원이 되고 있다. 사람이 광고에 관심을 줄 수 있는 시간은 한정적이다.

## 주목 경제, 데이터 시장과 개인정보
웹2 플랫폼, 특히 소셜미디어 플랫폼과 검색엔진들은 제공하는 서비스에서 이윤을 생성해내는 직접적인 사업 모델을 갖지 못했다. 그들이 유일하게 가지고 있는 것은 사용자 데이터로, 이는 사용자의 행동에 기반한 타겟광고의 기초가 되었다. 이런 혁명은 광고업계를 영원히 변화시켰다. 현재의 광고-기술 생태계가 발전하였고 알파벳(구글)과 페이스북, 이렇게 두 개의 기업이 거의 지배하고 있는 상황이다. 웹브라우징 히스토리부터 위치기반의 데이터까지 우리의 일상적인 움직임은 우리가 사용하는 서비스를 제공하는 기업들이 추적하고 있고 마케팅업계의 데이터 중개업자들에게 재판매된다.데이터 중개업자들은 이 데이터를 분석하고 광고주에게 다시 판매한다. 알고리듬 방식으로 원 데이터에서 정보를 추출하고 어떤 광고주에게 어떤 고객이 가장 적절할지 평가한다. 웹2 서비스 제공자들의 서버의 정원 벽 너머에서 개인적인 데이터에 어떤 일이 벌어지는지에 대해서 오늘날의 사용자는 직접적인 관리 권한이 거의 없다.

고객들을 특징에 따라 분류하는 리스트를 수집하고 이런 리스트를 마케팅 회사와 광고주들에게 판매하는 일은 새로운 것은 아니었다. 하지만 인터넷은 이런 리스트를 모으고 처리하는 비용을 획기적으로 줄였고, 이런 작업을 훨씬 개인적인 단계에서 가능하도록 해주었다. 머신러닝 애플리케이션과 짝을 이루어서 이전에는 가능하지 않았던 유례없는 수준에서 광고의 개인화가 가능해졌다. 타겟광고의 초창기에 페이스북, 구글이나 유사 광고네트워크를 사용했던 마케터는 단일 서비스 제공자가 수집한 데이터를 기반으로 개개인을 표적할 수 밖에 없었다. 하지만 2012년 페이스북은 기업들이 각자의 리스트를 업로드할 수 있도록 허용해주었고, 그들의 데이터를 페이스북의 데이터와 연관시키기 시작했다. 이를 통해 기업들은 각기 다른 데이터 소스들을 연결시킬 수 있었고 이메일 주소나 전화번호를 바탕으로 사람들을 타겟팅할 수 있었다. 구글이나 트위터 등의 다른 기업들도 곧 비슷한 기능을 출시했다. 여러 사용자 계정, 기기, 심지어 때로는 오프라인 데이터에 걸쳐 여러 기업들이 수집한 데이터셋을 연결하여 인터넷 사용자들의 행동을 분석하는 정교한 방법들이 개발되었다. 이런 데이터셋들은 이메일 주소, 전화번호, 쿠키와 같은 개개인을 참조하는 가명의 식별자를 사용하여 쉽게 연결될 수 있다. 쿠키는 인터넷 서비스 전역에서 개인들의 선호와 행동을 추적하고 연결하기 위해 퍼블리셔가 사용하는 강력한 도구이다.

더 나아가서, 현재의 클라이언트-서버 기반의 인터넷에서 사용자와 광고주 모두 자신들의 데이터에 일어나는 일들에 대해 직접적인 관리 권한이 거의 없다. 영국과 미국의 선거를 조작하는데 페이스북의 데이터가 사용되었던 "캠브리지 애널리티카 파일" 스캔들로 공개적으로 명백해졌듯이 빅데이터 기업들은 데이터 유출과 프라이버시 침해의 허니팟이다.[^2] 타겟광고는 개인화된 데이터와 합쳐져서 사용자의 자율성을 훼손하는 도구로 많은 이들이 보고 있으며 각자의 주장이 메아리치는 방을 만드는 촉매 작용을 하게 되었다. 수백만의 사용자들은 기기에 광고차단 프로그램을 설치해서 이런 감시체계로 나가는 경향에 대항하고 있다. 퍼블리셔는 수많은 팝업과 메시지로 반응했고 자신들의 웹사이트를 화이트 리스트처리하거나 광고차단 프로그램을 완전히 꺼달라고 요청했다. 6억 개가 넘는 기기들이 광고차단 소프트웨어를 사용하고 있는 것으로 보인다.

광고업계는 또한 데이터 중개업자와 서비스 제공업자의 공급망의 불투명함에 취약하다. 비양심적이고 때로는 부정직한 광고-기술 제공업자들은 타겟광고를 제공하는 척 하지만 사실 사용자들은 최근에 구입한 제품 광고를 보게 되기도 한다. 이런 "맞춤 관중"을 구매하는 광고주들은 광고-기술 제공업자들의 폐쇄적인 환경 뒤에서 실제로 무슨 일이 일어나는지 직접 이해할 수 있는 방법이 없다. 광고가 제대로 전달될거라고 제삼자의 제공자를 믿어야만 한다. 잘못 전달되거나 노골적인 악성광고 때문에 2016년에만 온라인광고 사기 피해액이 70억 달러 이상이었다고 추정된다.

## 베이직 어텐션 토큰 (BAT)
오늘날 디지털 광고업계는 광고주와 퍼블리셔라는 두 주요 이해관계자와 이들의 필요에 부응하기 위해 만들어진 다양한 중개 서비스업자를 포함한다. 사용자는 제한적으로 거부할 수 있는 가능성을 제외하고는 이 시스템에서 적극적인 역할이 거의 없다. 베이직 어텐션 토큰 프로젝트는 광고업계 참여자들의 역할을 뒤집고, 누가 당신의 관심과 브라우징 경험을 소유하는지, 누가 누구로부터 무엇에 대해 지불을 받는지에 대한 질문을 재정의한다. 베이직 어텐션 토큰은 업계의 과제들을 해결하기 위해 토큰화 솔루션을 제공한다. 암호화 토큰과 개인정보를 보호하는 브라우저를 사용해서 탈중앙화 광고 시스템을 만드는 개념이다. 광고는 "브레이브" 브라우저 내부에서 직접 P2P 방식으로 이루어진다. 브레이브 브라우저는 탈중앙화 애플리케이션으로 이더리움 네트워크와 통신하여 두가지 토큰--BAT(베이직 어텐션 토큰)과 BAM(베이직 어텐션 메트릭)--을 관리한다.

BAT 토큰은 퍼블리셔, 광고주와 사용자 사이에서 가치를 이동할 때 사용될 수 있다. 첫째로, 사용자는 개인정보를 보호받는 방식으로 광고를 시청하고 보상을 받는다. 둘째로, 퍼블리셔는 현존하는 시스템보다 더 큰 광고수익을 받는다. 셋째로, 광고주는 더 높은 투자수익률과 더 정확한 데이터를 얻을 수 있다. 사용자는 관심에 대한 대가로 BAT 토큰을 받는 옵션을 선택할 수 있다. 브레이브 브라우저에서 광고를 활성화하면 브라우징 히스토리에 따라서 연관된 광고를 시스템 알림으로 보여준다.

**베이직 어텐션 메트릭(BAM)**은 브라우저 내부에서 직접적으로 사용자의 관심을 정확하게 추적하고 리포팅할 수 있도록 한다. 브라우저는 지속적으로 사용자의 관심을 추적하고 있지만, 이 데이터는 익명화되고 기기 내에서 작동하는 브라우저 소프트웨어를 결코 떠나지 않는다. 기기 내부의 머신러닝 알고리듬은 개인화 광고에 알맞는 컨텐트를 결정한다. 각 광고에 대한 "관심 가치"는 광고를 시청한 시간과 연관된 컨텐트에 비례하여 보여지는 픽셀의 수 등 기타 측정기준에 따라 결정된다. 데이터 분석도 브라우저에서 직접 이루어지기 때문에 광고를 전달하는 회사, 즉 광고주에게 기초 데이터를 드러내지 않고도 타겟광고가 가능해진다. 광고주는 제삼자의 데이터 추적을 필요로 하지 않고, 사용자의 개인정보에 대한 타협없이 신뢰할 수 있는 측정방법에 직접 접근할 수 있다. 이런 수준의 직접 거래를 통해서 타겟광고의 효율성을 개선할 수 있다.

이 책을 작성하는 시점에, 브레이브 브라우저의 월간 실질 이용자는 1300만 명이며, 이들은 브레이브를 사용해서 웹을 이용하고 소유한 토큰을 관리하고 다른 작업들을 수행하고 있다. 현재의 웹브라우저들과는 다르게 광고차단기능은 토르 네트워크를 사용해서 브레이브 브라우저 내부에 탑재되어있다. 이런 광고차단기능은 브라우저의 속도를 향상시키기도 한다. 더 나아가서, HTTPS를 사용하지 않는 웹사이트들을 HTTPS 프로토콜을 사용하도록 업그레이드해주는 등 브레이브 브라우저는 더 향상된 기본 보안기능을 제공한다. 프라이버시는 별도로 설치해야하는 선택적인 브라우저 확장기능이 아니다. 브레이브는 또한 애널리틱스 대시보드를 제공해서 보상 프로그램, 광고매칭 알고리듬과 관심측정 시스템 등의 기능을 모니터링하고 관리할 수 있게 해준다.

"Hub of All Things"와 같은 개인 데이터 마이크로-서버 등 클라우드 기반의 서비스가 개인정보의 관리 권한을 개개인의 고객들에게 이동시키는 기회를 이미 제공하고 있고, 사용자는 각자 개인적인 데이터 저장소의 인프라를 구성할 수 있다고 주장하는 이들도 있지만 주변적인 현상으로 남아있다. 이런 서비스는 데이터의 저장소에 대해 더 많은 권한을 주기는 하지만, 여전히 신원관리나 호스팅 서비스를 위해 제삼자에 의존해야하기 때문에 BAT 등의 블록체인 솔루션과 같은 수준의 자율성과 보안을 제공하지는 못한다.

BAT가 작동하는 구체적인 방식은 이렇다. 앱을 다운로드받는 누구나 BAT 토큰을 최초금액만큼 받는다. 광고주는 퍼블리셔에게 BAT 토큰을 지불해서 개인화 광고를 게시한다. 광고는 사용자 기기 내부에서 수집한 정보만을 바탕으로 해서 브레이브 브라우저의 알고리듬에 따라 필터링된다. 이는 사용자가 자신의 데이터에 대한 소유권과 관리권을 유지함을 의미한다. 광고를 전달할 때 광고주는 스마트 컨트렉트를 사용해서 잠금 상태로 BAT 토큰을 전송한다. 만약 사용자가 광고를 보게 되면 스마트 컨트렉트가 BAT 토큰의 잠금을 해제하고 광고수익의 최대 70퍼센트까지 사용자에게 보상으로 제공한다. 광고를 호스팅하는 퍼블리셔가 나머지 금액을 받게 되므로, 관계없는 무작위 광고 스팸을 보내는 대신에 높은 품질의 연관된 컨텐트를 전달하도록 장려한다. 사용자는 광고를 본 시간과 관심에 따른 보상을 받을 수 있고, 이렇게 받은 토큰을 아티스트나 크리에이터에게 무료 온라인 컨텐트에 대한 팁으로 주는 등 다른 온라인 활동에 소비하게 된다.

팁을 주는 옵션은 "패트리온"과 같은 서비스와 비슷한 방식으로 작동하지만, 패트리온과 같은 제삼자 업체의 필요성을 제거한다. 미래에는 BAT 토큰을 사용해서 구독료, 디지털 상품이나 기타 서비스를 구매할 수 있게 될 것이다. 이 책을 작성하는 시점에 BAT 토큰은 적십자나 세계야생동물기금 등 1천개가 넘는 자선단체에 기부금으로 사용할 수 있다. BAT는 서비스형 리워드(rewards-as-a-service) 테크 기업인 TAP 네트워크와 협력관계를 맺었다. TAP 네트워크는 아마존, 애플, 월마트, 아메리칸 에어라인, 스타벅스, HBO 등 25만 개 이상의 상업파트너를 보유하고 있다. 사용자가 BAT 토큰을 파트너 기업들의 리워드로 교환해서 사용할 수 있게 되면 브레이브 브라우저와 BAT를 대중화하는 더 큰 보상으로 작용할 수 있다. 더 나아가서, 비메오, 바이스, 워싱턴포스트, 가디언, 마켓워치 등 브레이브의 검증을 받은 28000개 이상의 퍼블리셔들도 BAT 토큰을 받는다.

## 전망과 과제
웹3 기반의 광고 솔루션은 사용자의 개인정보를 노출시키지 않고 퍼블리셔들에게 더 큰 투명성을 제공해준다. 이 솔루션은 오픈소스의 특성을 가지고 있기 때문에 브라우저 소프트웨어를 감사할 수 있고 모든 거래는 공개적으로 검증이 가능하다. 오픈소스는 시스템의 회복력을 높여주고  부정행위를 줄일 수 있다. 하지만 BAT의 대중적인 수용을 위해서는 해결해야 할 과제들이 있다.

Steemit과는 반대로 BAT는 최소한 토큰경제와 토큰 거버넌스와 관련해서는 중앙화된 솔루션이다. STEEM과 Steem Power는 스팀 생태계의 기여증명(proof-of-contribution)방식으로 만들어지는 목적 주도의 토큰인 반면, BAT 토큰은 법정화폐에 고정되어있다. BAT 토큰은 특정 행동에 대한 증명으로 만들어지는 것이 아니라 토큰 판매시에 법정화폐로 첫 자금을 마련했다. BAT 모델에서 토큰의 흐름과 가치의 창출은 예전 가치 창출의 모델을 반영하는 듯 보이며, 미리 채굴된 BAT 토큰의 풀에 기반하고 있다. 브레이브의 설립자와 관리자는 얼마나 많은 토큰이 발행되며 토큰의 흐름이 어떻게 작동하는지 결정한다. VC와 같은 사적자본의 주입 이후, 2017년 BAT 프로젝트는 토큰세일을 진행했고, 30초 만에 완료가 되면서 약 3500만 달러(156,250 EHT)의 자금을 모금했다. 총, 15억개의 토큰이 만들어졌고, 그 중 1억 개가 토큰세일에서 판매되었으며 나머지 토큰은 유지했다. 브레이브 팀은 앞으로의 개발 자금(BAT 개발 풀)으로 2억개 를 배분받았고 3억 개는 사용자가 브라우저를 다운로드할 때 선착순으로 여러번에 걸쳐 무료로 증정(사용자 성장 풀)될 계획이다. 2017년 12월에 첫 지불이 시작되었다. 사용자 성장 풀은 여전히 2억5천만개의 BAT 토큰을 보유 중이다. 토큰의 분포와 관련해서는 상위 1백명이 모든 토큰 공급량의 72퍼센트를 소유하고 있다.

BAT 프로젝트는 여전히 출시 초기 단계에 있으며 많은 기능들이 개발 중에 있다. 사용자에게 보여지는 광고의 수를 제한하는 사기방지 매커니즘이 개발되어야한다. 누구든지 많은 수의 지갑을 여러기기에 개설할 수 있기 때문에 과제로 남아있다. 또, 토큰의 인출은 규제당국의 지침을 따라야한다. 돈세탁 방지법안에 따른 KYC(본인인증) 메커니즘이 아마도 필요할 것이다. 지갑은 현재 일방향성이라서 인출이 불가능하다. 사용자는 법정화폐를 BAT로 전환하거나 그 반대의 경우도 마찬가지로 제삼자의 서비스를 사용해야만 한다. 이런 제한은 아마도 단기성으로 시스템이 성숙하면서 결국에는 해결될 것이다.

웹브라우저의 시장 점유율은 역사적으로 상당히 안정적이었기 때문에 사용자들이 브레이브와 같은 새로운 웹브라우저로 바꾸도록 자극하는 것은 어려울 수 있다. 하지만 전통적인 브라우저와는 반대로 브레이브는 프라이버시 기능과 수입에 대한 가능성을 제공해준다. 유례없는 수준의 개인정보 보호를 약속함과 동시에 광고를 보면서 돈을 벌 수 있는 기회를 제공하는 것은 브라우저 시장의 역학을 바꿀지도 모른다. 일단 브레이브의 모든 기능이 완전하게 출시되고 작동하게 되면 사용자들이 새로운 소프트웨어를 설치하는 수고를 들일만큼 충분히 매력적이 될 수 있다.

하지만 광고주는 BAT 대중화의 가장 큰 병목이 될 수 있다. 구글과 페이스북은 약 70퍼센트의 예상시장점유율을 보이며 현재 광고-테크업계를 주도하고 있다. 그들의 거대한 사용자 기반은 광고주와 퍼블리셔에게 인기가 높다. 구글과 페이스북이 뉴스피드나 검색결과와 일치하는 광고 옵션을 제공하는 반면, BAT는 현재 디스플레이 광고만을 제공하고 있어서 광고주에게 그다지 매력적이지 않다. BAT 프로젝트의 로드맵에는 광고를 넘어서 브라우저 내부에서 가치 양도가 가능하도록 BAT의 활용성을 제공하는 내용이 들어있다. 이런 계획을 실행할 수 있을지는 미지수다.

장기적으로 보았을 때 BAT 생태계나 비슷한 관심기반의 토큰이 소셜미디어에서 소액결제의 주요 방법이 될 가능성이 높다. 광고비 지불뿐만 아니라 컨텐트 제작과 큐레이션에 대한 보상에도 사용될 수 있다. BAT와는 별도로 다른 프로젝트들도 비슷한 솔루션을 개발하고 있다. AdEx는 비디오 광고에 중점을 두고 있다.

## 챕터 요약
> 베이직 어텐션 토큰은 현재 광고업계가 가지고 있는 과제에 토큰화 솔루션을 제공하며 사용자, 퍼블리셔, 광고주가 상호작용하는 방식을 재발명하고 있다. 누가 당신의 관심과 브라우징 경험을 소유하는지, 누가 누구로부터 무엇에 대해 지불을 받는지에 대한 질문을 재정의한다. BAT는 토큰 보상과 개인정보를 보호하는 브라우저 애플리케이션을 사용해서 탈중앙화 광고 거래를 만들어낸다.

> "브레이브" 브라우저는 탈중앙화 애플리케이션으로 이더리움 네트워크와 통신하며 두개의 토큰--BAT(베이직 어텐션 토큰)과 BAM(베이직 어텐션 메트릭)--을 관리한다.

> BAT 토큰은 퍼블리셔, 광고주와 사용자 사이에서 가치를 이동할 때 사용될 수 있다. 첫째로, 사용자는 개인정보를 보호받는 방식으로 광고를 시청하고 보상을 받는다. 둘째로, 퍼블리셔는 현존하는 시스템보다 더 큰 광고수익을 받는다. 셋째로, 광고주는 더 높은 투자수익률과 더 정확한 데이터를 얻을 수 있다. 사용자는 관심에 대한 대가로 BAT 토큰을 받는 옵션을 선택할 수 있다. 브레이브 브라우저에서 광고를 활성화하면 브라우징 히스토리에 따라서 연관된 광고를 시스템 알림으로 보여준다. 광고는 사용자 지갑과 브라우저 내에서 직접 P2P 방식으로 이루어진다.

> 베이직 어텐션 메트릭(BAM)은 브라우저 내부에서 직접적으로 사용자의 관심을 정확하게 추적하고 리포팅할 수 있게 해준다. 기기 내부의 머신러닝 알고리듬은 개인화 광고에 알맞는 컨텐트를 결정한다. 각 광고에 대한 "관심 가치"는 광고를 시청한 시간과 연관된 컨텐트에 비례하여 보여지는 픽셀의 수 등 기타 측정기준에 따라 결정된다. 데이터 분석은 브라우저에서 직접 이루어지기 때문에 광고를 전달하는 회사, 즉 광고주에게 기초 데이터를 드러내지 않고도 타겟광고가 가능해진다. 광고주는 신뢰할 수 있는 측정방법에 직접 접근할 수 있어서 제삼자의 데이터 추적을 필요로 하지 않고 사용자의 개인정보를 노출시킬 필요가 없다.

> 브라우저는 지속적으로 사용자의 관심을 추적하고 있지만, 이 데이터는 익명화되고 기기 내에서 작동하는 브라우저 소프트웨어를 결코 떠나지 않는다. 사용자는 자신의 데이터에 대한 소유권과 관리권을 유지한다.

> 웹3 기반의 광고 솔루션은 사용자의 개인정보를 노출시키지 않고 퍼블리셔에게 더 큰 투명성을 제공해준다. 이 솔루션은 오픈소스의 특성을 가지고 있기 때문에 브라우저 소프트웨어를 감사할 수 있고 모든 거래는 공개적으로 검증이 가능하다. 오픈소스는 시스템의 회복력을 높여주고  부정행위를 줄일 수 있다.

> 광고를 전달할 때 광고주는 스마트 컨트렉트를 사용해서 잠금 상태로 BAT 토큰을 전송한다. 만약 사용자가 광고를 보게 되면 스마트 컨트렉트가 BAT 토큰의 잠금을 해제하고 광고수익의 최대 70퍼센트까지 사용자에게 보상으로 제공한다. 광고를 호스팅하는 퍼블리셔가 나머지 금액을 받게 되므로, 관계없는 무작위 광고 스팸을 보내는 대신에 높은 품질의 연관된 컨텐트를 전달하도록 장려한다.

> 사용자는 광고를 본 시간과 관심에 따른 보상을 받을 수 있고, 이렇게 받은 토큰을 아티스트나 크리에이터에게 무료 온라인 컨텐트에 대한 팁으로 주는 등 다른 온라인 활동에 소비하게 된다. BAT 토큰은 또한 제삼의 기관에게 자선 기부금으로 사용될 수도 있다.

## 참고문헌과 추가자료
- Agarwal, Ajay; Gans, Joshua; Goldfab, Avi: “Prediction Machines The Simple Economics of Artificial Intelligence” Harvard Business Review Press Boston, Massachusetts, 2018
- Berry, Leonard L.: “Relationship marketing”, In: Berry, L.L./Shostack, G.L./ Upah, G.D. (Hrsg.): Emerging perspectives in services marketing. Chicago, Illinois: American Marketing Association, 25-28, 1983
- Buchko, Steven: "What Is the Basic Attention Token (BAT)? The All-Encompassing Guide", Coincetral, Nov 7 2018: https://coincentral.com/what-is-bat/
- Christl, Wolfie: “Corporate surveillance in everyday life”, Cracked Labs Report, Cracked Labs, June 2017: https://crackedlabs.org/en/corporate-surveillance Dall, Carlos Eduardo; Freitas, Acqua: “Basic Attention Token (BAT) has a visionary purpose, but powerful nemeses”, March 27, 2018: http://globalcoinreport.com/basic-attention-token-bat-has-a-visionary-purpose-but-powerful-nemeses/ Deighton, John; Peter A. Johnson: “The Value of Data: Consequences for Insight, Innovation & Efficiency in the U.S. Economy”, October 8, 2013. Available at: https://www.ipc.be/~/media/documents/public/markets/the-value-of-data-consequences-for-insight-innovation-and-efficiency-in-the-us-economy.pdf
- Fader, Peter; Toms , Sarah E.: “The Customer Centricity Playbook: Implement a Winning Strategy Driven by Customer Lifetime”, 2018
- Fullerton, Ronald: “How Modern Is Modern Marketing? Marketing‘s Evolution and the Myth of the Production Era“, Journal of Marketing, Jan. 1988 (Vol. 52, No. 1)
- Fullerton, Ronald, Jagdish, Sheth: “Research in Marketing” Jai Press Ltd., Supplement 6, 1994
- Ghose, A.: “What blockchain could mean for marketing”, Harvard Business Review. No. 5, 2-5, 2018
- Grant, Leboff: ”Sticky Marketing”, Kogan Page, 2011
- Greenfield, Patrick: “The Cambridge Analytica files: the story so far What is the company accused of, how is Facebook involved and what is the Brexit link?”, 26 March, 2018: https://www.theguardian.com/news/2018/mar/26/the-cambridge-analytica-files-the-story-so-far
- Grönroos, Christian: “In Search of a New Logic for Marketing. Foundations of Contemporary Theory”, Chichester: John Wiley & Sons, Ltd, 2007
- Hammer Cornelia et. al: “Big Data: Potential, Challenges, and Statistical Implications”, International Monetary Fund, 2006
- Hub of All Things: https://hubofallthings.com
- Kimmel, Alan: “Marketing Communication”, Oxford, 2005
- Kotler, Philip: “Marketing Management: Analysis, Planning and Control. Englewood Cliffs, N.J.: Prentice-Hall”, 1967
- Kotler, Philip, Zaltman, Gerald: „Social Marketing: An Approach to Planned Social Change“. Journal of Marketing. 35 (3). pp. 3–12, July 1971
- Kotler, Philip; Levy, Sidney J.: „Demarketing, Yes, Demarketing“. Harvard Business Review. 49 (6). pp. 74–80, November – December 1971
- Little, John D. C.;Blattberg, Robert C.; Glazer, Rashi: “The Marketing Information Revolution”, 1994
- Narayanan, Arvind; Dillon Reisman: “The Princeton Web Transparency and Accountability Project”, 2017: http://randomwalker.info/publications/webtap-chapter.pdf
- Nguyen, Winnie: “Basic Attention Token (BAT) Pros & Cons – Blockchain Digital Ad Exchange!” Aug 15, 2018, Cryptocurrency Reviews: https://www.bitcoinforbeginners.io/cryptocurrency-reviews/basic-attention-token-bat/
- N.N.:”Basic Attention Token (BAT) Blockchain Based Digital Advertising”, Brave Software, March 13, 2018: https://basicattentiontoken.org/BasicAttentionTokenWhitePaper-4.pdf
- N.N.: “BAT Publishers List”: https://batgrowth.com/publishers
- N.N.: “BAT user statistics”: https://brave.com/2018-highlights
- N.N.: Brave Browser Website: https://brave.com/
- Parvatiyar, Atul; Sisodia, Rajendra: “Handbook of Advances in Marketing in an Era of Disruptions: Essays in Honour of Jagdish N. Sheth”, SAGE Publications India, 2019
- Platzer, Michael; Reutterer, Thomas: “Ticking Away the Moments: Timing Regularity Helps to Better Predict Customer Activity” This article was downloaded by: [137.208.149.244] On: 22 September 2016, At: 14:22 Publisher: Institute for Operations Research and the Management Sciences (INFORMS) www.reutterer.com/papers/platzer&reutterer_pareto-ggg_2016.pdf
- Rifkin, Jeremy: “Zero Marginal Cost Society”, 2014
- Schröder, N.; Falke, A.; Hruschka, H., Reutterer, T.: “Analyzing the Browsing Basket: A Latent Interests- Based Segmentation Tool”, Journal of Interactive Marketing (forthcoming), 2019
- Tompkins, Jonathan: “Crypto Review — Basic Attention Token (BAT)” Medium, Jul 3, 2017: https://medium.com/@jon.tomp/crypto-review-basic-attention-token-bat-79f16bc3dd66
- Trusov, Michael; Ma, Liye; Jamal, Zainab:“Crumbs of the Cookie: User Profiling in Customer-Base Analysis and Behavioral Targeting”, Marketing Science, Vol. 35, No. 3, Published Online: 28 Apr 2016: https://doi.org/10.1287/mksc.2015.0956
- Valendin, J., T. Reutterer, C. Kalcher, and M. Platzer: From RFM to LSTM: How Machines Learn to Understand Customer History. WU Vienna Working Paper.
- Walker, Saint John: “Big Data: A Revolution That Will Transform How We Live, Work, and Think”, International Journal of Advertising, 2014
- Yan, Jun; Ning Liu, Gang Wang, Wen Zhang, Yun Jiang, and Zheng Chen: “How much can behavioral targeting help online advertising?” Proceedings of the 18th international conference on the World Wide Web (WWW ‚09). ACM, 261-270. Available at: http://dl.acm.org/citation.cfm?id=1526745
- Basic Attention Token: https://basicattentiontoken.org/
- Brave Browser: https://brave.com/

[^1]: “한계비용 제로 사회”는 제레미 리프킨의 저서 제목으로 떠오르는 기술이 전세계적인 소위 "협력적 공유사회"의 급부상을 촉발하며 어떻게 거의 무료인 재화와 서비스가 가능한 시대로 우리를 빠르게 이끄는지를 설명한다. 책은 자본주의가 고도로 효율화되면서 역설적으로 스스로를 폐지하고 있다고 설명한다. 경제학자들은 언제나 한계비용의 축소를 장려했지만 그 비용이 거의 제로, 거의 무료가 되고 넘쳐나서 더이상 시장의 힘의 영향을 받지 않는 기술혁명의 가능성은 아마도 예측하지 못했을 것이다.

[^2]: 유럽 개인정보보호법(GDPR) 때문에 이전의 관습들은 특정 관할구역에서 문제가 되고 있다. 데이터분석에 GDPR이 주는 영향에 관한 최근 분석은 다음을 참고할 수 있다: Wieringa, J., Kannan, P.K., Ma, X., Reutterer, T., Risselada, H., and B. Skiera (2019): Data Analytics in a Privacy-Concerned World. Journal of Business Research (forthcoming).