const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、華氏-1度のとても寒い日だった。:insertx:は出かけた。間もなく彼は:inserty:に着いた。体重が300ポンドの彼は:insertz:。ボブは一部始終を見ていたが、全く驚かなかった。:insertx:はドーナツを食べた。それは:inserty:ではよくあることだった。'
const insertX = ['ふなっしー', 'くまモン', 'ムーミン'];
const insertY = ['ディズニーシー', '金閣寺', '大涌谷'];
const insertZ = ['踊った', '歌った', '拍手した'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
   newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("日本").checked) {
    const 体重 = `${Math.round(300*0.1714286)}`;
    const 気温 =  `${Math.round((94-32) * 5 / 9)}`;
    newStory = newStory.replace('-1', 気温);
    newStory = newStory.replace('300', 体重);
     newStory = newStory.replace('華氏', '摂氏');
    newStory = newStory.replace('ポンド', 'キロ');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
