import React from "react";

function OurFeatures() {
  return (
    <section>
      OurFeatures{" "}
      <FeaturesCard
        width={"20%"}
        featureIcon={<></>}
        featureDescription="askjhashdg"
      />
      <FeaturesCard featureIcon={<></>} featureDescription="askjhashdg" />
      <FeaturesCard featureIcon={<></>} featureDescription="askjhashdg" />
      <FeaturesCard featureIcon={<></>} featureDescription="askjhashdg" />
      <FeaturesCard featureIcon={<></>} featureDescription="askjhashdg" />
      <FeaturesCard featureIcon={<></>} featureDescription="askjhashdg" />
    </section>
  );
}

function FeaturesCard(props) {
  return (
    <>
      <div style={{ width: props.width }}>
        {props.featureIcon} {props.featureDescription}
      </div>
    </>
  );
}

export default OurFeatures;
