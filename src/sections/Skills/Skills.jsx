import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skill</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" src={checkMarkIcon} />
        <SkillList skill="CSS" src={checkMarkIcon} />
        <SkillList skill="JavaScript" src={checkMarkIcon} />
        <SkillList skill="TypeScript" src={checkMarkIcon} />
        <SkillList skill="Node" src={checkMarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React" src={checkMarkIcon} />
        <SkillList skill="Angular" src={checkMarkIcon} />
        <SkillList skill="Vue" src={checkMarkIcon} />
        <SkillList skill="Tailwind CSS" src={checkMarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Redux" src={checkMarkIcon} />
        <SkillList skill="Webpack" src={checkMarkIcon} />
        <SkillList skill="Git" src={checkMarkIcon} />
        <SkillList skill="Jest" src={checkMarkIcon} />
        <SkillList skill="Bootstrap" src={checkMarkIcon} />
      </div>
    </section>
  );
}

export default Skills;
