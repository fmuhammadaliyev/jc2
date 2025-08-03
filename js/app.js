// ====================================
// ============ 1-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 18 dan katta yoki teng bo'lsa, "Siz balog'at yoshidasiz!" deb alert chiqaring, aks holda "Siz hali yoshsiz!" deb alert chiqaring.

// Tushuntirish
// XoвЂ™sh, oвЂ™quvchi, yoshni tekshirish vaqti keldi! Tasavvur qiling, siz kinoteatrga kiryapsiz, lekin faqat katta yoshdagilar uchun film. Yoshni kirit, qara, ichkariga kiritishadimi yoki yoвЂ™qmi? рџ„

// Input: 20
// Output: alert("Siz balog'at yoshidasiz!")
// Input: 15
// Output: alert("Siz hali yoshsiz!")

let age = prompt("Yoshingizni kirirting: ");

if (age >= "18") {
  alert("Siz balog'at yoshidasiz!");
} else {
  alert("Siz hali yoshsiz!");
}

// ====================================
// ============ 2-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini kiritadi. Agar ism bo'sh bo'lsa (""), "Ism kiritmadingiz!" deb alert chiqaring, aks holda "Salom, [ism]!" deb alert chiqaring.

// Tushuntirish
// Ismsiz qanday yashaymiz, doвЂ™stim? рџњ Foydalanuvchi ismini kiritadi, lekin agar u hech narsa yozmasa, uni biroz mazax qilamiz! BoвЂ™sh stringni tekshirish uchun == ishlatamiz.

// Input: "Ali"
// Output: alert("Salom, Ali!")
// Input: ""
// Output: alert("Ism kiritmadingiz!")

let name = prompt("Ismingizni kiriting: ");

if (name == "") {
  console.log("Ism kiritmadingiz!");
} else {
  console.log("Salom,", "Aka", "!");
}

// ====================================
// ============ 3-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son musbat bo'lsa, "Bu musbat son!" deb alert chiqaring, aks holda "Bu manfiy yoki nol!" deb alert chiqaring.

// Tushuntirish
// Sonlar bilan oвЂ™ynaymizmi? рџЋ Musbat sonlarni yaxshi koвЂ™ramiz, lekin manfiy yoki nol boвЂ™lsa ham ularga mehr bilan qaraymiz. > operatorini sinab koвЂ™ramiz!

// Input: 5
// Output: alert("Bu musbat son!")
// Input: -3
// Output: alert("Bu manfiy yoki nol!")

let num = prompt("Son kiriting: ");

if (num == "0") {
  console.log("Bu son 0");
} else if (num > "0") {
  console.log("Bu son musbat");
} else {
  console.log("Bu son manfiy");
}
// ====================================
// ============ 4-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 ga teng bo'lsa, "To'g'ri son!" deb alert chiqaring, aks holda "Boshqa son kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// 10 вЂ“ sehrli son! рџЋ‰ Foydalanuvchi 10 kiritadimi yoki yoвЂ™qmi, tekshiramiz. == bilan tenglikni sinab koвЂ™ring.

// Input: 10
// Output: alert("To'g'ri son!")
// Input: 7
// Output: alert("Boshqa son kiritdingiz!")
let number = prompt("Sexrli son: ");

if (number == "10") {
  console.log("Bu son 10 togri ");
} else if (number > "7") {
} else {
  console.log("Bu son notogri");
}
// ====================================
// ============ 5-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali "ha" yoki "yo'q" deb kiritadi. Agar "ha" kiritilgan bo'lsa, "Ruxsat bor!" deb alert chiqaring, aks holda "Ruxsat yo'q!" deb alert chiqaring.

// Tushuntirish
// Xuddi ota-onangdan ruxsat soвЂ™ragandek! рџ„ "ha" desa, yashaymiz, "yoвЂ™q" desa, xafa boвЂ™lamiz. Stringlarni === bilan tekshir.

// Input: "ha"
// Output: alert("Ruxsat bor!")
// Input: "yo'q"
// Output: alert("Ruxsat yo'q!")
let javob = prompt("ha yoki yoq ");

if (javob === "ha") {
  console.log("ruhsat bor");
} else if (javob === "yoq") {
  console.log("ruhsat yoq");
} else {
  console.log("nomalum");
}
// ====================================
// ============ 6-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta va 100 dan kichik bo'lsa, "Yaxshi diapazon!" deb alert chiqaring, aks holda "Diapazon tashqarisida!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi termometr oвЂ™qishdek! рџЊЎпёЏ 0 va 100 oraligвЂ™ida boвЂ™lsa, hamma narsa zoвЂ™r, aks holda muammo! && operatorini sinab koвЂ™ramiz.

// Input: 50
// Output: alert("Yaxshi diapazon!")
// Input: 150
// Output: alert("Diapazon tashqarisida!")
let harorat = prompt("havo harorati");

if (harorat >= 0 && harorat <= 100) {
  console.log("diapazon ichida");
} else if (harorat >= 101 && harorat <= 1000) {
  console.log("diapazon dan tashqarida");
} else {
  console.log("nomalum");
}

// ====================================
// ============ 7-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 5 dan katta bo'lsa, "Uzoq so'z!" deb alert chiqaring, aks holda "Qisqa so'z!" deb alert chiqaring.

// Tushuntirish
// SoвЂ™zlarning uzunligini oвЂ™lchaymiz! рџ“Џ Agar soвЂ™z uzun boвЂ™lsa, faxrlanamiz, qisqa boвЂ™lsa, qisqartirib yubormaymiz! length va > ishlatamiz.

// Input: "salom"
// Output: alert("Qisqa so'z!")
// Input: "javascript"
// Output: alert("Uzoq so'z!")

let soz = prompt("soz kiriting");

if (soz.length < 5) {
  console.log("qisqa soz");
} else if (soz.length > 6) {
  console.log("Uzun soz");
} else {
  console.log("nomalum");
}
// ====================================
// ============ 8-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son juft bo'lsa, "Juft son!" deb alert chiqaring, aks holda "Toq son!" deb alert chiqaring.

// Tushuntirish
// Juft yoki toq вЂ“ bu sonlar olamidagi klassik jang! вљ”пёЏ Sonni 2 ga boвЂ™lib, qoldiqni tekshirish uchun % va == ishlatamiz.

// Input: 4
// Output: alert("Juft son!")
// Input: 7

let son = prompt(" bolinuvchi son yozing");

son = Number(son);

if (son % 2 === 0) {
  console.log("juft son");
} else {
  console.log("toq son");
}

// ====================================
// ============ 9-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lsa, "Nol kiritdingiz!" deb alert chiqaring, aks holda "Nol emas!" deb alert chiqaring.

// Tushuntirish
// Nol вЂ“ bu xuddi boвЂ™sh choвЂ™ntakdek! рџ… Uni alohida tekshirish kerak. === bilan aniq tenglikni sinab koвЂ™ramiz.

// Input: 0
// Output: alert("Nol kiritdingiz!")
// Input: 5
// Output: alert("Nol emas!")

let raqam = prompt("raqam yozing");

raqam = Number(raqam);

if (raqam === 0) {
  console.log("Nol kiritdingiz");
} else {
  console.log("Nol emas");
}

// ====================================
// ============ 10-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "salom" bo'lsa, "Salom, dunyo!" deb alert chiqaring, aks holda "Boshqa so'z kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// "Salom" desa, dunyoni quchoqlaymiz! рџЊЌ Aks holda, biroz xafa boвЂ™lamiz. === bilan soвЂ™zni aniq tekshir.

// Input: "salom"
// Output: alert("Salom, dunyo!")
// Input: "hello"
// Output: alert("Boshqa so'z kiritdingiz!")

let salom = prompt("Salom, desa dunyoni quchoqlaymiz");

if (salom === "salom") {
  console.log("Salom dunyo");
} else if ("gdf") {
  console.log("Boshqa so'z kiritdingiz");
}

// ====================================
// ============ 11-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa, "Birinchi son katta!" deb alert chiqaring, aks holda "Ikkichi son katta yoki teng!" deb alert chiqaring.

// Tushuntirish
// Sonlar oвЂ™rtasida musobaqa! рџЏ† Birinchi son ikkinchisini yengadimi, yoki yoвЂ™qmi? > bilan solishtiramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta!")
// Input: 3, 7
// Output: alert("Ikkichi son katta yoki teng!")

let birinchison = prompt("Birinchi sonni kiriting: ");
let ikkinchison = prompt("Ikkinchi sonni kiriting: ");

if (birinchison > ikkinchison) {
  console.log("Birinchi son katta!");
} else {
  console.log("Ikkichi son katta yoki teng!");
}

// ====================================
// ============ 12-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va ismini kiritadi. Agar yosh 18 dan katta va ism "Ali" bo'lsa, "Xush kelibsiz, Ali!" deb alert chiqaring, aks holda "Kirish taqiqlanadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi VIP klubga kirishdek! рџЋ Faqat Ali va 18+ yoshdagilar uchun. && operatorini sinab koвЂ™ramiz.

// Input: 20, "Ali"
// Output: alert("Xush kelibsiz, Ali!")
// Input: 15, "Vali"

let yosh = prompt("Yoshingizni kiriting:");
let ism = prompt("Ismingizni kiriting:");
yosh = Number(yosh);
if (yosh >= 18 && ism === "Ali") {
  console.log("Xush kelibsiz, Ali!");
} else {
  console.log("Kirish taqiqlanadi!");
}

// ====================================
// ============ 13-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa, "Chegaradan tashqarida!" deb alert chiqaring, aks holda "Chegara ichida!" deb alert chiqaring.

// Tushuntirish
// Sonlar chegarada yashaydi! рџљ§ 10 dan kichik yoki 100 dan katta boвЂ™lsa, ularni qaytarib yuboramiz. || operatorini sinab koвЂ™ramiz.

// Input: 5
// Output: alert("Chegaradan tashqarida!")
// Input: 50

let soon = prompt("birorbir sonni kiritng");

if (soon >= 0 && soon <= 100) {
  console.log("chegarani ichida");
} else if (soon >= 101 && soon <= 1000) {
  console.log("chegardan tashqarida");
} else {
  console.log("nomalum");
}

// ====================================
// ============ 14-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z bo'sh bo'lmasa ("" emas), "So'z kiritdingiz!" deb alert chiqaring, aks holda "Hech narsa kiritmadingiz!" deb alert chiqaring.

// Tushuntirish
// BoвЂ™sh joyni yoqtirmaymiz! рџ¤ Foydalanuvchi biror narsa yozsa, quvonamiz, aks holda biroz ranjimaymiz. ! operatorini sinab koвЂ™ramiz.

// Input: "test"
// Output: alert("So'z kiritdingiz!")
// Input: ""
// Output: alert("Hech narsa kiritmadingiz!")

let media = prompt("Iltimos, biror so'z kiriting:");

if (media !== "") {
  console.log("So'z kiritdingiz!");
} else {
  console.log("Hech narsa kiritmadingiz!");
}

// ====================================
// ============ 15-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar sonlar teng bo'lsa, "Sonlar teng!" deb alert chiqaring, aks holda "Sonlar teng emas!" deb alert chiqaring.

// Tushuntirish
// Sonlar oвЂ™rtasida tenglik bormi? рџ¤ќ == bilan tekshirib, doвЂ™stlikni mustahkamlaymiz!

// Input: 5, 5
// Output: alert("Sonlar teng!")
// Input: 5, 6
// Output: alert("Sonlar teng emas!")

let arra = prompt("1- sonni kiriting:");
let bolta = prompt("2- sonni kiriting:");

bolta = Number(bolta);
arra = Number(arra);
if (arra == bolta) {
  console.log("Sonlar teng!");
} else {
  console.log("Sonlar teng emas!");
}

// ====================================
// ============ 16-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 50 dan katta yoki teng bo'lsa va juft bo'lsa, "Katta juft son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Katta va juft sonlar вЂ“ bu olamning yulduzlari! рџЊџ && va % operatorlarini birlashtirib, sinab koвЂ™ramiz.

// Input: 60
// Output: alert("Katta juft son!")
// Input: 45
// Output: alert("Boshqa son!")

let krishna = prompt("Bir son kiriting:");

krishna = Number(krishna);

if (krishna >= 50 && krishna % 2 == 0) {
  console.log("Katta juft son!");
} else {
  console.log("Boshqa son!");
}

// ====================================
// ============ 17-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "javascript" yoki "coding" bo'lsa, "Siz dasturchisiz!" deb alert chiqaring, aks holda "Boshqa so'z!" deb alert chiqaring.

// Tushuntirish
// Dasturchilar uchun maxsus salom! рџ‘ЁвЂЌрџ’» || operatorini ishlatib, sevimli soвЂ™zlarimizni tekshiramiz.

// Input: "javascript"
// Output: alert("Siz dasturchisiz!")
// Input: "hello"
// Output: alert("Boshqa so'z!")

let sen = prompt(" Yozingchi:");

if (sen === "javascript" || sen === "coding") {
  console.log("Siz dasturchisiz!");
} else {
  console.log("Boshqa so'z!");
}

// ====================================
// ============ 18-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa, "Son nol emas!" deb alert chiqaring, aks holda "Son nol!" deb alert chiqaring.

// Tushuntirish
// Nol вЂ“ bu xuddi boвЂ™sh quti! рџ“¦ ! operatorini ishlatib, nol yoki nolni tekshiramiz.

// Input: 10
// Output: alert("Son nol emas!")
// Input: 0
// Output: alert("Son nol!")

let men = prompt(" son kiritingchi qori:");

men = Number(men);

if (men !== 0) {
  console.log("Son nol emas!");
} else {
  console.log("Son nol!");
}

// ====================================
// ============ 19-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 13 dan katta va 19 dan kichik bo'lsa, "Siz o'smirsiz!" deb alert chiqaring, aks holda "O'smir emassiz!" deb alert chiqaring.

// Tushuntirish
// OвЂ™smirlik вЂ“ bu hayotning eng qiziq davri! рџњ && bilan yoshni chegaralaymiz.

// Input: 15
// Output: alert("Siz o'smirsiz!")
// Input: 20
// Output: alert("O'smir emassiz!")

let dunyo = prompt("Yoshingizni kiriting aka yoki opa :");
dunyo = Number(dunyo);

if (dunyo > 13 && dunyo < 19) {
  console.log("Siz o'smirsiz!");
} else {
  console.log("O'smir emassiz!");
}

// ====================================
// ============ 20-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 3 dan kichik bo'lsa yoki bo'sh bo'lsa, "So'z juda qisqa!" deb alert chiqaring, aks holda "Yaxshi so'z!" deb alert chiqaring.

// Tushuntirish
// Qisqa soвЂ™zlarni yoqtirmaymiz! рџ¤ || va length bilan soвЂ™zni sinab koвЂ™ramiz.

// Input: "hi"
// Output: alert("So'z juda qisqa!")
// Input: "hello"
// Output: alert("Yaxshi so'z!")

let bosh = prompt("gap yozing:");

if (bosh.length < 3 || bosh === "") {
  console.log("So'z juda qisqa!");
} else {
  console.log("Yaxshi so'z!");
}

// ====================================
// ============ 21-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa va juft bo'lsa, "Birinchi son katta va juft!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi musobaqada gвЂ™olibni aniqlashdek! рџЏ… && va % bilan birinchi sonni sinab koвЂ™ramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta va juft!")
// Input: 7, 3
// Output: alert("Shart bajarilmadi!")

let u = prompt("1- son:");
let n = prompt("2- son:");

if (u > n && u % 2 === 0) {
  console.log("Birinchi son katta va juft!");
} else {
  console.log("Shart bajarilmadi!");
}

// ====================================
// ============ 22-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va "erkak" yoki "ayol" deb jinsini kiritadi. Agar yosh 18 dan katta bo'lsa va jins "erkak" bo'lsa, "Siz armiyaga borasiz!" deb alert chiqaring, aks holda "Armiyaga bormaysiz!" deb alert chiqaring.

// Tushuntirish
// Armiyaga chaqiruv vaqti! рџ… Faqat 18+ erkaklar uchun. && bilan shartlarni birlashtiramiz.

// Input: 20, "erkak"
// Output: alert("Siz armiyaga borasiz!")
// Input: 16, "ayol"
// Output: alert("Armiyaga bormaysiz!")

let yoshiz = prompt("Yoshingiz:");
let jins = prompt("Jinsingiz (erkak/ayol):");

yoshiz = Number(yosh);

if (yoshiz > 18 && jins === "erkak") {
  console.log("Siz armiyaga borasiz!");
} else {
  console.log("Armiyaga bormaysiz!");
}

// ====================================
// ============ 23-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa va toq bo'lsa, "Chegaradagi toq son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Toq sonlar chegarada sayr qilmoqda! рџљ¶ || va % bilan ularni ushlaymiz.

// Input: 5
// Output: alert("Chegaradagi toq son!")
// Input: 50
// Output: alert("Boshqa son!")

let chegara = prompt("Son yozing:");

chegara = Number(chegara);

if (chegara < 10 || (chegara > 100 && chegara % 2 === 1)) {
  console.log("Chegaradagi toq son!");
} else {
  console.log("Boshqa son!");
}

// ====================================
// ============ 24-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "admin" bo'lmasa, "Siz admin emassiz!" deb alert chiqaring, aks holda "Xush kelibsiz, admin!" deb alert chiqaring.

// Tushuntirish
// Adminlik вЂ“ bu mas'uliyat! рџЋ ! operatorini ishlatib, admin yoki yoвЂ™qligini tekshiramiz.

// Input: "admin"
// Output: alert("Xush kelibsiz, admin!")
// Input: "user"
// Output: alert("Siz admin emassiz!")

let foydalanuvchi = prompt("Login  kiriting:");

if (foydalanuvchi !== "admin") {
  console.log("Siz admin emassiz!");
} else {
  console.log("Xush kelibsiz, admin!");
}

// ====================================
// ============ 25-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa yoki teng bo'lsa va birinchi son musbat bo'lsa, "Birinchi son mos keladi!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Birinchi son oвЂ™zini koвЂ™rsatmoqchi! рџЏ || va > bilan uning qobiliyatini sinaymiz.

// Input: 10, 5
// Output: alert("Birinchi son mos keladi!")
// Input: -3, 5
// Output: alert("Shart bajarilmadi!")

let havo = prompt("Birinchi raqam:");
let hayo = prompt("Ikkinchi raqam:");

havo = Number(havo);
hayo = Number(hayo);

if (havo >= hayo && havo > 0) {
  console.log("Birinchi son mos keladi!");
} else {
  console.log("Shart bajarilmadi!");
}

// ====================================
// ============ 26-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta bo'lsa, lekin 10 dan kichik bo'lsa yoki 100 dan katta bo'lsa, lekin 200 dan kichik bo'lsa, "Maxsus diapazon!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar maxsus zonada yashaydi! рџЏќпёЏ && va || operatorlarini aralashtirib, chegaralarni tekshiramiz.

// Input: 5
// Output: alert("Maxsus diapazon!")
// Input: 50
// Output: alert("Oddiy son!")

let sir = prompt("Bir son kiriting:");

sir = Number(sir);

if ((sir > 0 && sir < 10) || (sir > 100 && sir < 200)) {
  console.log("Maxsus diapazon!");
} else {
  console.log("Oddiy son!");
}

// ====================================
// ============ 27-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini va yoshini kiritadi. Agar ism bo'sh bo'lmasa va yosh 18 dan kichik bo'lsa, "Yoshsin, [ism]!" deb alert chiqaring, aks holda "Boshqa holat!" deb alert chiqaring.

// Tushuntirish
// Yoshlik вЂ“ bu ajoyib vaqt! рџ„ && va ! bilan ism va yoshni tekshiramiz.

// Input: "Ali", 15
// Output: alert("Yoshsin, Ali!")
// Input: "", 20
// Output: alert("Boshqa holat!")

let ismm = prompt("Ismingizni kiriting:");
let yoshsh = prompt("Yoshingizni kiriting:");

yoshsh = Number(yoshsh);

if (ism !== "" && yoshsh < 18) {
  console.log("Yoshsin, " + ismm + "!");
} else {
  console.log("Boshqa holat!");
}
// ====================================
// ============ 28-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa va juft bo'lsa, yoki son 100 dan katta bo'lsa, "Maxsus son!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar oвЂ™ziga xos! рџЊџ ||, && va % bilan ularni ajratib olamiz.

// Input: 120
// Output: alert("Maxsus son!")
// Input: 7
// Output: alert("Oddiy son!")

let sholi = prompt("Bir son kiriting:");

if ((sholi !== 0 && sholi % 2 === 0) || sholi > 100) {
  console.log("Maxsus son!");
} else {
  console.log("Oddiy son!");
}

// ====================================
// ============ 29-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita so'z kiritadi. Agar birinchi so'z ikkinchisidan uzun bo'lsa yoki birinchi so'z "salom" bo'lsa, "Birinchi so'z g'olib!" deb alert chiqaring, aks holda "Ikkichi so'z g'olib!" deb alert chiqaring.

// Tushuntirish
// SoвЂ™zlar oвЂ™rtasida musobaqa! рџ—ЈпёЏ || va length bilan gвЂ™olibni aniqlaymiz.

// Input: "salom", "hi"
// Output: alert("Birinchi so'z g'olib!")
// Input: "test", "hello"
// Output: alert("Ikkichi so'z g'olib!")

let sozla = prompt("Birinchi so'z:");
let sozlama = prompt("Ikkinchi so'z:");

if (sozla.length > sozlama.length || sozla === "salom") {
  console.log("Birinchi so'z g'olib!");
} else {
  console.log("Ikkichi so'z g'olib!");
}

// ====================================
// ============ 30-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini, ismini va "ha" yoki "yo'q" deb javob kiritadi. Agar yosh 18 dan katta bo'lsa, ism bo'sh bo'lmasa va javob "ha" bo'lsa, "Siz superstarsiz, [ism]!" deb alert chiqaring, aks holda "Superstar emassiz!" deb alert chiqaring.

// Tushuntirish
// Superstar boвЂ™lish oson emas! рџЊџ && va ! bilan barcha shartlarni tekshiramiz. Bu eng qiyin masala, lekin siz buni uddalaysiz!

// Input: 20, "Ali", "ha"
// Output: alert("Siz superstarsiz, Ali!")
// Input: 15, "Vali", "yo'q"
// Output: alert("Superstar emassiz!")
let yoosh = prompt("Yoshingiz:");
let issm = prompt("Ismingiz:");
let javvob = prompt("Siz rozimisiz? (ha/yo'q)");

yoosh = Number(yoosh);

if (yoosh > 18 && issm !== "" && javvob === "ha") {
  console.log("Siz superstarsiz, " + ism + "!");
} else {
  console.log("Superstar emassiz!");
}
