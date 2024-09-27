import { SectionContainer } from "../../components";
import { Button } from "../../components/Button";
import styles from "./HeroBanner.module.css";
import heroBannerImg from "../../../public/assets/hero_banner.svg";
import {
  Typography,
  TypographyColor,
  TypographyTag,
  TypographyVariant,
} from "../../components/Typography";

const HeroBanner = () => {
  return (
    <SectionContainer
      width="medium"
      innerClassName={styles.heroBannerContainer}
    >
      <div className={styles.typographyContainer}>
        <Typography
          tag={TypographyTag.p}
          variant={TypographyVariant.BodyRegular}
          color={TypographyColor.Secondary}
          className={styles.para1}
        >
          Let&apos;s shift your business
        </Typography>
        <Typography
          tag={TypographyTag.h1}
          variant={TypographyVariant.Heading1}
          className={styles.heading}
        >
          Shift your business fast with Shade Pro.
        </Typography>
        <Typography
          tag={TypographyTag.p}
          variant={TypographyVariant.BodyRegular}
        >
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </Typography>
        <Button>Get started a project</Button>
      </div>
      <div>
        <img src={heroBannerImg} alt="" />
      </div>
    </SectionContainer>
  );
};

export { HeroBanner };
