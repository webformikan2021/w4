const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、とても暑かった。そして:insertx:は出かけた。間もなく:inserty:に着いた。そして彼は:insertz:。ボブは一部始終を見ていたが、全く驚かなかった。:insertx:はドーナツを食べた。:inserty:ではよくあることだった。'
const insertX = ['ミッキー', 'スポンジボブ', 'ドナルド'];
const insertY = ['ディズニーシー', '金閣寺', '大涌谷'];
const insertZ = ['混雑していた', '雪が降っていた', '鳥が多かった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
