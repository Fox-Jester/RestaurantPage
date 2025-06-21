

import contentBlock from "./contentBlock.js"

const blockArray = [new contentBlock("Super Smoothie Shop", "", true),
    new contentBlock("World's Best Smoothies", "Voted #1 smoothie shop ever by everyone!"),
    new contentBlock("Love of the craft", "Since 1999, we've been pouring love into every smoothie"),
    new contentBlock("Hours", "Open everyday from 9am-6pm")];


export default function createBlocks(){
    blockArray.forEach(block => block.create());

}
