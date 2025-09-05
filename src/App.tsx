import {
  Container,
  Grid,
  Heading,
  SegmentGroup,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import projects from "./projects.json";
import { ProjectPreview } from "./ProjectPreview";
import { Outlet, useNavigate } from "react-router";
import { useState } from "react";

const sortedProjects = projects.data.sort(
  (a, b) =>
    +new Date(b.attributes.createdAt) - +new Date(a.attributes.createdAt)
);

export type Project = (typeof projects.data)[0]["attributes"];

const tags = Array.from(
  new Set(["All", ...projects.data.map((item) => item.attributes.type)])
);

export function App() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>("All");

  const filteredProjects = sortedProjects.filter(
    (item) => selectedTag === "All" || item.attributes.type === selectedTag
  );

  return (
    <Container>
      <Stack marginTop="40px" marginBottom="40px" gap={10}>
        <Heading size="2xl">Projects</Heading>

        <div>
          <SegmentGroup.Root
            value={selectedTag}
            onValueChange={(e) => setSelectedTag(e.value)}
          >
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={tags} />
          </SegmentGroup.Root>
        </div>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20">
          {filteredProjects.map((item) => (
            <ProjectPreview
              key={item.id}
              project={item.attributes}
              onClick={() => navigate(`/projects/${item.id}`)}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <Outlet />
    </Container>
  );
}
