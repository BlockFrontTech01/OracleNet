import { useEffect } from "react";
import Header from "../components/header";

const OracleNet = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative [background:linear-gradient(88.28deg,_#090055,_#ff0199)] w-full h-[5262px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-11xl text-whitesmoke font-kadwa md:h-[6600px]">
      <div className="my-0 mx-[!important] absolute top-[5137px] left-[0px] w-[352px] flex flex-row items-start justify-center gap-[44px] z-[0] md:gap-[30px] md:pt-[1300px] md:pr-[50px] md:box-border">
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0 object-cover md:w-10 md:h-10"
          alt=""
          src="/frame-15@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0 object-cover md:w-10 md:h-10"
          alt=""
          src="/frame-16@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0 object-cover md:w-10 md:h-10"
          alt=""
          src="/frame-18@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0 object-cover md:w-10 md:h-10"
          alt=""
          src="/frame-17@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[165px] left-[0px] flex flex-row items-center justify-start gap-[613px] z-[1] text-[40px] font-koh-santepheap lg:gap-[400px] md:gap-[0px] md:pl-2.5 md:pt-0 md:box-border">
        <div className="relative w-[19px] h-[15px] overflow-hidden shrink-0" />
        <div
          className="relative font-black [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          OracleNet Lume
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[233px] left-[0px] w-[961px] flex flex-row items-center justify-end gap-[635px] z-[2] lg:w-[750px] lg:gap-[0px] md:w-[350px] md:pt-[50px] md:box-border">
        <div className="relative w-[11px] h-[101px] overflow-hidden shrink-0" />
        <img
          className="relative w-[319px] h-[292px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[20s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1] [&.animate]:md:animate-[20s_linear_0s_infinite_normal_forwards_rotate-center] md:opacity-[1]"
          alt=""
          src="/frame-1@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[542px] left-[1px] w-[1133px] h-[226px] flex flex-row items-center justify-end gap-[403px] z-[3] text-lg lg:w-[920px] lg:gap-[0px] md:w-[400px] md:pt-[200px] md:box-border">
        <div className="relative w-[18px] h-[54px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[683px] h-[155px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          Welcome to OracleNet Lume, an innovative decentralized oracle network
          designed to transform the interaction between smart contracts and
          real-world data. OracleNet Lume harnesses the efficiency of Layer 2
          scaling, offering unparalleled advantages such as improved
          scalability, reduced transaction costs, and enhanced performance for
          decentralized applications (dApps) across various blockchain networks.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[874px] left-[1px] flex flex-row items-center justify-start gap-[566px] z-[4] font-koh-santepheap lg:gap-[350px] md:w-80 md:gap-[0px] md:items-center md:justify-end md:pl-0 md:pt-[200px] md:pr-0 md:box-border">
        <div className="relative w-[57px] h-[11px] overflow-hidden shrink-0" />
        <div
          className="relative font-black [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl"
          data-animate-on-scroll
        >
          About OracleNet Lume
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[897px] left-[42px] w-[1127px] h-[552px] flex flex-row items-center justify-end gap-[443px] z-[5] lg:w-[900px] md:w-[400px] md:pt-[300px] md:pr-5 md:box-border">
        <div className="relative w-9 h-[180px] overflow-hidden shrink-0" />
        <img
          className="relative w-[635px] h-[632px] overflow-hidden shrink-0 object-cover md:w-[400px]"
          alt=""
          src="/frame-2@2x.png"
        />
      </div>
      <div className="absolute my-0 mx-[!important] top-[1104.5px] left-[1150px] w-px h-9 overflow-hidden shrink-0 z-[6]" />
      <div className="my-0 mx-[!important] absolute top-[1339px] left-[1px] w-[900px] flex flex-row items-start justify-end gap-[652px] z-[7] font-koh-santepheap lg:w-[670px] lg:gap-[0px] md:w-[310px] md:pt-[200px] md:box-border">
        <div className="relative w-[41px] h-[30px] overflow-hidden shrink-0" />
        <div className="relative font-black">Key Features</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1477px] left-[1px] w-[1547px] flex flex-row items-start justify-center gap-[249px] z-[8] text-mid lg:w-[1150px] md:w-[410px] md:flex-col md:gap-[107px] md:pl-[15px] md:pt-[200px] md:box-border">
        <div className="relative w-[396px] h-[871px]">
          <div className="absolute top-[0px] left-[1px] w-[395px] h-[382px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#ffb903)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#26ffff,_#ff0101)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#26ffff,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0101,_#82ff04)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[5px] left-[5px] inline-block w-[372px] h-[342px]">
              <p className="m-0 font-graduate">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-xl">
                <span>
                  <span>Layer 2 Scalability</span>
                </span>
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li className="mb-0">
                  <span>
                    OracleNet Lume leverages Layer 2 scaling, ensuring rapid
                    transaction confirmations and significantly lowering gas
                    fees.
                  </span>
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li>
                  <span>
                    Smart contracts seamlessly interact with real-world data
                    off-chain, optimizing scalability and performance for
                    decentralized applications.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute top-[489px] left-[0px] w-[395px] h-[382px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#ffb903)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#26ffff,_#ff0101)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#26ffff,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0101,_#82ff04)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[5px] left-[5px] inline-block w-[372px] h-[362px]">
              <p className="m-0 font-graduate">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-xl">
                <span>
                  <span>Privacy-Preserving Data</span>
                </span>
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li className="mb-0">
                  <span>
                    Integrates advanced cryptographic techniques to safeguard
                    the privacy of sensitive data used in smart contracts.
                  </span>
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li>
                  <span>
                    Users confidently incorporate real-world information into
                    their applications without compromising data integrity or
                    confidentiality.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-[395px] h-[871px]">
          <div className="absolute top-[0px] left-[0px] w-[395px] h-[382px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#ffb903)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#26ffff,_#ff0101)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#26ffff,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0101,_#82ff04)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[5px] left-[5px] inline-block w-[372px] h-[362px]">
              <p className="m-0 font-graduate">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-xl">
                <span>
                  <span>Decentralized Oracle Network</span>
                </span>
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li className="mb-0">
                  <span>
                    Operates as a decentralized oracle network, delivering
                    tamper-resistant and reliable data feeds to smart contracts.
                  </span>
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li>
                  <span>
                    Node operators contribute to network security and
                    decentralization, ensuring trustless data retrieval for
                    smart contracts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute top-[489px] left-[0px] w-[395px] h-[382px] text-11xl font-koh-santepheap">
            <div
              className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#ffb903)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[489px] left-[-185px] font-black">
                Use Cases
              </div>
            </div>
            <div
              className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#26ffff,_#ff0101)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#26ffff,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0101,_#82ff04)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0] [&.animate]:md:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] md:opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[5px] left-[5px] inline-block w-[372px] h-[362px] text-mid font-kadwa">
              <p className="m-0 font-graduate">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-xl">
                <span>
                  <span>Interoperability</span>
                </span>
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[23px]">
                <li>
                  <span>
                    OracleNet Lume is designed for interoperability with various
                    blockchain networks, facilitating seamless integration with
                    a wide range of decentralized applications.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4499px] left-[2px] w-[959px] flex flex-row items-center justify-end gap-[488px] z-[9] text-mid lg:w-[370px] md:flex-col md:pl-[55px] md:pt-[700px] md:box-border">
        <div className="relative w-[38px] h-[67px] overflow-hidden shrink-0" />
        <div className="relative w-[394px] h-[232px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#476571,_#f9d4ec)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div
            className="absolute top-[227px] left-[0px] [background:linear-gradient(-90deg,_#cfa444,_#b6012e)] w-[394px] h-[5px] overflow-hidden [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div
            className="absolute top-[232px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#cfa444,_#f9d4ec)] w-[230px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div
            className="absolute top-[232px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#b6012e,_#476571)] w-[230px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0] [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[40px] left-[25px] inline-block w-[344px] h-[136px]">
            Explore partnership opportunities with OracleNet Lume. Collaborate
            with us to bring decentralized oracle solutions to a broader
            audience.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2447px] left-[0px] w-[843px] flex flex-row items-start justify-end gap-[656px] z-[10] font-koh-santepheap lg:w-[650px] lg:gap-[200px] md:w-[280px] md:gap-[0px] md:pt-[1200px] md:box-border">
        <div className="relative w-[9px] h-[37px] overflow-hidden shrink-0" />
        <div className="relative font-black">Use Cases</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2584px] left-[1px] w-[963px] flex flex-row items-center justify-end gap-[504px] z-[11] text-left text-mid text-white lg:w-[770px] lg:gap-[0px] md:w-[280px] md:flex-col md:pl-[145px] md:pt-[1100px] md:box-border">
        <div className="relative w-8 h-[111px] overflow-hidden shrink-0" />
        <div className="relative [background:linear-gradient(180deg,_#fe2a0d,_rgba(113,_1,_108,_0))] shadow-[0px_0px_100px_#000] w-[395px] h-[382px]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#120dfe,_#f5f5f5)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#ff0199,_#000)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#ff0199,_#f5f5f5)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#000,_#120dfe)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[21px] left-[14px] inline-block w-[367px] lg:w-[367px]">
            <p className="m-0">
              Decentralized Finance (DeFi): Reliable price feeds, market data,
              and more for DeFi applications.
            </p>
            <p className="m-0">
              Supply Chain: Real-time tracking and verification of supply chain
              data.
            </p>
            <p className="m-0">
              Gaming: Dynamic and secure integration of off-chain gaming data.
            </p>
            <p className="m-0">
              Insurance: Trustworthy external data for automated insurance
              contracts.
            </p>
            <p className="m-0">And many more!</p>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3065px] left-[1px] w-[848px] flex flex-row items-start justify-end gap-[675px] z-[12] font-koh-santepheap lg:w-[670px] lg:gap-[0px] lg:pr-0 lg:box-border md:w-[300px] md:pt-[1250px] md:box-border">
        <div className="relative w-8 h-[34px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[190px] shrink-0">
          Get Involve
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3202px] left-[1px] flex flex-row items-end justify-end gap-[533px] z-[13] text-mid lg:w-[1000px] lg:gap-[0px] lg:pr-[230px] lg:box-border md:w-[1000px] md:flex-col md:pt-[1200px] md:pr-[590px] md:box-border">
        <div className="relative w-[35px] h-16 overflow-hidden shrink-0" />
        <div className="relative [background:linear-gradient(180deg,_#02c2ff,_rgba(113,_1,_108,_0))] shadow-[0px_0px_100px_#000] w-[395px] h-[382px]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0199,_#ffb903)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#120dfe,_#82ff04)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#120dfe,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#fe2a0d)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[67px] left-[25px] inline-block w-[344px] h-[232px]">
            Become a part of the OracleNet Lume community and contribute to the
            future of decentralized oracles and Layer 2 scaling. Whether you are
            a developer, node operator, or enthusiast, there are numerous ways
            to get involved.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3683px] left-[1px] w-[848px] flex flex-row items-start justify-end gap-[635px] z-[14] font-koh-santepheap lg:pr-[200px] lg:box-border md:flex-col md:pl-[120px] md:pt-[600px] md:pr-0 md:box-border">
        <div className="relative w-[54px] h-[33px] overflow-hidden shrink-0" />
        <div className="relative font-black">Contribute</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3828px] left-[1px] flex flex-row items-center justify-start gap-[570px] z-[15] text-mid lg:gap-[370px] md:flex-col md:pl-4 md:pt-[830px] md:box-border">
        <div className="relative w-px h-20 overflow-hidden shrink-0" />
        <div className="relative [background:linear-gradient(180deg,_#82ff04,_rgba(113,_1,_108,_0))] shadow-[0px_0px_100px_#000] w-[395px] h-[382px]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#ff0199,_#ffb903)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[377px] left-[0px] [background:linear-gradient(-90deg,_#120dfe,_#82ff04)] w-[394px] h-[5px] overflow-hidden" />
          <div className="absolute top-[380px] left-[389px] rounded-8xs [background:linear-gradient(90deg,_#120dfe,_#ffb903)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[380px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#82ff04,_#fe2a0d)] w-[378px] h-[5px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[67px] left-[25px] inline-block w-[344px] h-[232px]">
            We welcome contributions from the community. Whether you're a
            developer, designer, or blockchain enthusiast, your skills can help
            shape the success of OracleNet Lume.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4354px] left-[2px] w-[847px] flex flex-row items-start justify-end gap-[649px] z-[16] font-koh-santepheap lg:w-[670px] lg:gap-[0px] md:w-[310px] md:pt-[1250px] md:box-border">
        <div className="relative w-4 h-[33px] overflow-hidden shrink-0" />
        <div className="relative font-black">Partnerships</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4838px] left-[1px] flex flex-row items-end justify-end gap-[393px] z-[17] text-lg lg:gap-[200px] md:w-[400px] md:gap-[0px] md:pt-[1300px] md:pr-0 md:box-border">
        <div className="relative w-7 h-[95px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[683px] h-[155px] shrink-0 md:text-mini md:w-[380px]">
          OracleNet Lume is leading the decentralized oracle revolution,
          offering a robust and efficient solution for smart contracts to
          interact with real-world data. Join us in reshaping the landscape of
          decentralized applications and unlocking the full potential of
          blockchain technology.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1067px] left-[1px] flex flex-row items-center justify-end gap-[450px] z-[18] text-lg lg:gap-[200px] lg:pr-0 lg:box-border md:flex-col md:gap-[0px] md:pl-[15px] md:pt-[100px] md:pr-0 md:box-border">
        <div className="relative w-[26px] h-[49px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[683px] h-[212px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          OracleNet Lume stands at the forefront of decentralized oracle
          networks, seamlessly integrating the power of decentralized oracles
          with the efficiency of Layer 2 scaling. Our platform acts as a secure
          bridge between decentralized environments and real-world data,
          overcoming the limitations of existing oracle solutions and
          contributing to the widespread adoption of blockchain technology.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5219px] left-[1px] w-32 flex flex-row items-center justify-center z-[19] text-mini md:pt-[1310px] md:box-border">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-19@2x.png"
        />
        <div className="relative inline-block w-[94px] h-[30px] shrink-0">
          Copy Right
        </div>
      </div>
      <Header />
    </div>
  );
};

export default OracleNet;
