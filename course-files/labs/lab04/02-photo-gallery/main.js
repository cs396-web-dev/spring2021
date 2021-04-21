const photos = [
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

/**   PLEASE COMPLETE THE FOLLOWING STEPS
 * 
 * 1. Create a card for every image in the photos list using 
 *    the built-in forEach array method and a template string 
 *    literal to output.
 * 
 * 2. After each card is added to the DOM (in the cards div),
 *    attach an "onclick" event handler (i.e. function) to 
 *    each card that will:
 *      a. Sets the background image of the ".featured_image"
 *         element to whatever
 *      
*/

const showFullscreen = (ev) => {
    console.log(ev.currentTarget);
    console.log(ev.currentTarget.style.backgroundImage);
}

let template = `
    <div class="card" style="background-image:url('images/poppies.jpg')"></div>
`;
document.querySelector('.cards').innerHTML += template;

document.querySelectorAll('.card').forEach(card => {
    card.onclick = showFullscreen;
});
