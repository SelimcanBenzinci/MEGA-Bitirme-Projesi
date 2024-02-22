/* eslint-disable react/no-unescaped-entities */
import {FaLocationArrow} from "react-icons/fa";
import altinsehir1 from "../images/img/Altınsehir1.jpg";
import altinsehir2 from "../images/img/Altınsehir2.jpg";
import beyzade1 from "../images/img/Beyzade1.jpg";
import beyzade2 from "../images/img/Beyzade2.jpg";
import mevameram1 from "../images/img/Mevameram1.jpeg";
import mevameram2 from "../images/img/Mevameram2.jpg";
import parkmahal1 from "../images/img/Parkmahal1.jpg";
import parkmahal2 from "../images/img/Parkmahal2.jpg";
import temasehir1 from "../images/img/Temasehir1.jpg";
import temasehir2 from "../images/img/Temasehir2.jpg";
import "../css/Konut.css";

const Siteler=[
	{
		name:"TemaŞehir Sitesi",
		location:"https://www.google.com/maps/place/Tema%C5%9Fehir/@37.8507675,32.4723543,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08441f83ef785:0x8ffaba7eed9631c2!8m2!3d37.8507675!4d32.4749292!16s%2Fg%2F11h3mvy1t_?entry=ttu",
		images:[temasehir1, temasehir2],
		description:"Sitede 2+1, 3+1, 4+1, 5+1 daireler bulunmaktadır. Blokların bir kısmı 14 katlı, diğerleri ise 7 katlıdır. Sitenin içerisinde bir adet basketbol sahası, 3 adet büyük kamelya, 1 adet geniş havuz, 2 adet büyük çocuk parkı ve bir adet sosyal tesis bulunmaktadır. Sosyal tesis içinde kadın ve erkekler için ayrı olmak üzere her ikisinde de birer adet büyükler için havuz ve çocuk havuzu, 1 adet fitness salonu, 1 adet sahuna, 1 adet hamam, 1 adet buhar odası yer almaktadır. Ayrıca, kadınlara özel bir plates salonu da bulunmaktadır. Site, 1. etap ve 2. etap olmak üzere iki aşamadan oluşmaktadır. Her iki sitede de -1 ve -2 olmak üzere ikişer adet otopark mevcuttur."
	},
	{
		name:"Parkmahal Sitesi",
		location:"https://www.google.com/maps/place/Parkmahal+Konutlar%C4%B1/@37.8534122,32.4736238,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08443e4b89595:0x2c82dd85984b2698!8m2!3d37.8534122!4d32.4761987!16s%2Fg%2F11dy1mpfgz?entry=ttu",
		images:[parkmahal1, parkmahal2],
		description:"Sitede 3+1, 4+1, 5+1, ters dubleks daireler bulunmaktadır. Blokların bir kısmı 20 katlı, diğer bir kısmı ise 13 katlıdır. Sitenin içerisinde bir adet basketbol sahası, 1 adet futbol sahası, 1 adet tenis kortu, 1 adet çok amaçlı kafesi, geniş süs havuz, 4 adet çocuk parkı ve bir adet sosyal tesis bulunmaktadır. Sosyal tesis içinde kadın ve erkekler için ayrı olmak üzere her ikisinde de birer adet büyükler için havuz ve çocuk havuzu, 1 adet fitness salonu, 1 adet sahuna, 1 adet hamam, 1 adet buhar odası yer almaktadır. Açık otopark ve kapalı otopark bulunmaktadır konum olarak Meram'ın göbeğinde yer almaktadır, içerisinde 1 adet bakkal bulunmaktadır."
	},
	{
		name:"AltınŞehir Sitesi",
		location:"https://www.google.com/maps/place/Alt%C4%B1n%C5%9Fehir+Sitesi/@39.4008466,28.2914714,7z/data=!4m10!1m2!2m1!1zYWx0xLFuxZ9laGlyIHNpdGVz!3m6!1s0x14d0857a799d5ffb:0x3885da6cc11ec1d3!8m2!3d37.8517146!4d32.4745003!15sChJhbHTEsW7Fn2VoaXIgc2l0ZXOSARFhcGFydG1lbnRfY29tcGxleOABAA!16s%2Fg%2F11fkn9kj2d?entry=ttu",
		images:[altinsehir1, altinsehir2],
		description:"Sitede 4+1, 5+1 daireler bulunmaktadır. Bloklar 13 katlıdır. Sitenin içerisinde bir adet basketbol sahası, 1 adet futbol sahası, 6 adet kamelya , geniş süs havuz, 2 adet çocuk parkı bulunmaktadır.Kapalı otoparkı, 1 adet sauna, 1 adet türk hamamı, 1 adet fitness merkezi, 1 adet sinema,tenis kortu,1 adet kafe ve güvenlik bulunmaktadır. Merkezi ısıtma sistemiyle çalışmakta yerden ısıtma mevcuttur.Zemin katların balkonunun önünde küçük bir bahçe tarzı ayrılmış yer vardır.Deprem yönetmenliğine uygun bir sitedir."
	},
	{
		name:"MevaMeram Sitesi",
		location:"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyDQgCEC4YgwEYsQMYgAQyCggDEC4YsQMYgAQyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyCggGEC4YsQMYgAQyDQgHEC4YrwEYxwEYgAQyDQgIEAAYgwEYsQMYgAQyBwgJEAAYjwLSAQgxMjY2ajBqNKgCALACAA&q=Meva+Meram+sitesi&um=1&ie=UTF-8",
		images:[mevameram1, mevameram2],
		description:"Sitede 3+1, 4+1, 5+1 daireler bulunmaktadır. 5 blok bulunmaktadır ve her bir blok 7 katlıdır. Sitede 2 adet çocuklar için oyun alanı ve 1 adet basketbol sahası, 1 adet futbol sahası, 6 adet kamelya, 1 adet büyük bir süs havuzu bulunmaktadır, kapalı otoparkı bulunmaktadır ve güvenlikli bir sitedir, sitede güzel bir yürüyüş parkuru bulunmaktadır ve ayrıca site şehrin tam göbeğindeki olan sitelerden biridir."
	},
	{
		name:"Beyzade Sitesi",
		location:"https://www.google.com/maps/place/Beyzade+Evleri+(1)/@37.8602379,32.4681146,18z/data=!4m10!1m2!2m1!1sbeyzade+sitesi+konya!3m6!1s0x14d085ce3c210145:0x1319507ee26bd9b3!8m2!3d37.8612807!4d32.4721091!15sChRiZXl6YWRlIHNpdGVzaSBrb255YZIBEWFwYXJ0bWVudF9jb21wbGV44AEA!16s%2Fg%2F11tdmsh1sz?entry=ttu",
		images:[beyzade1, beyzade2],
		description:"Sitede 3+1, 4+1, 5+1, 6+1 dubleks daireler bulunmaktadır toplam 432 adet daire vardır. Diğer sitelere göre yapılma tarihi biraz eskidir. Sitede 1 adet basketbol sahası, 1 adet futbol sahası, 6 adet kamelya ve 1 adet süs havuzu bulunmaktadır.Site de 6 tane blok vardır ve her bir blok 10 katlıdır. Site güvenlikli bir sitedir ve konum olarak Meram'ın göbeğinde yer alan sitelerden biridir. Sitenin bahçesi geniş ve güzeldir. Site Beyzade 1 ve Beyzade 2 olmak üzere iki tane siteden oluşur birbirlerinden bağımsızlardır."
	}
];

function Konut(){
	return (
		<>
			{Siteler.map((site, index)=>(
				<div className="row" style={{marginTop:"100px"}} key={index}>
					<div className="col-sm-6">
						<h1>{site.name}</h1>
						{site.images.map((image, index)=>(
							<img src={image} alt="" key={index}/>
						))}
					</div>
					<div className="col-sm-4">
						<h2>
							{site.name}{" "}
							<a href={site.location}>
								<br/>
								<FaLocationArrow/> Konum
							</a>
						</h2>
						<p>{site.description}</p>
					</div>
					<hr/>
				</div>
			))}
		</>
	);
}

export default Konut;