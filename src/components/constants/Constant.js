import edu from "../../assets/edu.svg";
import event from "../../assets/media.svg";
import business from "../../assets/business.svg";
import community from "../../assets/community.svg";
import om from "../../assets/om.jpg";
import bernd from "../../assets/bernd.png";
import jignesh from "../../assets/jignesh.jpg";
import mudit from "../../assets/mudit.jpg";
import sandeep from "../../assets/sandeep.jpg";
import akhil from "../../assets/akhil.jpg";
import sanket from "../../assets/sanket.jpg";
import sneha from "../../assets/sneha.jpg";
import tejaaswini from "../../assets/tejaaswini.jpg";
import soumya from "../../assets/soumya.jpg";
import madhav from "../../assets/madhav.jpg";
import sahil from "../../assets/sahil.jpg";
import shivam from "../../assets/shivam.jpg";
import shubham from "../../assets/shubham.jpg";
import like from "../../assets/like.png";
import sample from "../../assets/example.jpg";
import arrow from "../../assets/next.svg";
import dribbble from "../../assets/Dribbble.svg";

const activity = {
  activityCard: [
    {
      img: edu,
      title: "Education",
      subTitle:
        "We conduct regular education programs to enable the community to build on Tezos Protocol",
    },
    {
      img: event,
      title: "Events",
      subTitle:
        "We conduct events with ecosystem partners to bring rich discussions around the role of blockchains today",
    },
  ],
  activityTwoCard: [
    {
      img: business,
      title: "Business Development",
      subTitle:
        "We help our ecosystem partners to leverage the power of Tezos Protocol by making relevant connections and help with grants on a case by case basis",
    },
    {
      img: community,
      title: "Hackathons & Fellowships / Developer Activities",
      subTitle:
        " We actively conduct and support hackathons, developer activites to enable individuals and teams to build innovative projects, PoCs on Tezos.",
    },
  ],
};

const carousel = {
  members: [
    {
      name: "Madhav Aggarwal",
      insti:"NIT,Tiruchirappalli",
      designation: "Tezos India fellowship",
      image: madhav,
      testimonial:
        "Tezos India Fellowship was an amazing experience and one which gave me my breakthrough and much needed experience in the blockchain community. I learnt so much and  was able to meet people from around the Tezos community. All my mentors were great people and they constantly helped me in achieving my final end product. Tezos gives you a platform to showcase your skills and build for the Tezos Community.",
    },
    {
      name: "Sahil Singh",
      insti:" Amity University, Noida",
      designation: "Attendee, Blockchain 101 workshop on Tezos.",
      image: sahil,
      testimonial:
        "The workshop organized by Tezos India Foundation was an amazing 2 days workshop based on Blockchain and Tezos fundamentals. Totally enjoyed and learned a lot in 2 days. Content was relevant and well presented.",
    },
    {
      name: "Shivam Agrawal",
      insti:"IIIT, Gwalior",
      designation: "Attendee, Blockchain 101 workshop on Tezos",
      image: shivam,
      testimonial:
        "I found the Blockchain 101 on Tezos workshop to be very informative. The workshop provided me with specific hands-on skills that help me in polishing my skills in Blockchain. The skills will be surely invaluable in my professional life. The presenter was very knowledgeable and provided a pace for questions about the Blockchain or Tezos.",
    },
    {
      name: "Shubham Kukreja",
      insti:"Pune Institute of Computer Technology",
      designation: "Tezos India Fellowship",
      image:shubham,
      testimonial:
        "I am grateful to have had the opportunity to work with such a diverse and experienced community at Tezos India Foundation, with colleagues coming from different backgrounds of expertise and having an open mind to help me learn about the various aspects of developing a fully-fledged Dapp in a timeline of 8-weeks",
    },
  ],
};
const team = {
  teammates: [
    {
      name: "Om Malviya",
      designation: "President",
      image: om,
      linkedin: " https://www.linkedin.com/in/om-malviya-821052119/",
      twitter: "https://twitter.com/MalviyaOp",
      telegram: "https://t.me/malviyaop",
    },
    {
      name: "Bernd Oostrum",
      designation: "Developer Evangelist",
      image: bernd,
      linkedin: "https://www.linkedin.com/in/bernd-oostrum/",
      twitter: "https://twitter.com/bernd_oostrum",
      telegram: "https://t.me/berndoostrum",
    },
    {
      name: "Jignesh Vasoya",
      designation: "Lead Developer & Solutions Architect",
      image: jignesh,
      linkedin: "https://www.linkedin.com/in/jigneshvasoya/",
      twitter: "https://twitter.com/rakhduJeeV",
      telegram: "https://t.me/jigneshvasoya",
    },
    {
      name: "Sandeep Sangli",
      designation: "Head, Business Development (India)",
      image: sandeep,
      linkedin: "https://www.linkedin.com/in/sandeepsangli/",
      twitter: "https://twitter.com/sandeepsangli",
      telegram: "https://t.me/sandeepsangli",
    },
  ],

  teamamtesRowTwo: [
    {
      name: "Mudit Marda",
      designation: "Blockchain Technology Analyst",
      image: mudit,
      linkedin: "https://www.linkedin.com/in/muditmarda/",
      twitter: "https://twitter.com/mudit_marda",
      telegram: "https://t.me/mudit_m",
    },
    {
      name: "Akhil Bharati",
      designation: "Senior Software Engineer",
      image: akhil,
      linkedin: "https://www.linkedin.com/in/akhil-bharti-17161272/ ",
      twitter: "https://twitter.com/ItsJustAkhil",
      telegram: "https://t.me/akhilbharti",
    },
    {
      name: "Sneha Biradar",
      designation: "Community Manager",
      image: sneha,
      linkedin: "https://www.linkedin.com/in/sneha-biradar-431943153/",
      twitter: "https://twitter.com/iSnehaBiradar",
      telegram: "https://t.me/Snehabiradar",
    },
  ],
  sanket: [
    {
      name: "Sanket Pal",
      designation: "UI/UX Desginer",
      image: sanket,
      linkedin: "https://www.linkedin.com/in/sanketpal/",
      twitter: "https://twitter.com/sanket1994pal",
      telegram: "https://t.me/UX_Sanket",
      dribbbleLink:"https://dribbble.com/sanketpal",
      dribbble:dribbble,
    },
  ],
  internsRow: [
    {
      name: "GD Soumya",
      designation: "Blockchain Intern",
      image: soumya,
      linkedin: "https://www.linkedin.com/in/gdsoumya/",
      twitter: "https://twitter.com/gdsoumya",
      telegram: "https://t.me/gdsoumya",
    },
    {
      name: "Tejaaswini Narendra",
      designation: "Blockchain Intern",
      image: tejaaswini,
      linkedin: "https://www.linkedin.com/in/tejaaswini-narendra-012b93153/",
      twitter: "https://twitter.com/tejnaren07",
      telegram: "https://t.me/tej_naren",
    },
  ],
};
const faq = {
  faqRowOne: [
    {
      title: "Can I use this template for commercial purposes?",
    },
    {
      title: "Do you offer bulk discounts?",
    },
    {
      title: "Will there be updates related to the store?",
    },
  ],
  faqRowTwo: [
    {
      title: "Can support help me work with the template?",
    },
    {
      title: "In which applications can I edit your template?",
    },
    {
      title: "Will there be a version for Figma in the future?",
    },
  ],
};
const blogCard = {
  blogs: [
    {
      type: "Business",
      date: "12th May",
      subTitle: "How to start earning",
      desc:
        "The right priorities help us in the direction of our potential which is why it is important for earnings.",
      next: "Read story",
      image: sample,
      like: like,
      stars: "49",
      arrow: arrow,
    },
    {
      type: "Business",
      date: "12th May",
      subTitle: "How to start earning",
      desc:
        "The right priorities help us in the direction of our potential which is why it is important for earnings.",
      next: "Read story",
      image: sample,
      like: like,
      stars: "49",
      arrow: arrow,
    },
  ],
};

export { activity, carousel, team, faq, blogCard };
