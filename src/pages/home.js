

import ContentBlock from "../ContentBlock.js"

const blockArray = [
    new ContentBlock("World's Best Smoothies", "Voted #1 smoothie shop ever by everyone!", true),
    new ContentBlock("Love of the craft", "Since 1999, we've been pouring love into every smoothie"),
    new ContentBlock("Hours", "Open everyday from 9am-6pm")];


export default function createBlocks(){
    blockArray.forEach(block => block.create());

}
