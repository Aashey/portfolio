import { education } from "./education";
import { personalInformation } from "./personalInformation";
import { professionalExperience } from "./professionalExperience";
import { projects } from "./projects";
import { technicalSkills } from "./technicalSkills";

export const heroData = {
  ...personalInformation,
  education: education,
  experience: professionalExperience,
  inventory: technicalSkills,
  projectDetails: projects,
};