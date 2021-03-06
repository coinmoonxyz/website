---
title: 금융섹터와 블록체인
description: "MIT 블록체인과 화폐 10강: 금융시스템의 도전과 기회"
date: "2021-05-11T18:10:00Z"
author: 코인별
tags: 
- 블록체인
- 강의
- 공부하기
---

## 금융과 금융기관
금융의 역할은 돈(money)과 위험(risk)을 이동하고, 배분하고, 가격을 책정하는 것입니다. 금융기관은 금융자산과 책임의 중개자 역할을 합니다. 모래시계의 비좁은 가운데 통로를 예로 생각해볼 수 있습니다. 

- 금융기관의 주요 기능
  - 투자 (가치의 저장)
  - 신용 (가치의 차용)
  - 리스크의 변환. 예를 들어, 단기예금을 대출합니다.
  - 금융자산과 책임에 대한 조언
- 주요 섹터
  - 상업은행과 신용조합(credit unions)
  - 투자은행과 브로커리지펌
  - 보험회사와 인수업자(underwriters)
  - 총괄적인 투자수단(collective investment vehicles), 뮤츄얼펀드, 펜션펀드와 연금
  - 자산관리자와 재정고문
  - 거래소, 어음교환소(clearinghouses)와 청산기관(settlement organizations)

### 금융시장
- 1차시장
  - 발행자가 최초 증권을 발행하고 댓가로 돈을 받는 곳입니다.
- 2차시장
  - 발행된 증권을 거래하는 곳입니다. 각 시장은 다른 구조를 가질 뿐 아니라 규제도 다르게 적용됩니다. 거래량은 2차시장이 훨씬 더 크지만, 시장마다 그 비율은 다릅니다.
  - Exchange Trading
  - Over the Counter
- 자산관리
- 시장 인프라

### 금융기관의 역할
- **장부**는 경제활동과 재정관계를 기록하고, 거래(비트코인)와 계정(이더리움)을 기록합니다.
- **지불과 결제(settlement)시스템**은 화폐와 금융자산의 이동에 대해서 장부를 수정하고 기록하는 방식입니다. 가치의 최종이양(final transfer)을 승인(authorize)하고, 청산(clear)하고, 기록(record)합니다. 최종이양이라는 부분이 블록체인에서 중요합니다. 

## 금융과 규제
- 재정 안정: 역사적으로 튤립파동이나 집단예금인출사태(bank runs)를 비롯해서 벼락경기(boom and bust)가 반복되는 것을 목격했습니다.
- 투자자와 소비자 보호
- 불법행위 경계: 돈이 디지털로 옮겨가면서 최근 30-40년 사이에 논의가 많이 이루어지는 부분입니다.

## 금융과 기술
금용은 당시의 기술과 공생적인 관계를 맺어온 역사가 있습니다. 화폐가 비금속, 금속, 종이화폐로 변화해온 것은 당시에 가능한 기술을 사용했기 때문이고, 법정화폐도 기술과 규제가 진화한 양식인데서 볼 수 있듯이 블록체인도 이 역사 위에서 바라볼 수 있습니다. 영국 워털루 전투에서 비둘기전보로 먼저 소식을 받아본 투자자들이 이익을 봤던 것처럼 금융분야에서도 기술을 계속해서 도입하고 있지만, 거대기관들의 경우는 그 속도가 느릴 수 있습니다. 스타트업에게는 기회가 될 수 있겠지요.

### 법정화폐
- 법정화페는 중앙은행의 책임과 상업은행의 예금으로 대표됩니다. 
- 세금을 낼 수 있는 화폐이며, 
- 모든 공공 및 민간 부채를 갚을 수 있는 legal tender입니다. 
- 장부 시스템에 의존합니다. 중앙은행의 장부와 상업은행의 장부들의 계층으로 이루어져있습니다.

### 우리 시대의 금융관련 기술
- 인공지능과 머신러닝
- 블록체인
- 클라우드
- 공개 API
- 생체측정기술 (biometrics)
- 챗봇 (chatbot)
- 모바일
- 업무자동화(RPA: Robotic Process Automation)

## 신용과 신용시장

> Borrowing money or value with an agreement to repay in the future.

신용(credit)은 이후에 돌려준다는 동의 하에 가치를 빌리는 것입니다. 현재 미국의 총부채는 전체 경제규모의 350%입니다. 전체 경제규모는 20조 달러이며 총부채는 70조 달러입니다. 정부(연방, 주, 지역), 상업, 금융, 세대가 약 1/4씩 미국의 총 신용시장($67T)을 구성합니다. 채권시장규모는 40조 달러입니다. [수업 웹사이트 슬라이드](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/lecture-slides/MIT15_S12F18_ses10.pdf)에서 더 많은 정보와 그래프를 볼 수 있습니다.

## 금융섹터의 리스크관리와 위기

### 금융섹터의 리스크관리
- 시장 리스크: 가격, 비율, 스프레드, 베이시스, 변동성
- 신용 리스크
- 보증 리스크
- 유동성, 환금성 리스크: 내가 사고팔고 싶을 때 거래가 가능한가.
- 펀딩 리스크: 차환(roll over)이 가능한가.
- 결제 리스크
- 모델의 상관관계 리스크: 모델이 제시하는 표준에서 벗어난 마켓에서도 작동하는가.
- 운영과 사이버 리스크
- 법 준수 리스크
- 평판(reputation) 리스크
- 시스템 리스크

### 금융섹터의 위기
- 남아메리카 부채위기, 1970년대 말
- 컨티넨털 일리노이 은행, 1984년
- 블랙먼데이, 1987년
- 저축과 대출 위기, 1986-1995년
- 아시아, 러시아 부채위기, 1997-1998년
- 서브프라임 모기지 위기, 2008년
- 유럽 부채위기, 2009년~

### 2008년의 금융위기
- 취약한 보증과 약탈적인 대출(predatory lending)은 서브프라임 모기지 위기와 주택시장의 거품으로 이어졌습니다.
- 낮은 금리로 인한 손쉬운 신용 접근과 금융파생상품(신용디폴트스왑 등)은 레버리지와 상호연결의 증가로 이어졌습니다.
- 빈약한 위기관리와 보상구조(금융기관의 보너스 등)는 많은 취약한 금융기관을 만들어냈습니다.
- 많은 실패들로 시스템적으로 펀딩과 자금유동성을 상실했고 이런 현상이 번지면서 상호연결성이 높은 시스템이 거의 붕괴하였습니다.

## 금융섹터 → 기회
- 레거시 고객 인터페이스, 데이터 처리 시스템을 업그레이드할 수 있습니다.
- 초과 이윤(economic rents)에 대한 경제적인 기회가 있습니다.
- 집중된 위기를 낮출 수 있습니다
- 기반설비 시스템의 비용과 거래상대측 리스크를 낮출 수 있습니다.
- 주기적인 위기와 불안정을 해소할 수 있습니다.
- 금융시장의 포용력을 높일 수 있습니다.
- 새로운 기술에 대해 넓게 수용하고 채택하려는 분위기가 있습니다.
- 고객의 데이터가 급속하게 증가하고 있습니다.
- 금융섹터의 비용은 미국 GDP의 7.5% 규모입니다.
- 지불시스템의 비용은 전세계 GDP의 0.5-1.0% 규모입니다.

---
현재 바이든 정부의 SEC 의장 개리 겐슬러 교수가 MIT에서 2018년에 블록체인과 화폐를 주제로 수업한 내용을 정리하고 있습니다. 이 요약노트는 무엇보다도 제 스스로의 공부를 위한 글입니다. 강의 내용 이외에도 제 생각들을 덧붙였기 때문에 강의 자체에 관심이 있는 분들은 원본 강의 영상을 보시길 권합니다. [강의 웹사이트](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/video-lectures/)에도 영상, 리딩 등이 잘 정리되어있습니다. 강의는 [CC BY-NC-SA 라이센스](https://creativecommons.org/licenses/by-nc-sa/4.0/)로 공개되어 있습니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l0vD_FBWk0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>