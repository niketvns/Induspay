import { SectionContainer } from "../../components";
import {
  Typography,
  TypographyTag,
  TypographyVariant,
} from "../../components/Typography";
import starIcon from "../../../public/assets/star_icon.svg";
import styles from "./ReviewContainer.module.css";
import profileLogo from "../../../public/assets/profile_logo.svg";

const ReviewContainer = () => {
  return (
    <SectionContainer
      width="medium"
      innerClassName={styles.reviewContainer}
      wrapperClassName={styles.reviewWrapper}
    >
      <div>
        <img src={profileLogo} alt="" className={styles.profile_logo} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <img
                key={index}
                src={starIcon}
                alt=""
                className={styles.starImg}
              />
            );
          })}
        </div>
        <Typography tag={TypographyTag.h2} variant={TypographyVariant.Heading2}>
          “OMG! I cannot believe that I have got a brand new landing page after
          getting Albino. It was super easy to edit and publish.”
        </Typography>
        <div className={styles.profileName}>
          <Typography
            tag={TypographyTag.p}
            variant={TypographyVariant.Heading4}
          >
            Franklin Hicks
          </Typography>
          <Typography
            tag={TypographyTag.p}
            variant={TypographyVariant.BodyRegular}
          >
            Web Developer
          </Typography>
        </div>
      </div>
    </SectionContainer>
  );
};

export { ReviewContainer };
