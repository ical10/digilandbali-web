import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from '../../src/animation';
import PeopleCard from '../../src/components/PeopleCard';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const AdvisorSection = () => {
  // animation trigger
  const triggerAnimation = {
    title: useRef(),
    content: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    title: useIntersectionObserver(triggerAnimation.title, {})?.isIntersecting,
    content: useIntersectionObserver(triggerAnimation.content, {})?.isIntersecting,
  };

  const list = [];

  for (let i = 1; i <= 4; i++) {
    list.push(<PeopleCard imageUrl={`/advisor${i}.svg`} />);
  }

  return (
    <section className="pb-4 tablet:pb-32">
      <div className="pb-8 tablet:pb-12">
        <div className="overflow-hidden mb-4 tablet:mb-6 ">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl  text-[#FFF] font-bold "
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            Advisors
            <span className="text-xl tablet:text-3xl desktop:text-5xl  text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="border-b-2 border-[#5B5B5B] float-right"
          style={borderWidth(visibleAnimation.title)}
        ></animated.div>
      </div>
      <animated.div
        className="tablet:grid grid-cols-4 tablet:gap-4"
        ref={triggerAnimation.content}
        style={fadeIn(visibleAnimation.content)}
      >
        {list}
      </animated.div>
    </section>
  );
};

export default AdvisorSection;
