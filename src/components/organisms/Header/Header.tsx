'use client'
import React from 'react';
import { useTranslation } from "react-i18next";
import "../../../lib/i18n"; // Pastikan impor i18n
const Header: React.FC = () => {
  const {  i18n } = useTranslation();
  return (
    <header>
      <h1>header</h1>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("de")}>deutch</button>
    </header>
  );
};

export default Header;