
import contentBlock from "./contentBlock";

const aboutUs = `Fresh, Fruity, and Full of Good Vibes.
Welcome to Super Smoothie Shop, where every sip is crafted with purpose and packed with flavor.
What started as a passion for healthy living and a love of fresh fruits turned into our mission:
to make nutritious choices delicious and accessible to everyone.`

const ourStory = `We opened our doors in 1999 with one simple goal:
 to serve up smoothies that taste as good as they are for you.
Inspired by the vibrant energy of local markets and powered by a desire to fuel our community,
 we created a space where wellness and indulgence meet.

From classic blends to adventurous new mixes,
 every drink is made fresh-to-order using real fruits,
  veggies, and superfoods—never syrups or artificial flavors.`



const aboutUsBlock = new contentBlock("About us", aboutUs, true);
const ourStoryBlock = new contentBlock("Our Story", ourStory)


function createAbout() {
    aboutUsBlock.create();
    ourStoryBlock.create()
}

export default createAbout;