/* eslint-disable react/no-unescaped-entities */
import {useState} from "react";
import "../css/About.css";
import {NavLink} from "react-router-dom";

import img8 from "../images/img/meramkaymakam.webp";
import img from "../images/img/meramres3.webp";
import img3 from "../images/img/meramres4.jpg";
import img5 from "../images/img/meramres6.jpg";
import img6 from "../images/img/meramres7.jpg";
import img7 from "../images/img/meramres8.jpg";
import img9 from "../images/img/meramres9.webp";
import img11 from "../images/img/meramtantavi.jpg";

const locations=[{
	name:"Meram Bağları",
	link:"https://www.google.com/maps/search/meram+ba%C4%9Flar%C4%B1+konum/@37.8549489,32.4189744,16z/data=!3m1!4b1?entry=ttu",
	image:img,
	route:"/new1"
}, {
	name:"Kızlar Kayası",
	link:"https://www.google.com/maps/place/K%C4%B1zlar+Kayas%C4%B1+-+Meram+Belediyesi/@37.854352,32.4013511,17z/data=!3m1!4b1!4m6!3m5!1s0x14d0878b42020f17:0x65107ff2d6fd994f!8m2!3d37.854352!4d32.403926!16s%2Fg%2F11v3t11534?entry=ttu",
	image:img3,
	route:"/new2"
}, {
	name:"Meram Tantavi",
	link:"https://www.google.com/maps?q=meram+tantavi+sanat+ve+k%C3%BClt%C3%BCr+merkezi&source=lmns&entry=mt&bih=730&biw=1536&hl=tr&sa=X&ved=2ahUKEwiu6OLI5N2DAxXqzAIHHa-uD4UQiaAMKAF6BAgBEAE",
	image:img11,
	route:"/new3"
}, {
	name:"Meram Bağları",
	link:"https://www.google.com/maps/place/K%C4%B1zlar+Kayas%C4%B1+-+Meram+Belediyesi/@37.854352,32.4013511,17z/data=!3m1!4b1!4m6!3m5!1s0x14d0878b42020f17:0x65107ff2d6fd994f!8m2!3d37.854352!4d32.403926!16s%2Fg%2F11v3t11534?entry=ttu",
	image:img5,
	route:"/new1"
}, {
	name:"Meram CAFEM",
	link:"https://www.google.com/maps/place/Kafe+Meram+Yenice/@37.8495499,32.4726817,17z/data=!4m10!1m2!2m1!1sMERAM+CAFEM+yeni%C5%9Fehir!3m6!1s0x14d08565e3b921cb:0xe59e819c5cf80508!8m2!3d37.8518908!4d32.4737285!15sChZNRVJBTSBDQUZFTSB5ZW5pxZ9laGlyWhgiFm1lcmFtIGNhZmVtIHllbmnFn2VoaXKSAQRjYWZlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5DZFY5cWNqWm5SUkFC4AEA!16s%2Fg%2F11j7z0s0gw?entry=ttu",
	image:img6,
	route:"/new5"
}, {
	name:"Meram MEGA",
	link:"https://www.google.com/maps/place/MEGA+Yeni+Nesil+E%C4%9Fitim+Merkezi/@37.8485265,32.4690677,16z/data=!4m10!1m2!2m1!1smeram+mega!3m6!1s0x14d0858ce5a37f91:0x1b9a0efaec632e04!8m2!3d37.8485267!4d32.476429!15sCgptZXJhbSBtZWdhkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11ffm1bs8m?entry=ttu",
	image:img7,
	route:"/new6"
}, {
	name:"Meram Kaymakamlığı",
	link:"https://www.google.com/maps/place/Meram+Kaymakaml%C4%B1%C4%9F%C4%B1/@37.8560081,32.4670239,17z/data=!3m1!4b1!4m6!3m5!1s0x14d085ab6406ff89:0x20aee55de17f77ef!8m2!3d37.8560081!4d32.4695988!16s%2Fg%2F1trl82jv?hl=tr&entry=ttu",
	image:img8,
	route:"/new7"
}, {
	name:"Meram 80 Binde Devr-i Alem Parkı",
	link:"https://www.google.com/maps/place/80+Binde+Devr-i+Alem+Park%C4%B1+-+Meram+Belediyesi/@37.8297067,32.4123769,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08117c8890b21:0x2f7f6f17a78c7859!8m2!3d37.8297067!4d32.4149518!16s%2Fg%2F11bxc78csr?entry=ttu",
	image:img9,
	route:"/new8"
}];

function About(){
	return (<div className="container text-center">
		<div className="col" style={{marginTop:"100px"}}>
			<div>
				<p id="meram">
					<h4>Meram'da Yaşayış ve Yaşama Sevinci</h4>
					Gönüller Sultanı Mevlâna Celâleddin Rûmî’nin unutulmaz hatıraları arasında Meram’ın özel bir yeri var. O büyük Hak Âşığı da sık sık Meram’a gider, sohbet ve sema meclisleri kurulur. O, en coşkulu şiirlerini burada yazar. Çelebi Hüsâmeddin’in bağında can dostları ile birbirinden güzel aşk, mânâ, edep ve lâhûtî konuların dillendiği ledünnî sohbetler yapar. Bu coşku ile göğe kanat açıp pervâz eden dervişlerin sema’ını seyreder.
					<br/>
					Geliniz Meram’daki Mevlâna günlerinden birkaç hatırayı, Eflâkî’den dinleyelim: Bir gün Mevlâna Hazretleri, gönül dostlarıyla birlikte Meram Mescidi’nden şehre dönüyordu. Birdenbire ihtiyar bir rahip karşılarına çıkıp önlerinde baş koymaya başladı. Mevlâna ona: “Sen mi yaşlısın, sakalın mı?” diye sordu. Rahip “Ben, sakalımdan yirmi yıl daha büyüğüm, o daha sonra çıktı” dedi. Bunun üzerine Mevlâna: “Ey zavallı! O senden daha sonra çıktığı halde, erişti ve kemâle erdi. Sen evvelce nasıl idiysen şimdi de siyahlık, perişanlık ve hamlık içinde yüzüyorsun. Eğer değişmez ve olgunlaşmazsan yazıklar olsun sana!” buyurdu.
					<br/>
					Rahip hemen zünnarını kopardı ve îman getirerek inançlı Müslümanlardan oldu. Seriyy-i Sakatî’nin sırrı olan Malatyalı Mevlâna Şemseddin (Allah’ın rahmeti onun üzerine olsun) şöyle rivayet etti ki: Şeyh Seyfeddin-i Baharzî’nin oğlu Müzhirüddin Konya’ya gelince bütün ulular ve faziletli kişiler onun ziyaretine gitti ve onu son derece ağırladılar. Tesadüfen o gün de Mevlâna Hazretleri bütün dostlarla birlikte Meram Mescidi’ne gitmişlerdi. Şeyh Muzhirüddin der ki: “Acaba benim Konya’ya geldiğim haberi Mevlâna’nın mübarek kulağına gitmemiş mi? Çünkü (bir şehre) gelen ziyâret edilir, denilmiştir.”
					<br/>
					Mevlâna’nın arkadaşlarından bir dânişmend (derviş), onun bu sözünü işitti. Öte tarafta Mevlâna, hakikatleri takrir sırasında birdenbire: “Ey kardeş! Gelen biziz, sen değilsin. Sen ve senin gibilerin bizi ziyaret etmeleri ve bizimle müşerref olmaları lazımdır.” demeğe başladı. Mecliste bulunanlar: “Mevlâna Hazretleri nereye ve kime hitap ediyor?” diye nükte ve işârete şaştılar.
					<br/>
					Ondan sonra Mevlâna: “Biri Bağdat’dan geldi, öteki kendi ev ve mahallesinden dışarı çıktı. Hangisini ziyaret etmek daha iyi olur?” diye bir misâl getirdi. Orada bulunanlar: “Bağdad ülkesinden geleni ziyâret etmek daha iyi olur. Onu ziyâret edip ağırlamak vaciptir.” dediler. Mevlâna: “Hakikatte biz mekânsızlık Bağdad’ından geldik. Bu aziz şeyhzâde ise, bu dünyanın bir mahallesinden geliyor. O halde ziyaret edilmeğe ve ağırlanmaya o değil, biz daha lâyığız.”
					<br/>
					“Biz ruh âlemi Bağdad’ında, Mansûr’un (darağacına çekilmesi) gürültüsünden önce ene’l-Hak diyorduk.” Bunun üzerine müritler sevindiler ve şükrettiler. Bu hikâyeyi rivâyet eden buyurdu ki: -Şehre girdiğim vakit Müzhirüddin’in müridlerinden: “Şeyhzâde’niz bu gün ne anlattı? diye sordum. Onlar, olduğu gibi bu hâdisenin hikâyesini anlattılar. Bu haberi işitince aklım başımdan gitti. Bunu Şeyhzâde’ye bildirdiler. Kalkıp yaya olarak Mevlâna Hazretleri’ni ziyârete geldi ve hakkı teslim etti. Mevlâna’yı sevenlerden oldu ve ona: ‘Babam senin hakkında: “Demirden çarık giy ve eline demirden asâ al, Mevlâna’yı aramaya git; çünkü, o ulu kişinin sohbetine nâil olmak farzlarından biridir.’ Diyerek tenbih ederdi. Babamın bu sözü gerçekten doğru imiş. Mevlâna’nın yüceliği, babamın söylemiş olduğundan yüz bin mislidir. “Senin olgunluğunu vasfetmek için ne söyledilerse, yine de bir şey söylemiş değillerdir. Sen söylediklerinden yüz şu kadar daha fazla kemal sahibisin.” dedi.
				</p>
			</div>
			<div>
				{locations.map((location, index)=>(<div key={index}>
					<div className="title">
						<h5>{location.name} <a href={location.link}>Konum</a></h5>
						<NavLink className="nav-link" to={location.route}>
							<div className="big" style={{backgroundImage:`url(${location.image})`}}>
							</div>
						</NavLink>
					</div>
				</div>))}
			</div>
		</div>
	</div>);
}

export default About;
