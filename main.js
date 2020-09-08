var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["pontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);

    // replaces default name with custom name if one is entered
    if (customName.value !== 'Bob') {
        var name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    // checks if uk is selected. if yes then replaces weight and temperature with uk values
    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 / 14);
        var temperature = Math.round((94 - 32) * 5 / 9);

        newStory = newStory.replace("300", weight).replace("pounds", "stones").replace("94", temperature).replace("fahrenheit", "celcius");

    }

    // replace placeholders
    newStory = newStory.replace(":insertx:", itemX).replace(":inserty:", itemY).replace(":insertz:", itemZ);
    newStory = newStory.replace(":insertx:", itemX)

    story.textContent = newStory;
    story.style.visibility = 'visible';
}