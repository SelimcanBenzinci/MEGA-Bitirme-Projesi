/* eslint-disable react/no-unescaped-entities */
import img from "../images/kafemImg/kafemyenice.jpg";
import img1 from "../images/kafemImg/kafemyenice1.webp";
import img2 from "../images/kafemImg/kafemyenice2.jpg";
import img3 from "../images/kafemImg/kafemyenicemenu.png";
import img4 from "../images/kafemImg/kafemyenicemenu1.png";

function KafeMeram(){
	return (<>
		<div className="row">
			<div style={{marginTop:"100px", marginLeft:"0"}}>
				<h2>Kafe Meram Yenice</h2>
				<p style={{
					color:"black", textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"
				}}>Yenice şubemizde serpme kahvaltımız vardır. Otopark ve çocuk oyun alanları mevcuttur.Yenice şubemiz, Yenice parkı içerisindedir. Meram'ın göbeğinde yer alan konumu ve ortamı güzel olan bir yerdir,bahçesinde 12 tane kamelya bulunmaktadır.Ailenizle vakit geçirebileceğiniz fiyat performansı iyi olan bir mekandır.
				</p>
				<br/>
				<a href="https://kafemeram.com/yenice/menu.php">Kafe Meram Yenice Menüye bakmak istiyorsanız tıklayın.</a>
			</div>
		</div>
		<hr/>
		<div>
			<h3 style={{marginLeft:"15px"}}>Kafe Meram Yenice İle İlgili Görseller</h3>
			<div className="row" style={{paddingTop:"20px", gap:"20px", justifyContent:"center"}}>
				<img src={img} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img1} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img2} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img3} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img4} alt="" style={{width:"480px", height:"350px"}}/>
			</div>
		</div>
	</>);
}

export default KafeMeram;