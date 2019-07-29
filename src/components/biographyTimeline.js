import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const BiographyTimeline = ({biographyList}) => {
  console.log(biographyList);
  const colorsOfDates = ['#6C8CD5', '#FFD073'];
  
  // const dateText = dateText={date}
  const timelineItems = biographyList.map((bioItem, index) => {
    const hyphenIndex = bioItem.lastIndexOf('-');
    const firstLetter = bioItem.search(/[a-zа-я]/i);

    const dateText = bioItem.slice(0, firstLetter-1);
    const bioText = bioItem.slice(firstLetter);
    const colorOfDate = colorsOfDates[index % colorsOfDates.length];

    console.log(colorOfDate);
    console.log(bioItem.split('-'));
    return (
      <TimelineItem
        dateText={dateText}
        key={index.toString()}
        dateInnerStyle={ {background: colorOfDate} }
      >
        {bioText}
      </TimelineItem>
    )
  })

  return (
    <Timeline lineColor={'#ddd'}>
      {timelineItems}
    </Timeline>
  );
};

export default BiographyTimeline;
