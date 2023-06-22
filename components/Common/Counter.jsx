import React from "react";
import dynamic from "next/dynamic";
// import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "60",
    endPointText: "",
    meta: "Years",
    animationDelay: "0",
  },
  {
    id: 2,
    startCount: "0",
    endCount: "4",
    endPointText: "",
    meta: "Branches",
    animationDelay: "100",
  },
  {
    id: 3,
    startCount: "0",
    endCount: "500",
    endPointText: "+",
    meta: "Staff",
    animationDelay: "200",
  },
  {
    id: 4,
    startCount: "0",
    endCount: "8000",
    endPointText: "+",
    meta: "Students",
    animationDelay: "200",
  },
];

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
          className="col-md-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="counter-block-one text-center mb-45">
            <div className="main-count font-recoleta">
              <span className="counter">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <InView
                      as="span"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              <span className="span-text">{val.endPointText}</span>
            </div>
            <p className="theme-mb-0">{val.meta}</p>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default CounterUp;
