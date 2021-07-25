import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection center main>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My Name is Taha Khaled and I'm a UI Deverloper I have a passion to know
        and learn more, to find a place where I can apply my knowledge, work on
        real projects and gain more knowledge and experience.
      </SectionText>
      <Button onClick={() => (window.location = "")} target="_blank">
        See My Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
