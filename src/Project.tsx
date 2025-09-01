import {
  Drawer,
  Text,
  Portal,
  CloseButton,
  Stack,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";
import projects from "./projects.json";
import Carousel from "./Carousel";

export function Project() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const selectedProject = projects.data.find((item) => item.id === projectId);

  if (!selectedProject) {
    return;
  }

  return (
    <Drawer.Root
      size="xl"
      onOpenChange={(details) => !details.open && navigate("/")}
      open={true}
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Stack direction="row" alignItems="baseline">
                  <Heading>{selectedProject.attributes.name}</Heading>
                  <Tag.Root>
                    <Tag.Label>{selectedProject.attributes.type}</Tag.Label>
                  </Tag.Root>
                </Stack>
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack gap={30}>
                <Carousel
                  images={selectedProject.attributes.screenshots.map(
                    (item) => `/about-me${item.src}`
                  )}
                />
                <Stack gap={3}>
                  <Text>
                    <b>Year: </b>
                    {new Date(
                      selectedProject.attributes.createdAt
                    ).getFullYear()}{" "}
                    <b>Tags: </b>
                    {selectedProject.attributes.tags.map((item) => (
                      <Tag.Root key={item} marginRight={1}>
                        <Tag.Label>{item} </Tag.Label>
                      </Tag.Root>
                    ))}
                  </Text>
                  <Text>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedProject.attributes.html,
                      }}
                    />
                  </Text>
                </Stack>
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
