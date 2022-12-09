import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function LanguagePicker() {
  const { t, i18n } = useTranslation();


  /**
   * @name handleLangUpdate
   * @description this funcion will update the language in i18n and localStorage
   */
  const handleLangUpdate = (e, lang) => {
    e.preventDefault();
    localStorage.setItem("langcode", lang);
    i18n.changeLanguage(lang);
  };
  return (
    <UncontrolledDropdown
      href="/"
      tag="li"
      className="dropdown-language nav-item dropdown-user with-lang"
      placeholder="language"
    >
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="country-flag-data">
          <ReactCountryFlag
            svg
            className="country-flag flag-icon"
            countryCode={
              i18n.language === "en"
                ? "us"
                : "ae"
            }
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <span className="selected-language">
          {i18n.language === "en" ? t("header.language.english") : t("header.language.arabic")}
        </span>
      </DropdownToggle>
      <DropdownMenu className="mt-0 with-lang">
        <DropdownItem onClick={(e) => handleLangUpdate(e, "en")}>
          <ReactCountryFlag className="country-flag" countryCode="us" svg />
          <span>{t("header.language.english")}</span>
        </DropdownItem>
        <DropdownItem onClick={(e) => handleLangUpdate(e, "ar")}>
          <ReactCountryFlag className="country-flag" countryCode="ae" svg />
          <span>{t("header.language.arabic")}</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default LanguagePicker;
