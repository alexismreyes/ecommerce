import { useContext } from "react";
import { PartnersContext } from "./context/PartnerContext";
import "./assets/PartnersBar.css"

const PartnersBar = () => {
  const partners = useContext(PartnersContext);

  return (
    <div className="over-footer">
      <div className="partners-bar-row">
        {partners.map((partner,index) => (
            <div className="partner-div" key={index}>
              {partner.name}&nbsp;<br />
              <a href={`https://${partner.url}`} target="blank">{partner.url}</a>
            </div>            
        ))}
      </div>
    </div>
  );
};

export default PartnersBar;
