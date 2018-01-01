// Import React
import React from "react";
import "./index.css";
import me from "../assets/yo_boy.jpg";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  lightGray: "#eee",
  black: "#1F2022",
  blue: "#2aabe2",
  darkGray: "#ccc"
}, {
  primary: { name: "Nunito", googleFont: true }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="lightGray">
          <Image src="https://s3.amazonaws.com/devmountain/www/img/DevLogo_Standard.png" />
          <Text margin="10px 0 0" textColor="blue" textSize="5.3rem">
            Online
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={3} textColor="black">About Me</Heading>
          <Image src={me} height="300" />
          <List textColor="lightGray">
            <ListItem>Attended DevMountain</ListItem>
            <ListItem>Developing for 4 years</ListItem>
            <ListItem>Overstock, 1-800 Contacts, Fashionphile & Freelance</ListItem>
            <ListItem>Wife and two dogs, Hawaii, Arcade Fire/Modest Mouse/Atmosphere</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={3} textColor="black">Outline</Heading>
          <List textColor="lightGray">
            <ListItem>26 Weeks</ListItem>
            <ListItem>Monday, Wednesday & Saturday</ListItem>
          </List>
          <div className="outline">
            <div className="holder">
              <Text>Monday</Text>
              <Text>Wednesday</Text>
            </div>
            <span className="arrow">&#x2192;</span>
            <div className="holder">
              <Text>Lecture Days</Text>
              <Text>6-9PM MT</Text>
            </div>
          </div>
          <div className="outline">
            <div className="holder">
              <Text>Saturday</Text>
            </div>
            <span className="arrow">&#x2192;</span>
            <div className="holder">
              <Text>Lab Day</Text>
              <Text>9AM-2PM MT</Text>
            </div>
          </div>
          <List textColor="lightGray">
            <ListItem>join.me</ListItem>
            <ListItem>Slack</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="lightGray" textColor="blue">
          <Heading size={3} textColor="black">join.me</Heading>
          <List>
            <ListItem>Program that allows me to share my screen</ListItem>
            <ListItem>Will be using join.me for attendance</ListItem>
            <ListItem>Enter room with your FIRST and LAST name</ListItem>
            <ListItem>Be logged in and ready to go before class starts</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={3} textColor="black">Attendance</Heading>
          <List textColor="lightGray">
            <ListItem>No excuses attendance policy</ListItem>
            <ListItem>Two unexcused absences and you will be dropped. This includes missing more than 20 minutes of class time</ListItem>
            <ListItem>Give notice if you are going to miss time</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={3} textColor="blue">Student-Student Interaction</Heading>
          <List textColor="lightGray">
            <ListItem>Be Professional</ListItem>
            <ListItem>Be Considerate</ListItem>
            <ListItem>Zero Tolerance Harrassment</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={3} textColor="black">Learning</Heading>
          <List textColor="lightGray">
            <ListItem>Pre-Class Material</ListItem>
            <ListItem>Lecture/Mini Project</ListItem>
            <ListItem>Afternoon/Stretch Project</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" textColor="blue" >
          <Heading size={3} textColor="lightGray">Course</Heading>
          <List textColor="blue">
            <ListItem>Attempt to complete all assignments</ListItem>
            <ListItem>Choosing not to attempt an assignment will be treated the same as missing a day of class</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
