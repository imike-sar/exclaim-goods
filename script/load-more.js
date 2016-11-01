var moreButton = document.querySelector('.goods button');
var elementsNode = document.querySelector('.goods .elements');

function createItemNode (item) {
  var itemNode = document.createElement('div');
  itemNode.classList.add('item');

  var previewNode = document.createElement('span');
  previewNode.classList.add('privet')

  var imgNode = document.createElement('img');
  imgNode.src = 'goods/' + item.preview;

  var titleNode = document.createElement('span');
  titleNode.classList.add('title');
  titleNode.appendChild(document.createTextNode(item.title));

  var priceNode = document.createElement('span');
  priceNode.classList.add('price');
  priceNode.appendChild(document.createTextNode(item.price + ' P'));

  previewNode.appendChild(imgNode);
  itemNode.appendChild(previewNode);
  itemNode.appendChild(titleNode);

  return itemNode;
}

function loadImg ()  {
  loadJSON('data.json', function(data) {
  var nodes = data.goods.map(createItemNode);
  nodes.forEach(function (itemNode) {
    elementsNode.appendChild(itemNode);
    });
  });
}

moreButton.addEventListener('click', loadImg);

var isLoadImg = false;

document.addEventListener('scroll', function () {
  var scrollTop = document.body.scrollTop;
  var winSize = document.documentElement.clientHeight;
  var docSize = document.body.clientHeight;

  if (scrollTop + winSize > docSize - 200 && !isLoadImg) {
    loadImg ();
    isLoadImg = true;
  } else isLoadImg = false;
});
