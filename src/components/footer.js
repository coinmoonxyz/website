import React from "react"

const Footer = props => {
  return (
    <footer style={{ fontSize: "13px", color: '#666' }}>
      <p>© {new Date().getFullYear()}, coinmoon.xyz</p>
      <p>
        Disclaimer: This website is for entertainment purpose only. The owner
        and writers of the website are not financial advisors, and no
        information on this website should be used to make investment decisions.
        The owner and writers of the website cannot be held accountable for any
        loss that may incur. The cryptocurrency market is highly volatile.
        Please do your own thorough research before making any investment.
      </p>
      <p>
        공지: 이 웹사이트는 재미를 목적으로 만들었습니다. 운영진과 필진은 재정
        전문가가 아니며 본 웹사이트의 컨텐트는 투자 정보로 사용할 수 없습니다.
        운영진과 필진은 어떤 손해도 책임질 수 없습니다. 코인 마켓은 굉장히
        불안정합니다. 투자를 할 때에는 꼭 직접 충분한 조사를 하시기를 권합니다.
      </p>
      <p>
        Advertisement Disclaimer: The links on this website may contain
        referral/affiliate links. If you purchase products or services through
        the links, the owner of the website gets a small portion.
      </p>
      <p>
        광고 공지: 본 웹사이트의 링크는 리퍼럴 링크를 포함합니다. 방문자가 이
        링크를 통해 제품이나 서비스를 구매 시, 운영자는 약간의 커미션을
        받습니다.
      </p>
    </footer>
  )
}

export default Footer
