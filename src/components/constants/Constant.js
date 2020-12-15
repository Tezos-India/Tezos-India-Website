import edu from "../../assets/edu.svg";
import event from "../../assets/media.svg";
import business from "../../assets/business.svg";
import community from "../../assets/community.svg";
import user from "../../assets/sample-img.png";
import om from "../../assets/om.jpg";

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
      image: user,
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

export { activity, carousel };
