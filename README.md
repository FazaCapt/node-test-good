Silabus:
1. Section Intro 1:03
2. Mocha and Basic Testing 16:41
3. Watch and Auto Restart Tests 4:03
4. Using an Assertion Library 19:58 'https://www.npmjs.com/package/expect'
5. Testing Asynchronous Code 11:25
6. Testing Express Applications: Part I 3:16
7. Testing Express Applications: Part II 19:12
8. Organizing Test With describe() 6:44
9. Test Spies 

install:
1. npm install mocha@4.3.1 --save-dev 'https://www.npmjs.com/package/mocha'
2. npm install expect --save-dev 'https://github.com/mjackson/expect'
3. npm install express --save 
4. npm install supertest 'https://www.npmjs.com/package/supertest'


Penjelasan: 
1. Mocha 'http://mochajs.org/'
    - kerangka uji JavaScript kaya fitur yang berjalan di Node.js dan di browser, membuat pengujian asinkron sederhana dan menyenangkan.
    - Tes Mocha dijalankan secara serial, memungkinkan pelaporan yang fleksibel dan akurat, sambil memetakan pengecualian yang tidak tertangkap pada kasus uji yang benar. 
    - Diselenggarakan di GitHub.
    - 'https://mochajs.org/#installation' => bila ingin melihat documentasi. lihat paling bawah.
2. Expect 
    - memungkinkan Anda menulis pernyataan yang lebih baik.
    - Bila Anda menggunakan expect, Anda menulis pernyataan serupa dengan bagaimana Anda akan mengatakannya, mis. "Saya expect nilai ini sama dengan 3" atau "Saya expect array ini berisi 3". 
    - Ketika Anda menulis pernyataan dengan cara ini, Anda tidak perlu mengingat urutan argumen aktual dan yang diharapkan pada fungsi seperti assert.equal, yang membantu Anda menulis tes yang lebih baik.
    - Anda bisa memikirkan expect sebagai alternatif yang lebih kompak untuk Chai atau Sinon.JS, hanya tanpa situs web yang cantik.
3. TimeSetOut Mocha ada aturan mainnya lihat disini 'https://mochajs.org/#timeouts'
4. Spies
    - Diharapkan juga mencakup kemampuan untuk membuat fungsi mata-mata yang dapat melacak panggilan yang dilakukan ke fungsi lain dan membuat berbagai asersi berdasarkan argumen dan konteks yang digunakan.
5. Rewire
    - Rewire menambahkan setter khusus dan pengambil modul sehingga Anda dapat memodifikasi perilaku mereka untuk pengujian unit yang lebih baik. 
    - Kamu boleh Menyuntikkan mengolok-olok untuk modul lain atau global seperti proses
     Periksa variabel pribadi Mengesampingkan variabel dalam modul
    - Rewire tidak memuat file dan eval isinya untuk meniru mekanisme require node.
    - Sebenarnya menggunakan node sendiri perlu memuat modul. 
    - Dengan demikian, modul Anda berperilaku sama persis di lingkungan pengujian Anda seperti dalam keadaan biasa (kecuali modifikasi Anda).
    - Harap diperhatikan: Versi rewire saat ini tidak kompatibel dengan const atau babel. Lihat Keterbatasan.