const boxes = document.querySelectorAll('.wrap>div');
const obj1 = document.querySelector('.obj1');
const obj2 = document.querySelector('.obj2');
const txt = document.querySelector('.txt2');
const obj3 = document.querySelector('.obj3');

const boxes_len = boxes.length;
const positionArray = [];
for (const el of boxes) positionArray.push(el.offsetTop);

positionArray.push(
	boxes[boxes_len - 1].offsetTop + boxes[boxes_len - 1].offsetHeight
);

const customFunction = [
	function (scroll) {
		init();
		obj1.style.transform = `rotate(${45 + scroll / 5}deg)`;
	},
	function (scroll) {
		init();
		let current_scroll = scroll - positionArray[1];
		if (current_scroll >= 600) current_scroll = 600;
		obj2.style.width = current_scroll + 'px';
		txt.style.opacity = `${(current_scroll / 6) * 0.01}`;
	},
	function (scroll) {
		init();
		let current_scroll = scroll - positionArray[2];
		let scale = `scale(${2 - current_scroll / 400})`;
		obj3.style.transform = scale;
		let opacitySTR = 0 + current_scroll / 400;
		obj3.style.opacity = opacitySTR;
	},
];

function init() {
	obj1.style.transform = 'rotate(45deg)';
	obj2.style.width = '0px';
	txt.style.opacity = '0';
	obj3.style.transform = 'scale(2)';
	obj3.style.opacity = '0';
}

window.addEventListener('scroll', () => {
	let scroll = window.scrollY;
	for (let i = 0; i < boxes_len; i++) {
		if (scroll >= positionArray[i] && scroll < positionArray[i + 1]) {
			customFunction[i](scroll);
		}
	}
});
