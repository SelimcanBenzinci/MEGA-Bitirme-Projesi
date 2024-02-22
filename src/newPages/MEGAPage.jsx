import img from "../images/megaImg/mega1.jpg";
import img1 from "../images/megaImg/mega2.webp";
import img2 from "../images/megaImg/mega3.webp";
import img3 from "../images/megaImg/mega4.jpg";
import img4 from "../images/megaImg/mega5.jpg";
import img5 from "../images/megaImg/mega6.jpg";

function MEGAPage(){
	return (<>
		<div className="row">
			<div style={{marginTop:"100px", marginLeft:"0"}}>
				<h2>MEGA <sub style={{fontSize:"20px"}}>Meram Gelişim Akademisi</sub></h2>
				<p style={{
					color:"black", textJustify:"inter-word", textAlign:"justify", margin:"20px 100px 20px"
				}}>Toplum hayatı açısından ilerlemek ve mesafe kat edebilmek için bir neslin kendinden sonraki nesle aktaracağı tecrübe ve birikimlerle mümkün olacağı bilinen temel bir gerçektir. Günümüzde giderek karmaşıklaşan bilgi ve becerileri kazanabilen ve bu bilgilerin hızlı değişimine ayak uydurabilen bireylerin yetiştirilmesine ihtiyaç duyulmaktadır. Bu kapsamda YENİ NESİL EĞİTİM PROJESİ ile hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine cevap vermek hem de önceki nesillerin kültürel aktarımını gerçekleştirecek ve nesiller arası iletişimi kuvvetlendirecek “yeni” bir çalışmadır. Temel eğitim, ortaöğretim, yüksek öğretim kurumları, sivil toplum kuruluşları ve meslek birliklerinin paydaşlığında bireylerin karakter eğitimi gerçekleştirilecektir.</p>
				<h4>İçerisindeki Eğitim Alanlarının Bazıları</h4>
				<ul style={{listStyle:"none"}}>
					<li><a href="https://meramgelisim.com/#/oyuntasarim">Dijital Oyun Tasarım Atölyesi</a></li>
					<li><a href="https://meramgelisim.com/#/yeninesilogrenme">Yeni Nesi Öğrenme </a></li>
					<li><a href="https://meramgelisim.com/#/espor">E-spor Merkezi </a></li>
					<li><a href="https://meramgelisim.com/#/youtube"> Youtube Akademi </a></li>
				</ul>
			</div>
		</div>
		<hr/>
		<div>
			<h3 style={{marginLeft:"15px"}}>MEGA İle İlgili Görseller</h3>
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
}

export default MEGAPage;