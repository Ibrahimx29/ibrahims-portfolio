import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skill</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" src={checkMarkIcon} />
        <SkillList skill="CSS" src={checkMarkIcon} />
        <SkillList skill="JavaScript" src={checkMarkIcon} />
        <SkillList skill="TypeScript" src={checkMarkIcon} />
        <SkillList skill="Node" src={checkMarkIcon} />
        <hr />
        <SkillList skill="React" src={checkMarkIcon} />
        <SkillList skill="Angular" src={checkMarkIcon} />
        <SkillList skill="Vue" src={checkMarkIcon} />
        <SkillList skill="Tailwind CSS" src={checkMarkIcon} />
        <hr />
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
