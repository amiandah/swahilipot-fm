import React from "react";
import Image from "next/image"; // Assuming you have Image component from Next.js

const ScheduleCard = ({ day, time, image }) => (
  <div className="schedule-card">
    <article
      className="proradio-post proradio-post__card proradio-post__card--shows proradio-darkbg proradio-negative post-1780 schedule type-schedule status-publish hentry"
      data-qtwaypoints
    >
      <div className="proradio-bgimg proradio-bgimg--full proradio-duotone"></div>
      <div className="proradio-post__headercont">
        <a className="proradio-post__header__link" href="#"></a>
        <div className="proradio-post__card__cap">
          {image && <Image src={image} alt={day} width={100} height={100} />}
          <h3 className="proradio-post__title proradio-cutme-t-2 proradio-h4">
            <a href="#">{day}</a>
          </h3>
          <p className="proradio-itemmetas">{time}</p>
        </div>
      </div>
    </article>
  </div>
);

const ScheduleDay = () => (
  <div
    className="proradio-row proradio-activeschedule"
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    {/* Sunday */}
    <ScheduleCard day="Sunday" time="5:00 am - 8:00 am" image="" />
    {/* Monday */}
    <ScheduleCard day="Monday" time="5:00 am - 8:00 am" image="" />
    {/* Tuesday */}
    <ScheduleCard day="Tuesday" time="5:00 am - 8:00 am" image="" />
    {/* Wednesday */}
    <ScheduleCard
      day="Wednesday"
      time="5:00 am - 8:00 am"
      image=""
    />
    {/* Thursday */}
    <ScheduleCard
      day="Thursday"
      time="5:00 am - 8:00 am"
      image=""
    />
    {/* Friday */}
    <ScheduleCard day="Friday" time="5:00 am - 8:00 am" image="" />
    {/* Saturday */}
    <ScheduleCard day="Saturday" time="5:00 am - 8:00 am" image="" />
  </div>
);

export default ScheduleDay;
