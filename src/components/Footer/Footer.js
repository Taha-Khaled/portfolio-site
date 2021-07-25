import React from "react";
import {
  AiFillBehanceCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+201120844738">+20-11-2084-4738</LinkItem>
          <LinkItem href="tel:+201016794031">+20-10-1679-4031</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:taha.khaled9988@gmail.com">
            taha.khaled9988@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Art is worth the pain.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/tahakhalled/" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://linkedin.com/in/taha-khalled/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/Taha.Khalled/" target="_blank">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/tahakhalled/" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://behance.net/tahakhaled" target="_blank">
          <AiFillBehanceCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
