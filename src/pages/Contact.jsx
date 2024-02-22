import "../css/Contact.css";
import {FaFacebook, FaInstagram, FaPhone, FaTwitter} from "react-icons/fa";

function Contact(){
	return (<>
		<div className="col">
			<div className="row" style={{justifyContent:"flex-end"}}>
				<h2>Sosyal Medya Hesapları</h2>
				<div className="icons">
					<a href="https://www.facebook.com/Meram.Belediyesi/?locale=tr_TR"><FaFacebook size="60"/></a>
					<a href="https://www.instagram.com/meram.belediyesi/"><FaInstagram size="60"/></a>
					<a href="https://twitter.com/MeramBelediyesi"><FaTwitter size="60"/></a>
				</div>
			</div>
			<div className="row" style={{justifyContent:"flex-end"}}>
				<h2>Meram Belediyesi Çözüm Merkezi</h2>
				<a href="https://www.meram.bel.tr/istek-sikayet" className="phone"><FaPhone size="60"/> 444 3 042 </a>
			</div>
		</div>
	</>);
}

export default Contact;
