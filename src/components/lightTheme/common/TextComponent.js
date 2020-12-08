import React from "react";
import '../styles/TextStyle.css'


export function HeadingComponent(props) {
  return (
    <div className="headingTextStyle">
      <div className={props.componentStyle} onClick={props.triggerOnClickEvent}>
        {props.text}
      </div>
    </div>
  );
}

export function SubHeadingComponent(props) {
  return (
    <div className="subHeadingTextStyle">
      <div className={props.componentStyle} onClick={props.triggerOnClickEvent}>
        {props.text}
      </div>
    </div>
  );
}

export function TextComponent(props) {
  return (
    <div className="textStyle"> 
      <div className={props.componentStyle} onClick={props.triggerOnClickEvent}>
        {props.text}
      </div>
    </div>
  );
}
export function SmallTextComponent(props) {
  return (
    <div className="smallTextStyle">
      <div className={props.componentStyle} onClick={props.triggerOnClickEvent}>
        {props.text}
      </div>
    </div>
  );
}