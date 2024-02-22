import img from "../images/merambagImg/merambag1.jpg";
import img1 from "../images/merambagImg/merambag2.jpg";
import img2 from "../images/merambagImg/merambag3.jpg";
import img3 from "../images/merambagImg/merambag4.jpg";
import img4 from "../images/merambagImg/merambag5.jpg";
import img5 from "../images/merambagImg/merambag6.jpg";
import img6 from "../images/merambagImg/merambag7.jpg";
import img7 from "../images/merambagImg/merambag8.png";

function MerambagPage(){
	return (<>
		<div className="row">
			<div style={{marginTop:"100px"}}>
				<h2>Meram Bağları</h2>
				<p style={{
					textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"
				}}>Meram, Takkeli dağın güney-doğu eteklerindeki vadiye kurulmuştur. Eski Meram Bağları, şehrin 5-6 km. batısından başlayıp, Dere’ye ulaşan yeşil vadiye kadar uzanır. Tarih boyunca suyu, havası ve bağları seyahatnamelere, dîvânlara konu olmuş, ünü bütün dünyaya yayılmıştır. Bugün çevresi ormanlarla kaplı güzel bir mesire yeridir. Ayrıca çay bahçeleri ve lokantalar bulunmaktadır. Meram’da; Selçuklular Döneminde yapılmış olan Meram Hamamı, Meram Köprüsü, Tavus Baba Türbesi, Hasbey Mescidi ve Dârü’l-Huffâzı ziyaret edilebilir.</p>
				<h3>Yerler;</h3>
				<p style={{
					margin:"20px 100px 20px", fontSize:"20px", letterSpacing:"1px"
				}}>Tavusbaba, Lokantalar, Yeşillik Alanlar, Camiiler, Kafeler</p>
			</div>
		</div>
		<hr/>
		<div><h3 style={{marginLeft:"15px"}}>Meram Bağları İle İlgili Görseller</h3>
			<div className="row" style={{paddingTop:"20px", gap:"20px"}}>
				<img src={img} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img1} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img2} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img3} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img4} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img5} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img6} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img7} alt="" style={{width:"480px", height:"350px"}}/>
			</div>
		</div>
	</>);
}

export default MerambagPage;