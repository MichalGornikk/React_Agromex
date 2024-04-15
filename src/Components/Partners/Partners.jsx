import "./Partners.css";

// const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  // scrollers.forEach((scroller) => {
  //   scroller.setAttribute("data-animated", true);
  //   const scrollerInner = scroller.querySelector(".scroller__inner");
  //   const scrollerContent = Array.from(scrollerInner.children);
  //   scrollerContent.forEach((item) => {
  //     const duplicatedItem = item.cloneNode(true);
  //     duplicatedItem.setAttribute("aria-hidden", true);
  //     scrollerInner.appendChild(duplicatedItem);
  //   });
  // });
}

const Partners = () => {
  const Part = [
    { image: "images/about.jpg", alt: "Logo Agromex" },
    { image: "images/about.jpg", alt: "Logo TEST" },
    { image: "images/about.jpg", alt: "Logo Agromex" },
    { image: "images/about.jpg", alt: "Logo TEST" },
  ];
  return (
    <div className="box-scroll">
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          {Part.map((team) => (
            <li key={team.image}>
              <img src={team.image} alt={team.alt} height="200" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
