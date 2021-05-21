---
title: Clearing과 Settlement
description: "MIT 블록체인과 화폐 21강: 거래후 청산, 결제, 프로세싱"
date: "2021-05-21T17:30:00Z"
author: 코인별
tags: 
- 블록체인
- 강의
- 공부하기
---

1강부터 읽으실 분들은 다음 링크에서 시작하세요: [1강 바로가기](https://coinmoon.xyz/mit-blockchain-course-1/)

현재 바이든 정부의 SEC 의장 Gary Gensler 교수가 MIT에서 2018년에 블록체인과 화폐를 주제로 수업한 내용을 정리하고 있습니다. 이 요약노트는 무엇보다도 제 스스로의 공부를 위한 글입니다. **강의 내용 이외에도 제 생각들을 덧붙였기 때문에 강의 자체에 관심이 있는 분들은 아래 원본 강의 영상을 보시길 권합니다.** [강의 웹사이트](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/video-lectures/)에도 영상, 리딩 등이 잘 정리되어있습니다. 강의는 [CC BY-NC-SA 라이센스](https://creativecommons.org/licenses/by-nc-sa/4.0/)로 공개되어 있습니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cZPoqnRZq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## 청산과 결제 서비스
일반적인 주식시장에서는 바이어와 셀러가 거래소에서 브로커를 통해서 만나지만(intermediated access), 크립토시장에서는 브로커가 존재하지 않기 때문에 시장에 직접 접근(direct access)하게 됩니다. 거래소와는 별도로 청산소(clearinghouse)가 존재합니다.

### 청산과 결제의 3단계
- 집행(execution): 바이어와 셀러가 가격과 수량 등 법적인 구속력을 가지는 동의를 하는 과정입니다.
- 청산(clearing): 거래 당사자가 지불할 돈과 증권이 있음을 확실히 하는 과정입니다. 네팅(netting)은 청산의 가장 중요한 부분입니다. 네팅은 거래 당사자가 여럿인 경우, 중앙의 매개자가 오고가는 총 거래를 합산하는 것을 말합니다. 예를 들어 A가 B에게 줄 금액과 B가 A에게 줄 금액을 합산하면 두 번의 거래를 한 번으로 줄일 수 있습니다. 거래당사자가 훨씬 많은 경우에는 효과가 더 큽니다. 네팅을 통해서 거래비용을 줄일 수 있고 거래상대측의 위험(counterparty risk)을 줄일 수 있습니다.
- 결제(settlement): 장부에 최종적으로 거래를 기록하는 과정입니다. 

## 블록체인 기술 적용가능성
미국에는 각 투자종목별로 무수히 많은 청산소가 존재하고, 이와 거래하는 많은 거래소들, 이를 담당하는 규제기관들 등이 복잡하게 엮여있습니다. 허가형 블록체인을 이 시스템에 적용하면 효율성을 높일 수 있을 것으로 기대합니다.

앞으로 블록체인이 성능과 확장성을 높여서 기술적인 문제가 없다고 했을 때 경제적인 관점으로 본다면 지금의 중간매개자 역할을 하고 있는 청산소를 블록체인이 대체할 수 있을까요? 위에서 살펴본 것처럼 네팅이라는 과정이 청산에서 큰 역할을 하고 있습니다. 또 결제까지 가는데 걸리는 시간차를 통해서 당장에 쥐고 있는 자산이 없이도 공매도(shorting)를 하는 지연결제(delayed settlement) 등 현재의 시스템에 익숙해져 있는 투자자들이 블록체인으로 옮겨갈 때 비슷한 효과를 기대할 수 있을까요? 새로운 집행과 결제가 동시에 이루어지는 시스템이 가져올 긍정적인 효과가 더 클까요?

## 블록체인 프로젝트
- 호주: 디지털자산시스템을 사용한 ASX CHESS 프로젝트 (2016-21)
- 에스토니아: Tallinn 증권거래소는 위임투표와 등록을 탐색하고 있습니다 (2018)
- 인도: SEBI, 블록체인을 탐색하겠다는 발표를 했습니다 (2018년 1월)
- 일본: Japan Exchange Group은 거래 후 매칭테스트를 합니다 (2017-18)
- 미국: NASDAQ Linq private securities platform (2015). Mutual Fund project (2018)

## Derivatives Common Domain Model
기관투자자들을 대상으로 하는 모델로 스왑을 사용하는 약 10만여명의 고객들의 계약을 사람이 작성하는 대신에 일부 자동화를 통해서 효율을 추구하는 프로젝트입니다. 이 시장에 참여하는 고객 규모와 참여은행(약 16개) 수가 많지 않기 때문에 적용 가능성이 높습니다. 블록체인의 스마트 컨트렉트에 영향을 받았지만, 실제 블록체인 기술을 사용하는지는 명확하지 않습니다.

- International Swap Dealers Association(ISDA) project
- 계약 조건을 자동화하기 위해 스마트 컨트렉트의 사용을 모색하고 있습니다.
- Machine readable standard representation of Events and Actions over the life of a derivatives trade.
- 자바와 JSON 사용.
- CDM 1.0  includes 'new transaction', 'rate reset', 'partial termination', 'allocation', 'novation' and 'compression' events.