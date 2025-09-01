import { Heading, Image, Stack, Tag } from "@chakra-ui/react";

interface ProjectPreviewProps {
  src: string;
  name: string;
  date: string;
  type: string;
}

export function ProjectPreview(props: ProjectPreviewProps) {
  const { src, name, date, type } = props;

  return (
    <Stack>
      <Image
        aspectRatio={3 / 2}
        width="350px"
        src={`/about-me${src}`}
        borderRadius={10}
      />
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="baseline">
          <Heading>{name}</Heading>
          <Tag.Root>
            <Tag.Label>{type}</Tag.Label>
          </Tag.Root>
        </Stack>

        {new Date(date).getFullYear()}
      </Stack>
    </Stack>
  );
}
