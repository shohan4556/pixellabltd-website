import React from "react";
import Style from "../assets/styles/privacy.module.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <section>
        <h1>Privacy Policy</h1>
        <div>
          <h3>Effective Date:</h3>
          <p>10th July, 2024</p>
        </div>
      </section>
      <section className={Style.sec1}>
        <h1>PIXELLAB IS COMMITTED TO YOUR PRIVACY</h1>
        <p>
          We value Your patronage and respect Your privacy rights. As part of
          the normal operation of Our services, We collect and, in some cases,
          may disclose information about You. We have created the following
          Privacy Policy to let You know what information We collect when You
          use Our Service, why We collect it, and how it is used. This Privacy
          Policy applies to all information that You provide to PixelLab Ltd.
          ("Us," "We," or "Our") and that We maintain electronically, whether
          You provide the information through Our Service located at
          www.pixellabltd.com (the "Website"), or via any applications created
          by PixelLab Ltd. ("Apps"), and information made available by users to
          each other through the PixelLab Ltd. Software (collectively, the
          "Service"). Additionally, this Privacy Policy applies to any Personal
          Information (defined below) obtained from Your use of the Service.
          This Privacy Policy does not apply to any information that You may
          provide to third parties; for example, other sites linked to this
          Website and Apps. You should contact such third parties directly to
          determine their respective privacy policies. This Privacy Policy is
          governed by Our Terms and Conditions. PixelLab Ltd. reserves the right
          to change this Privacy Policy at any time without notice. Please check
          the privacy policy regularly. If You do not expressly object to the
          validity of the new terms and conditions/privacy Policy via e-mail
          within this two (2) week period, then the newly revised Privacy Policy
          will be considered agreed upon. If You reject the newly revised
          Privacy Policy, then PixelLab Ltd. may terminate its relationship with
          You. If You believe We have not adhered to this Privacy Policy or if
          You have any other questions regarding this Privacy Policy, please
          contact Us at <a href="mailto:support@pixellabltd.com."></a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
