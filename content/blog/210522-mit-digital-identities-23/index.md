---
title: 디지털 신원과 블록체인
description: "MIT 블록체인과 화폐 23강: 디지털 ID"
date: "2021-05-22T21:30:00Z"
author: 코인별
tags: 
- 블록체인
- 강의
- 공부하기
---

## 스터디 질문
- 신원과 접근 관리(identity and access management; IAM)에서 블록체인 기술을 사용할 때 트레이드오프는 무엇인가요?
- 자기주권신원(self-sovereign identity)은 무엇인가요? 금융권에서 블록체인 자기주권신원이나 디지털신원 애플리케이션은 어떻게 적용될 수 있을까요?

## 신원
- 특성(attribute): 나이, 주소, 국적, 이름
- 주장(claim): "My name is Gary."
- 증명서(credential): 여권, 운전면허증
- 인증(attestation): 제3자가 주장을 검증.

## 신원과 접근 관리 시스템
신원과 접근관리 시스템의 기능은 입증(authentication)과 승인(authorization)입니다. 예를 들어, 다른 나라에 여행을 가면, 여권으로 나의 신원을 입증하고, 그 나라에 입국할 수 있는 승인을 받습니다. 이 과정에 참여하는 당사자는 사용자, 서비스제공자, 신원제공자, 특성에 대한 권위(attribute authority; certificate authorities, corporate directory services, domain name registries) 등이 있습니다.

우리가 웹사이트를 방문해서 아이디와 비밀번호를 입력할 때, 해커는 가짜 웹사이트를 만들어서 진짜인 척 정보를 빼돌릴 수 있습니다. 이를 방지하는 것이 인증기관(certificate authorities)입니다. 중앙매개자 역할을 하는 인증기관은 사용자 브라우저와 웹사이트 사이에서 우리가 방문하는 웹사이트가 진짜임을 인증해줍니다. 이때도 공개키-개인키 암호화 방식과 전자서명이 사용됩니다. 브라우저 주소창 앞에 붙어있는 자물쇠 아이콘이 바로 인증을 받은 웹사이트를 의미합니다.

### 신원관리의 과제와 불만사항
프라이버시와 보안, 신원절도, 증명서 위조, 신원에 대한 변화가 있을 때 개인정보(personal identity information: PII)를 업데이트하는 방법, 인증에 걸리는 비용과 시간, 디지털 대 물리적인 증명서의 사용에 있어서 트레이드오프, 중앙화로 인한 문제들--사이버어택, 관할권분할, 독점적인 행동, 검열과 포용 등--이 과제로 남아있습니다.

### 대규모 데이터 유출 사건
- Adobe, 2013, 1억5200만
- Ebay, 2014, 1억4500만
- Equifax, 2017, 1억4300만
- Facebook, 2018, 5천만
- Friends Finder, 2016, 4억1200만
- Quora, 2018, 1억
- Under Armour, 2018, 1억5000만
- Yahoo, 2013, 2014, 35억

## 국가별 프로젝트
- 에스토니아: e-identity. 국가에서 발행하는 디지털신원입니다. 2002년 ID 카드로 시작했고, X-Road 소프트웨어로 작동합니다.
- 인도: Aadhaar. 국가적인 신원 시스템으로, 12자리 수로 되어있는 ID입니다. 지문과 홍채인식 기술을 사용합니다.

### 자기주권신원
자기주권신원(self-sovereign identity)은 사람과 독립체가 신원을 **관리(control)**합니다. 매개자를 거치지 않고 직접 **접근**합니다. 신원은 이동가능(transportable)합니다. 신원은 넓게 사용가능하고 호환성(interoperable)이 있습니다.

## 신원과 블록체인 기술
신원관리 시스템에서 블록체인 기술을 사용할 때의 이득은,
- 검증의 비용과 사기를 해결할 수 있습니다.
- 출처를 추적할 수 있습니다.
- 접근이 쉽고 검열에 저항할 수 있습니다.
- 자기주권신원과 분산화된 식별자(decentralized identifiers; DIDs)의 사용을 용이하게 해줍니다.

이에 따르는 과제는,
- 개인을 식별할 수 있는 정보를 블록체인에 저장할 때의 프라이버시 문제가 있습니다.
- 접근에 대한 제어(access controls)
- 단체 행동(collective action)과 수용(adoption)의 문제가 있습니다.

### IAM 블록체인 기술 프로젝트의 예
- Bitnation: decentralized borderless voluntary nation
- Civic Secure Identity: ICO for secure identity platform
- Cambridge Blockchain LLC: identity compliance solutions
- Democracy Earth Foundation: 분산화 ID를 통해 포용성 추구
- Ditributed Identity Foundation: 분산화 IAM의 표준화
- Existence ID: ICO for secure identity
등등...

## 정리
현대의 경제는 신원과 접근 관리(Identity and Access Management)에 광범위하게 의존하고 있습니다. 디지털 경제에서 IAM은 해킹, 사기, 검열, 비용과 마켓파워 등의 중요한 문제들을 안고 있습니다. 전자서명은 현재 IAM 시스템의 중요한 부분입니다. 자기주권신원은 이런 문제를 해결할 가능성이 있습니다. 다양한 블록체인 프로젝트들이 시험 중에 있습니다. 상용화를 위해서는 프라이버시, 제어와 대중화와 관련된 과제들을 해결해야합니다.

---
현재 바이든 정부의 SEC 의장 개리 겐슬러 교수가 MIT에서 2018년에 블록체인과 화폐를 주제로 수업한 내용을 정리하고 있습니다. 이 요약노트는 무엇보다도 제 스스로의 공부를 위한 글입니다. 강의 내용 이외에도 제 생각들을 덧붙였기 때문에 강의 자체에 관심이 있는 분들은 원본 강의 영상을 보시길 권합니다. [강의 웹사이트](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/video-lectures/)에도 영상, 리딩 등이 잘 정리되어있습니다. 강의는 [CC BY-NC-SA 라이센스](https://creativecommons.org/licenses/by-nc-sa/4.0/)로 공개되어 있습니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/W06Le8fw0vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>