import img from "../images/tantaviImg/Tantavi1.jpeg";
import img1 from "../images/tantaviImg/Tantavi2.webp";
import img2 from "../images/tantaviImg/Tantavi3.jpg";
import img3 from "../images/tantaviImg/tantaviaraba.jpg";
import img4 from "../images/tantaviImg/tantavibilim.jpg";

function TantaviPage(){
	return (<>
		<div className="row">
			<div style={{marginTop:"100px"}}>
				<h2>Meram Tantavi Kültür ve Sanat Merkezi</h2>
				<p style={{
					textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"
				}}>Anıt Meydanı’ndan Konya Tren Gar’ına doğru gittiğinizde istasyona varmadan hemen yolun sağındaki sokak içerisinde görkemli bir yapı göreceksiniz. Halk arasında Tantavî Hanı adıyla anılan bu yapı 1903 yılında Hafız Ragıb Efendi tarafından garın yük ambarı olarak yaptırılmış ve uzun yıllar boyunca ambar olarak kullanılmıştır. Özgün halinde kalın taş duvarlara ve tuğla hatıllara sahip olan yapının beşik çatısı kiremit kaplıydı. Büyük pencereleri barok tarzında taş örgülü olan hanın demir kapaklı ana giriş kapıları çift kanatlıydı. Bir süre Zirai Donatım Kurumu olarak kullanılan ve yakın zamanlara kadar...Burada Bilim Festivalleri bazı programların açılış konuşmaları açılış buluşmaları ve Araba fuarları vb. etkinliklerde çokça düzenlenmektedir.İçerisinde kendine ait üst katta bulunan bir kafesi de vardır.</p>
			</div>
		</div>
		<hr/>
		<div><h3 style={{}}>Tantavi Kültür ve Sanat Merkezi İle İlgili Görseller</h3>
			<div className="row" style={{paddingTop:"20px", gap:"20px"}}>
				<img src={img} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img1} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img2} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img3} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img4} alt="" style={{width:"480px", height:"350px"}}/>
			</div>
		</div>
	</>);
}

export default TantaviPage;