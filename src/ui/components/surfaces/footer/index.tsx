import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, Applist } from "./style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            possimus eum nemo incidunt nam cumque. Accusantium repudiandae
            architecto facere, odit eius consequuntur rem nam, sapiente
            aspernatur maxime, repellendus autem. Ipsum.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <Applist>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </Applist>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
