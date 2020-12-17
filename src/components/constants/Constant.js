import edu from "../../assets/edu.svg";
import event from "../../assets/media.svg";
import business from "../../assets/business.svg";
import community from "../../assets/community.svg";
import om from "../../assets/om.jpg";
import dribbble from "../../assets/Dribbble.svg";
import insta from "../../assets/Instagram.svg";
import linkedin from "../../assets/Linkedin.svg";
import like from "../../assets/like.png";
import sample from "../../assets/example.jpg";
import arrow from "../../assets/next.svg";

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
      title: "Hackathons",
      subTitle:
        "We actively conduct and support hackathons to enable teams to build innovative PoCs",
    },
  ],
};

const carousel = {
  members: [
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      testimonial:
        "Move Music app that changed my opinion about music! I would never have thought that you can import your music from another app!",
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      testimonial:
        "Move Music app that changed my opinion about music! I would never have thought that you can import your music from another app!",
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      testimonial:
        "Move Music app that changed my opinion about music! I would never have thought that you can import your music from another app!",
    },
  ],
};
const team = {
  teammates: [
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
    },
  ],

  teamamtesRowTwo: [
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
    },
    {
      name: "Om Malviya",
      designation: "Founder & CEO",
      image: om,
      instagram: insta,
      dribbble: dribbble,
      linkedin: linkedin,
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
