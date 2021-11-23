import ALaLogo from "../../assets/icons/ala-logo.png";
import "./notfound.scss";
import { Trans } from "@lingui/macro";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-header">
        <a href="https://APEBANK.io" target="_blank">
          <img className="branding-header-icon" src={ALaLogo} alt="APEBANK" />
        </a>

        <h4>
          <Trans>Page not found</Trans>
        </h4>
      </div>
    </div>
  );
}
