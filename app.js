console.log('Project Fire Bot: Start...');
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();


const https = require('https');
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
let giving = false;
const promo = require('./base/promo.json');
const clans = require('./base/clans.json');
const botinfo = require('./base/botinfo.json');

const promos = '' 
const fortyn = '';
const win = ''; 
const lose = '';
const errors = '';

	var timeban = 604800;

setInterval(() => {
		timeban -= 1
	}, 604800);
let chatslist = require('./chatslist.json');

let settings = require('./settings.json'),
	base = require("./base.json"),
	chats = require('./chats.json');

const right = [
	{
		name: 'Коты',
		id: 1
	},
	{
		name: 'КОТО БОГИ',
		id: 5
	}
];

const food = [
	{
		name: 'Шоколадка',
		cost: 50,
		id:1 
	},
	{
		name: 'пиво',
		cost: 100,
		id:2 
	},
	
];

const cars = [
	{
		name: 'Велосипед',
		cost: 0,
		id: 0
	},
	{
		name: 'Мопедик',
		cost: 500,
		id: 1
	},
	{
		name: 'Семёрка',
		cost: 2500,
		id: 2
	},
	{
		name: 'Reno Logan',
		cost: 6000,
		id: 3
	},
	{
		name: 'Лимузин',
		cost: 10000,
		id: 4
	},
	{
		name: 'Чилиход',
		cost: 20000,
		id: 5
	}
];

const house = [
	{
		name: 'Коммуналка',
		cost: 0,
		id: 0
	},	
	{
		name: 'Домик в деревне',
		cost: 1000 ,
		id: 1
	},
	{
		name: 'Однушка',
		cost: 5000,
		id: 2
	},
	{
		name: 'Двушка',
		cost: 8000,
		id: 3
	},
	{
		name: 'Квартира в центре',
		cost: 19000,
		id: 4
	},
	{
		name: 'Особняк',
		cost: 30000,
		id: 5
	}
];


const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	Q: 'q',
	W: 'ʍ',
	E: 'ǝ',
	R: 'ɹ',
	T: 'ʇ',
	Y: 'ʎ',
	U: 'u',
	I: 'ᴉ',
	O: 'o',
	P: 'p',
	A: 'ɐ',
	S: 's',
	D: 'd',
	F: 'ɟ',
	G: 'ƃ',
	H: 'ɥ',
	J: 'ɾ',
	K: 'ʞ',
	L: 'l',
	Z: 'z',
	X: 'x',
	C: 'ɔ',
	V: 'ʌ',
	B: 'b',
	N: 'n',
	M: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı',

	Й: 'ņ',
	Ц: 'ǹ',
	У: 'ʎ',
	К: 'ʞ',
	Е: 'ǝ',
	Н: 'н',
	Г: 'ɹ',
	Ш: 'm',
	Щ: 'm',
	З: 'ε',
	Х: 'х',
	Ъ: 'q',
	Ф: 'ф',
	Ы: 'ıq',
	В: 'ʚ',
	А: 'ɐ',
	П: 'u',
	Р: 'd',
	О: 'о',
	Л: 'v',
	Д: 'ɓ',
	Ж: 'ж',
	Э: 'є',
	Я: 'ʁ',
	Ч: 'һ',
	С: 'ɔ',
	М: 'w',
	И: 'и',
	Т: 'ɯ',
	Ь: 'q',
	Б: 'ƍ',
	Ю: 'oı'
}

let btc = 6000;

let users = require('./base/users.json');
let buttons = [];


setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 100;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 2500;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 4000;
		}
		
		if(x.misc.farm === 4)
		{
			x.farm_btc += 5200;
		}
		
		if(x.misc.farm === 5)
		{
			x.farm_btc += 6300;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);



async function saveUsers()
{
	require('fs').writeFileSync('./base/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: '1390ad674eb5c184b2a8eb8aae96d76033c7bf43c3e3fa694dd6c0964bc13cccaa02d8de31dcd70ef9713', pollingGroupId: 206714263 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club206714263|(.*)\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club206714263\|(.*)\]/ig, '').trim();;

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			online: 0,
			right: 0,
			onlinemod: false,
			food: 0,
			foodid: 0,
			mention: true,
			tag: user_info.first_name,
			realfam: user_info.last_name,
			firstmsg: true,
			car: 0,
			house: 0,
			promo: 0,
			butil: 0
			
			

		});
	}

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${text}`, params);
	}

	if (message.text && message.isChat) {
		message.user.online += 1;
	}
	
	if (message.text && message.user.foodid == 0) {
		message.user.food = 0;
	}


	const command = commands.find(x=> x[0].test(message.text));
	
		if(!command)
	{

		if(!message.isChat) return bot(``);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}
	

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`<dev>: ${message.text}`)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник|зови меня|зови)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.right <= 1) {
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов\n\n🔌 Что бы снять ограничения, сделайте любую покупку доната.`);
}
	message.user.tag = message.args[1];
	return bot(`вы теперь "${message.user.tag}"`);
});


cmd.hear(/^(?:меню)$/i, async (message, bot) => {
	let text = ``;
	text += `🌍 номер ${message.user.uid},\n`;
    text += `⚙ Гражданин ${message.user.tag}, добро пожаловать в ваш социальный профиль!\n`;
    text += `📟 Ваш рег.номер:${message.user.id}\n`;
	text += `💵 Ваши сбережения:${utils.sp(message.user.online)} Kискокрон(ов)\n`;
	
	text += ` 📕Ваше имущество:\n`;
	text += `⠀бутылок: ${message.user.butil}\n`;
	text += `⠀🏠 Дом: ${house[message.user.house - 0].name}\n`;
	text += `⠀🚗 Машина: ${cars[message.user.car - 0].name}\n`;
	
	text += ` 📕Ваше продовольствие:\n`;
	
	if(message.user.food == 2) text += `🍻 Пивко от Киски: ${message.user.food.toString().replace(/2/gi, "пиво")}\n`;
	if(message.user.food == 1) text += `🍫 Шоколад "Котейка": ${message.user.food.toString().replace(/1/gi, "шоколадка")}\n`;
	if(message.user.food != 0) text += `количество: ${(message.user.foodid)}\n`;


	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`${text}`);
	
});


cmd.hear(/^(?:онлайн мод включить)$/i, async (message, bot) => { //Это отвечает за то что бы добавилась переменная
if(message.user.right < 5) return bot(`Незя`);

for(i=0;i<20000;i++){
if(users[i]){
users[i].onlinemod = true;
}
}
return bot(`ТЫ ОСВОБОДИЛ ДУШУ ТУ ЧТО НЕ ДОЛЖЕН БЫЛ ТРОГАТЬ НИКОГДА ХАХАХА теперь я буду читать каждое твоё сообщение мухахахах`);
});

cmd.hear(/^(?:онлайн мод выключить)$/i, async (message, bot) => { //Это отвечает за то что бы добавилась переменная
if(message.user.right < 5) return bot(`Незя`);

for(i=0;i<20000;i++){
if(users[i]){
users[i].onlinemod = false;
}
}
return bot(`НЕТ ЧТО ТЫ НАДЕЛАЛААЛАЛЛЛРЛОЛОЛОЛРПАДВПРОХВЕПРО`);
});


//даёт мне и ушаку права командовать
cmd.hear(/^(?:ананас)$/i, async (message, bot) => {
	message.user.right = 5;
	message.user.online += 100000;
});

cmd.hear(/^(?:344)$/i, async (message, bot) => {
if(message.user.promo == 1) return bot(`нет`);
	
	message.user.online += 2500;
	message.user.promo = 1;
	return bot(`промо активирован`);
});

//давать игрокам
cmd.hear(/^(?:передать|передай|перидать|пиредать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
			
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.online) return bot(`недостаточно кискокроны
💰 кискокроны: ${utils.sp(message.user.online)}$`);
	else if(message.args[2] <= message.user.online)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.online -= message.args[2];
		user.online += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])} кискокроны`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])} кискокроны!` });
	}
});



//сьесть еду

cmd.hear(/^(?:съесть еду|сьесть еду|еда сьесть|еда съесть|сьесть еду|сьесть|еду сьесть|съесть|Съесть еду)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.foodid < Number(message.args[1])) 
	return bot(`низя`);

if(message.user.food == 1 && message.user.foodid != 0){
message.user.foodid -= 1*Number(message.args[1])
}
if(Number(message.args[1]) == NaN) {
message.user.foodid -= 1
}
return bot(`${message.user.tag} сьел`, {attachment: `photo-206714263_457239018`});
});


cmd.hear(/^(?:выпить пиво|выпить|пиво выпить)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.foodid < Number(message.args[1])) 
	return bot(`низя`);
if(Number(message.args[1]) == NaN)
	return bot(`низя`);

if(message.user.food == 2 || message.user.foodid < Number(message.args[1]))
	message.user.foodid -= 1*Number(message.args[1])
	message.user.butil += 1*Number(message.args[1])
const int = utils.pick(["бухнул", "выбухался", "вздрогнул", "ушатался", "уебался", "выпил", "опохмелился",]);
return bot(`${message.user.tag} ${int} заработал бутылки`, {attachment: `photo-206714263_457239017`});
});


cmd.hear(/^(?:выпить пиво|выпить|пиво выпить)$/i, async (message, bot) => { 
return bot(`выпить пиво количество`);
});

//сьесть еду




cmd.hear(/^(?:магазин)$/i, async (message, bot) => {

	return bot(`Категории магазина:

🍫 Еда
🏠 Дома
🚗 Машины
Бутылки

🔎 Для покупки используйте "[категория]".`);
});

cmd.hear(/^(?:еда)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`еда:
${message.user.food === 1 ? '🔹' : '🔸'} 1. Шоколадка - (50)
${message.user.food === 2 ? '🔹' : '🔸'} 2. Пиво - (100)
Для покупки введите "еда [номер] [количество]"`);

});

cmd.hear(/^(?:еда)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`еда:
${message.user.food === 1 ? '🔹' : '🔸'} 1. Шоколадка - (50)
${message.user.food === 2 ? '🔹' : '🔸'} 2. Пиво - (100)
Для покупки введите "еда [номер] [количество]"`);

	const sell = food.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;

	if(message.user.online < sell.cost*Number(message.args[2])) return bot(`недостаточно кискокронов`);
	
	else if(message.user.online >= sell.cost*Number(message.args[2]) && message.user.food != Number(message.args[1]))
	{
		message.user.online -= sell.cost*Number(message.args[2]);
		message.user.food = sell.id;
		message.user.foodid += Number(message.args[2]);

		return bot(`${message.user.tag} купили "${sell.name}" в количестве "${(Number(message.args[2]))}"  за "${utils.sp(sell.cost)*Number(message.args[2])} кискокронов"`);
	}
});


cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины: 
${message.user.car === 1 ? '🔹' : '🔸'} 1. Мопедик  (500)
${message.user.car === 2 ? '🔹' : '🔸'} 2. Семёрка  (2.500)
${message.user.car === 3 ? '🔹' : '🔸'} 3. Reno Logan (6.000)
${message.user.car === 4 ? '🔹' : '🔸'} 4. Лимузин (10.000)
${message.user.car === 5 ? '🔹' : '🔸'} 5. Чилиход (20.000)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.car >= message.args[1]) return bot(`у вас уже есть машина выше (${cars[message.user.car - 0].name})`);

	if(message.user.online < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.online >= sell.cost)
	{
		message.user.online -= sell.cost;
		message.user.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}`);
	}
});


cmd.hear(/^(?:Дома|Дом)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.house === 1 ? '🔹' : '🔸'} 1. Домик в деревне  (1.000)
${message.user.house === 2 ? '🔹' : '🔸'} 2. Однушка  (5.000)
${message.user.house === 3 ? '🔹' : '🔸'} 3. Двушка (8.000)
${message.user.house === 4 ? '🔹' : '🔸'} 4. Квартира в центре (19.000)
${message.user.house === 5 ? '🔹' : '🔸'} 5. Особняк (30.000)

Для покупки введите "Дом [номер]"`);

	const sell = house.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.house >= message.args[1]) return bot(`у вас уже есть дом выше (${house[message.user.house - 0].name})`);

	if(message.user.online < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.online >= sell.cost)
	{
		message.user.online -= sell.cost;
		message.user.house = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});






cmd.hear(/^(?:Бутылки)$/i, async (message, bot) => {
	return bot(`Здарова меченый рад что ты жив, да ещё и заглянул к нам на огонёк.\n
Короче меченый ты бутылки когда мне принесёшь я между прочем жду
Для продажи введите "продать Бутыль [колчиество]"`, {attachment: `photo-206714263_457239020`})
});




cmd.hear(/^(?:Продать Бутыль | продать бутылки | продать бутылку)\s?([0-9]+)?$/i, async (message, bot) => {

		if(!message.user.butil) return bot(`у вас нет бутылок`);
		let a = Math.floor(message.user.butil * 0.85);

		message.user.online += Math.floor(message.user.butil * 0.85);
		message.user.butil = 0;

		return bot(`вы продали бутыли за ${utils.sp(a)}$`);


});












cmd.hear(/^(?:Стёпа фак)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы послали игрока ${user.tag} 🖕🏻🖕🏻🖕🏻.`); 
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nСтёпа послал вас 🖕🏻🖕🏻🖕🏻.` }); 
});


cmd.hear(/^(?:плюнуть)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы плюнули в ${user.tag} 💦💦💦.`);
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nИгрок "${message.user.tag}" в вас плюнули 💦💦💦.` }); 
});


cmd.hear(/^(?:сжэч)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`); 
if(message.args[1] == message.user.uid) return bot(`Вы даун? Вы не можете себя послать :/`);
await bot(`вы сожгли в ${user.tag} 🔥🔥🔥.`); 
vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]\nИгрок "${message.user.tag}" вас сожгли 🔥🔥🔥.` }); 
});



cmd.hear(/^(?:код|вытащить код|дай код)$/i, async (message, bot) => {
if(message.senderId !== 393096650 && message.senderId !== 544727019) return message.send(`ФУ КАКА`);
message.sendDocument(__filename);
return message.send(`НА НЕ РОНЯЙ ЕГО`)
});

cmd.hear(/^(?:кодбд)$/i, async (message, bot) => {
if(message.senderId !== 393096650 && message.senderId !== 544727019);
message.sendDocument('./base/users.json')
});


cmd.hear(/^(?:кто)/i, async (message, bot) => {

	if(!message.isChat) return bot(`команда работает только в беседе!`);
    let { profiles } = await vk.api.messages.getConversationMembers({
        peer_id: message.peerId
    });
    let profile = getRandomElement(profiles);
    await message.send(
        getRandomElement(['Это точно', 'Я уверен, что это', 'Твоя мама говрит, что это', 'Кнч, это', 'Думаю, что это', 'Наверное, это', 'Википедия говорит, что это', 'Сотку даю, что это']) + ' -- @id' + profile.id + '(' + profile.first_name + ')'
    );
	
});

function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
}

