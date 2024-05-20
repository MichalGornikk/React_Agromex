import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <ul className="grid">
        <h1 className="title-line">
          <span>STWÓRZ</span>
        </h1>
        <li className="line">
          <img src="images/magazyn.jpg" alt="Image 1 Description" />
          <div className="text">
            <h3>CENTRUM LOGISTYCZNE I USŁUGI SPEDYCYJNE</h3>
            <p>
              Centrum logistyczne i usługi spedycyjne to kluczowe elementy w
              dzisiejszym globalnym łańcuchu dostaw. Dzięki zaawansowanej
              infrastrukturze i profesjonalnemu podejściu, zapewniają
              kompleksową obsługę transportu, magazynowania i dystrybucji
              towarów. Oferują szeroki zakres usług, takich jak transport
              drogowy, morski, lotniczy, a także usługi celne i magazynowanie.
              Dzięki nowoczesnym technologiom i doświadczonej kadrze
              pracowniczej, centra logistyczne zapewniają efektywną obsługę
              klientów, zwiększając tym samym konkurencyjność firm na rynku.
              Działają nie tylko lokalnie, ale również międzynarodowo,
              umożliwiając sprawną wymianę towarów na całym świecie. Wspierając
              logistykę i transport, centra logistyczne i usługi spedycyjne
              odgrywają istotną rolę w gospodarce globalnej, umożliwiając
              sprawną i szybką wymianę towarów między krajami i kontynentami.
            </p>
            <Link to="/transport">
              <button className="btn-about">SPRAWDŹ OFERTĘ</button>
            </Link>
          </div>
        </li>
        <h1 className="title-line">
          <span>Z NAMI</span>
        </h1>
        <li className="line">
          <img src="images/client.jpg" alt="Image 2 Description" />
          <div className="text">
            <h3>SPEDYCJA KRAJOWA I MIĘDZYNARODOWA</h3>
            <p>
              Z naszej firmy oferującej usługi spedycji krajowej i
              międzynarodowej można oczekiwać profesjonalnej obsługi transportu
              towarów zarówno na terenie kraju, jak i poza jego granicami.
              Działamy z pasją i zaangażowaniem, zapewniając kompleksowe
              rozwiązania logistyczne dostosowane do indywidualnych potrzeb
              klienta. Nasza firma specjalizuje się w organizacji transportu
              drogowego, morskiego, lotniczego oraz kolejowego, zapewniając
              bezpieczne i terminowe dostawy. Posiadamy szeroką sieć partnerów i
              doświadczonych pracowników, co gwarantuje sprawne i skuteczne
              realizowanie zleceń. Dzięki naszej ekspertyzie w obszarze spedycji
              krajowej i międzynarodowej, zapewniamy naszym klientom pełne
              wsparcie logistyczne na każdym etapie transportu. Postaw na naszą
              solidność i doświadczenie, aby zapewnić sobie bezpieczną i
              efektywną obsługę transportową na każdym kroku!
            </p>
            <Link to="/transport">
              <button className="btn-about">CZYTAJ WIECEJ</button>
            </Link>
          </div>
        </li>
        <h1 className="title-line">
          <span>PRZYSZŁOŚĆ</span>
        </h1>
        <li className="line">
          <img src="images/zaladunek.jpg" alt="Image 3 Description" />
          <div className="text">
            <h3>WSPÓŁPRACA Z NAMI</h3>
            <p>
              Jeśli chodzi o współpracę z nami, to gwarantujemy partnerskie
              podejście i profesjonalizm na każdym etapie naszej współpracy.
              Jesteśmy otwarci na nowe wyzwania i gotowi dostosować nasze usługi
              do indywidualnych potrzeb klienta. Działamy transparentnie i
              zawsze stawiamy na klarowną komunikację, aby zapewnić naszym
              partnerom pełną kontrolę nad procesem współpracy. Nasza firma
              oferuje nie tylko wysoką jakość usług spedycyjnych, ale również
              elastyczność i szybkość działania, co pozwala nam skutecznie
              reagować na zmieniające się warunki rynkowe. Współpraca z nami to
              gwarancja solidności, terminowości i profesjonalizmu. Jeśli
              poszukujesz partnera, który zapewni Ci kompleksową obsługę
              logistyczną na najwyższym poziomie, to jesteśmy idealnym wyborem
              dla Ciebie. Postaw na naszą współpracę i razem osiągniemy sukces!
            </p>
            <Link to="/transport">
              <button className="btn-about">DAJ NAM ZNAĆ</button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default About;
