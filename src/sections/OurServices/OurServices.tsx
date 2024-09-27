import React from "react";
import { SectionContainer } from "../../components";
import {
  Typography,
  TypographyColor,
  TypographyTag,
  TypographyVariant,
} from "../../components/Typography";
import designerImg from "../../../public/assets/designer_rafiki.svg";
import programmingImg from "../../../public/assets/programming_rafiki.svg";
import notesImg from "../../../public/assets/notes_rafiki.svg";
import styles from "./OurServices.module.css";
import { Link } from "react-router-dom";
import arrowRightIcon from "../../../public/assets/arrow_right.svg";

const OurServices = () => {
  return (
    <SectionContainer
      width="medium"
      innerClassName={styles.ourServicesContainer}
    >
      <div className={styles.typographyContainer}>
        <Typography
          tag={TypographyTag.h4}
          color={TypographyColor.Secondary}
          variant={TypographyVariant.Heading4}
          className={styles.sectionHeading}
        >
          Our services
        </Typography>
        <Typography tag={TypographyTag.h2} variant={TypographyVariant.Heading2}>
          We provide great services for our customers based on needs
        </Typography>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src={designerImg} alt="" className={styles.cardBanner} />
          <Typography
            tag={TypographyTag.h3}
            color={TypographyColor.Secondary}
            variant={TypographyVariant.Heading3}
            className={styles.cardHeading}
          >
            Graphic Design
          </Typography>

          <Typography
            tag={TypographyTag.p}
            variant={TypographyVariant.BodyRegular}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </Typography>
          <Link to="/">
            <span>Learn More</span>
            <img
              src={arrowRightIcon}
              alt=""
              className={styles.arrowRightIcon}
            />
          </Link>
        </div>
        <div className={styles.card}>
          <img src={programmingImg} alt="" className={styles.cardBanner} />
          <Typography
            tag={TypographyTag.h3}
            color={TypographyColor.Secondary}
            variant={TypographyVariant.Heading3}
            className={styles.cardHeading}
          >
            Web Development
          </Typography>

          <Typography
            tag={TypographyTag.p}
            variant={TypographyVariant.BodyRegular}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </Typography>
          <Link to="/">
            <span>Learn More</span>
            <img
              src={arrowRightIcon}
              alt=""
              className={styles.arrowRightIcon}
            />
          </Link>
        </div>
        <div className={styles.card}>
          <img src={notesImg} alt="" className={styles.cardBanner} />
          <Typography
            tag={TypographyTag.h3}
            color={TypographyColor.Secondary}
            variant={TypographyVariant.Heading3}
            className={styles.cardHeading}
          >
            Content Writing
          </Typography>

          <Typography
            tag={TypographyTag.p}
            variant={TypographyVariant.BodyRegular}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </Typography>
          <Link to="/">
            <span>Learn More</span>
            <img
              src={arrowRightIcon}
              alt=""
              className={styles.arrowRightIcon}
            />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export { OurServices };
