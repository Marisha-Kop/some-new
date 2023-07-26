const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const motiv =[
    "“Найскладніше почати діяти, все інше залежить тільки від наполегливості.”, – Амелія Ергарт.",
    "“Життя – це те, що з тобою відбувається, поки ти будуєш плани.”, Джон Леннон.",
    "“Через 20 років ви будете більше розчаровані тими речами, які ви не робили, ніж тими, які ви зробили. Тому відчальте від тихої пристані. Відчуйте попутний вітер у вашому вітрилі. Рухайтеся вперед, дійте, відкривайте!”, – Марк Твен.",
    "“Ваш час обмежений, не витрачайте його, живучи чужим життям.”, – Стів Джобс.",
    "“Ви ніколи не перетнете океан, якщо не наберетеся мужності втратити берег з виду.”, – Христофор Колумб.",
    "“Найчастіше говорять, що мотивації вистачає ненадовго. Але те ж саме відбувається і з освіжаючим душем, тому і рекомендують його приймати щодня.”, – Зіг Зіглар.",
    "“Є тільки один спосіб уникнути критики: нічого не робіть, нічого не говоріть і будьте ніким. “, – Аристотель.",
    "“Людина, якою вам судилося стати – це тільки та людина, якою ви самі вирішите стати.”, – Ральф Голдо Емерсон.",
    " “Ідіть впевнено у напрямку до мрії. Живіть тим життям, яке ви самі собі придумали.”, – Генрі Девід Торо.",
    "“Коли я звільняюся від того, хто я є, я стаю тим, ким я можу бути”, – Лао Цзи.",
    "“Кращий момент, щоб посадити дерево, був двадцять років тому. Наступний – сьогодні”, – Китайське прислів’я.",
    " “Будь собою, інші ролі зайняті.”, – Оскар Уайльд.",
    "“Люди забудуть, що ти говорив, забудуть, що ти робив, але ніколи не забудуть, що ти змусив їх відчути.”, – Майя Енджелоу.",
    " “Не важливо, як повільно ти просуваєшся, головне, що ти не зупиняєшся”, – Конфуцій.",
    "“Запам’ятайте, ніхто не може змусити вас почувати себе неповноцінним без вашого на те згоди.”, – Елеонор Рузвельт.",
    "“Ти можеш говорити, що у тебе погана генетика, поганий обмін речовин, а можеш просто підняти свою дупу з дивана і почати працювати над собою, поставити собі мету і вірити в себе. У цьому випадку ти обов’язково досягнеш успіху.”, – Арнольд Шварценеггер.",
    "“Життя вимірюється не тим, скільки в ньому років, а тим, скільки в цих роках справжнього життя.”, – Авраам Лінкольн.",
    "“Ніхто не зможе побудувати для Вас міст, на якому Ви повинні перетнути потік життя, ніхто, крім Вас самих.”, – Фрідріх Ніцше."
]
button.addEventListener("click", ()=>{
    let random = motiv[Math.floor(Math.random()*motiv.length)];
    par.style.display ="block";
    par.textContent=random;
})