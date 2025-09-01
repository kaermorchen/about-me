import { Drawer, Text, Portal, CloseButton, Stack } from "@chakra-ui/react";
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
              <Drawer.Title>{selectedProject.attributes.name}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack gap={30}>
                <Carousel
                  images={selectedProject.attributes.screenshots.map(
                    (item) => `/about-me${item.src}`
                  )}
                />
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.attributes.html,
                    }}
                  />
                </Text>
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
