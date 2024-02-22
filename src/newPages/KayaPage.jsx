/* eslint-disable react/no-unescaped-entities */
import img from "../images/kayaImg/kızlarkaya1.jpg";
import img1 from "../images/kayaImg/kızlarkaya2.jpg";
import img2 from "../images/kayaImg/kızlarkaya3.jpg";
import img3 from "../images/kayaImg/kızlarkaya4.jpg";
import img4 from "../images/kayaImg/kızlarkaya5.webp";

function KayaPage(){
	return (<>
		<div className="row">
			<div style={{marginTop:"100px"}}>
				<h2>Meram Kızlar Kayası</h2>
				<p style={{
					textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"
				}}>Meram Dere Mahallesi'nde piknik ve mesire alanlarının üst kısmında bulunan kayalıklar Kızlar Kayası olarak biliniyor. Bu kayalıklarla ilgili çok sayıda hikaye bulunuyor. İşte Burak Taşpınar'ın objektifinden Kızlar Kayası... Prof. Dr. Saim Sakaoğlu, “Kızlar kayası hem bir çesit taşlı oluşumların adıdır. Hem de o taşların bulunduğu bölgenin adıdır. Çocukluk yıllarımda bize Hıdırellez'i burada karşıladıklarını anlatır. Kızlar Kayası'nı çocuk hayal gücüme sığdıramazdım. Nasıl bir şey veya nasıl bir yer olduğunu düşünür dururdum. O yıllar Anamaz Dağları'nın hazin hikayesini dinler çocukça heyecanlara kapılırdır.</p>
				<h3>Konyanın Peri Bacaları</h3>
			</div>
		</div>
		<hr/>
		<div><h3>Kızlar Kayası İle İlgili Görseller</h3>
			<div className="row" style={{paddingTop:"20px", gap:"20px"}}>
				<img src={img} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img1} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img2} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img3} alt="" style={{width:"480px", height:"350px"}}/>
				<img src={img4} alt="" style={{width:"800px", height:"480px"}}/>
			</div>
		</div>
	</>);
}

export default KayaPage;