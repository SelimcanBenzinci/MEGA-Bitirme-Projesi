/* eslint-disable react/no-unescaped-entities */
import down1 from "../images/haberImg/downsendrom.jpg";
import down2 from "../images/haberImg/downsendromlu1.jpg";
import engel1 from "../images/haberImg/engellinakil.jpg";
import engel2 from "../images/haberImg/engellinakil1.jpg";
import ne1 from "../images/haberImg/NEcaddesi.jpg";
import ne2 from "../images/haberImg/NEcaddesi1.jpg";
import tapu1 from "../images/haberImg/tapudagıtım.jpg";
import tapu2 from "../images/haberImg/tapudagıtım1.jpg";
import tenzile1 from "../images/haberImg/tenzileana1.jpg";
import tenzile2 from "../images/haberImg/tenzileanahasta.jpg";
import yaz2 from "../images/haberImg/yazokullargezi1.jpg";
import yaz1 from "../images/haberImg/yazokullarıgezi.jpg";
import "../css/Faaliyet.css";

const Haberler=[{
	img:tenzile1,
	img2:tenzile2,
	title:"Konya'da Tenzile Ana Hasta Konukevi, 155 bin misafiri ağırladı",
	content:"Konya'da sosyal belediyeciliğin en güzel örneklerinden biri olan Meram Belediyesi Tenzile Ana Hasta Konukevi, bugüne kadar yaklaşık 155 bin hasta ve hasta yakınını misafir etti. Konukevi, şehir dışından tedavi için gelen hastalara ücretsiz konaklama hizmeti sunuyor ve 42 odası ile aynı anda 84 kişiye hizmet verebiliyor.",
	date:"16.01.2024 - 12:30"
}, {
	img:down1,
	img2:down2,
	title:"Konya'da Down Sendromlu Bireyler İçin Yaşam Destek Merkezi Açıldı",
	content:"Konya'nın Meram ilçesinde, Meram Belediyesi, Necmettin Erbakan Üniversitesi ve Konya İl Milli Eğitim Müdürlüğü iş birliğiyle hayata geçirilen Down Sendromlu Bireyler Yaşam Destek Merkezi DOSD Meram açıldı. Merkez, Türkiye'de ilk ve tek olma özelliği taşıyor ve down sendromlu bireylerin yaşama katılımlarını ve hayatın içindeki rollerini üstlenebilmelerini hedefliyor.",
	date:"08.01.2024 - 12:44"
}, {
	img:ne1,
	img2:ne2,
	title:"Konya'da Necmettin Erbakan Caddesi hayata geçiyor",
	content:"Konya Büyükşehir Belediyesi, Meram Belediyesi ile birlikte Necmettin Erbakan Caddesi'ni hayata geçiriyor. 3,5 kilometre uzunluğundaki cadde, 2024 yılı ortalarında tamamlanması hedefleniyor. Cadde açımıyla birlikte kesintisiz ulaşım sağlanacak ve şehir içi trafiği rahatlatılacak.",
	date:"26.12.2023 - 10:52"
}, {
	img:tapu1,
	img2:tapu2,
	title:"Konya Meram'da Tapu Dağıtımları Başladı",
	content:"Konya'nın Meram İlçe Belediyesi, Çaybaşı ve Pirebi Mahalleleri'nde imar uygulamalarını tamamlayarak tapu dağıtımlarına başladı. Meram Belediye Başkanı Mustafa Kavuş, tapu teslim töreninde yaptığı konuşmada, Meram'ın artık imar sorunu kalmadığını ve beklentilerin karşılandığını belirtti.",
	date:"25.12.2023 - 15:11"
}, {
	img:engel1,
	img2:engel2,
	title:"Meram Belediyesi Engelli Nakil Aracı İle Engellilere Yardım Ediyor",
	content:"Konya'nın Meram İlçe Belediyesi, engelli bireylerin ulaşımda yaşadığı zorlukları gidermek amacıyla 'Engelli Nakil Aracı' hizmetini başlattı. Tekerlekli sandalyeli engelliler ve refakatçileri artık hastane randevularına rahatlıkla yetişebiliyor ve evlerine konforlu bir şekilde geri dönebiliyor. Engelli Nakil Aracı, hafta içi mesai saatleri içerisinde hizmet veriyor ve aylık yaklaşık 40 bireyi hastane randevularına yetiştiriyor. Engelli bireylerin hizmetten yararlanabilmek için en az 1 gün öncesinden randevu almaları gerekiyor.",
	date:"15.09.2023 - 12:51"
}, {
	img:yaz1,
	img2:yaz2,
	title:"Meram Belediye Başkanı Mustafa Kavuş, Yaz Okullarını Ziyaret Etti",
	content:"Meram Belediye Başkanı Mustafa Kavuş, Meram Belediyesi Mehmet Ali Özbuğday Gençlik Merkezi'ndeki yaz okullarını ziyaret ederek öğrencilerle sohbet etti. Kavuş, yaz okullarının çocukların eğitimine ve sosyal hayatına ciddi destek sağladığını vurgulayarak, çocukların heyecanı ve neşesiyle geleceğe hazırlandıklarını belirtti. Kavuş, çocukların eğitim sürecini yakından takip edeceğini de sözlerine ekledi.",
	date:"27.07.2023 - 15:44"
}];

function Faaliyet(){
	return (<>
		{Haberler.map((haber, index)=>(<div className="row" key={index} style={{marginTop:"100px"}}>
			<div className="col-sm-6">
				<img src={haber.img} alt=""/>
				<img src={haber.img2} alt=""/>
			</div>
			<div className="col-sm-4">
				<h4>
					<b>{haber.title}</b>
				</h4>
				<p>{haber.content}</p>
				<h5>{haber.date}</h5>
			</div>
			<hr/>
		</div>))}
		<hr/>
	</>);
}

export default Faaliyet;