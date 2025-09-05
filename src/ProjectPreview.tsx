import { Heading, Image, Stack, Tag } from "@chakra-ui/react";
import type { Project } from "./App";

interface ProjectPreviewProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectPreview(props: ProjectPreviewProps) {
  const { project, onClick } = props;

  return (
    <Stack>
      <Image
        aspectRatio={3 / 2}
        src={`/about-me${project.logo}`}
        borderRadius={10}
        onClick={() => onClick(project)}
      />
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="baseline">
          <Heading>{project.name}</Heading>
          <Tag.Root>
            <Tag.Label>{project.type}</Tag.Label>
          </Tag.Root>
        </Stack>

        {new Date(project.createdAt).getFullYear()}
      </Stack>
    </Stack>
  );
}
