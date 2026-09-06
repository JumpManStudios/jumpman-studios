import Project from "@/components/projects/project";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
        <Project name="Project 1" description="Project 1 description" url={'someUrl'}/>
        <Project name="Project 2" description="Project 2 description" url={'someOtherUrl'}/>
    </div>
  );
};