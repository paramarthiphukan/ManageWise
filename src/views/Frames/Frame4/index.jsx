import React from "react";
import PricingCard from "../../../components/PricingCard";

const Frame4 = () => {
  return (
    <div className="frame4">
      <div className="main">
        <div className="tipbar">
          <span>💲</span> PRICING
        </div>
        <div className="head">
          <div className="title">
            Select your ideal <span>Pricing</span>plan
          </div>
          <div className="desc">
            At Manage Wise, we believe in providing you with pricing plans that
            adapt to your unique needs.
          </div>
        </div>
      </div>

      <div className="pricing">
        <PricingCard
          model="FREE"
          price={0}
          details={[
            "Access to all basic features",
            "Reporting and analytics",
            "Up to 5 individual users",
            "Chat and email support",
          ]}
        />
        <PricingCard
          model="STANDARD"
          price={25}
          type="primary"
          details={[
            "Access to all basic features",
            "Reporting and analytics",
            "Up to 5 individual users",
            "Chat and email support",
            "3+ integrations",
            "Account performance reporting",
          ]}
        />
        <PricingCard
          model="BUSINESS"
          price={42}
          details={[
            "Access to all basic features",
            "Reporting and analytics",
            "Up to 5 individual users",
            "Chat and email support",
          ]}
        />
      </div>
    </div>
  );
};

export default Frame4;
