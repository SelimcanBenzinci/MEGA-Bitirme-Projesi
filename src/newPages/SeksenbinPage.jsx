import img from "../images/seksenbindeImg/seksenbinde.jpg";
import img1 from "../images/seksenbindeImg/seksenbinde1.jpg";
import img2 from "../images/seksenbindeImg/seksenbinde2.webp";
import img3 from "../images/seksenbindeImg/seksenbinde3.jpg";
import img4 from "../images/seksenbindeImg/seksenbinde4.jpg";
import img5 from "../images/seksenbindeImg/seksenbinde5.jpg";

const SeksenbinPage=()=>{
	return (<>
		<div className="row">
			<div style={{marginTop:"100px", marginLeft:"0"}}>
				<h2>80 Binde Devr-i Âlem Parkı</h2>
				<p style={{color:"black", textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"}}>
					Konya’da son zamanlarda oldukça popüler bir alan olan 80 Binde Devr-i Âlem Parkı, Meram Durunday Mahallesi’nde, Dutlu Caddesi üzerinde yer alır. 80.000 m² bir alana inşa edildiği için bu isimle anılan park, 23 Nisan 2014 tarihinde Ulusal Egemenlik ve Çocuk Bayramı’nda hizmete açılmıştır.
				</p>
			</div>
		</div>
		<hr/>
		<div>
			<h3 style={{marginLeft:"15px"}}>80 Binde Devr-i Âlem Parkı İle İlgili Görseller</h3>
			<div className="row" style={{paddingTop:"20px", gap:"20px", justifyContent:"center"}}>
				<img src={img} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img1} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img2} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img3} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img4} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img5} alt="" style={{width:"480px", height:"350px"}}/>
			</div>
		</div>
	</>);
};

export default SeksenbinPage;
