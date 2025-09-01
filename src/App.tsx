import { Grid, Heading, Stack } from "@chakra-ui/react";
import projects from "./projects.json";
import { ProjectPreview } from "./ProjectPreview";

const sortedProjects = projects.data.sort(
  (a, b) =>
    +new Date(b.attributes.createdAt) - +new Date(a.attributes.createdAt)
);

export function App() {
  return (
    <Stack>
      <Heading size="2xl">Projects</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="20">
        {sortedProjects.map((item) => (
          <ProjectPreview
            src={item.attributes.logo}
            name={item.attributes.name}
            date={item.attributes.createdAt}
            type={item.attributes.type}
          />
        ))}
      </Grid>
    </Stack>
  );
}
