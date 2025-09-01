import {
  Button,
  CloseButton,
  Container,
  Drawer,
  Grid,
  Heading,
  Portal,
  Stack,
} from "@chakra-ui/react";
import projects from "./projects.json";
import { ProjectPreview } from "./ProjectPreview";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

const sortedProjects = projects.data.sort(
  (a, b) =>
    +new Date(b.attributes.createdAt) - +new Date(a.attributes.createdAt)
);

export type Project = (typeof projects.data)[0]["attributes"];

export function App() {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack marginTop="40px" marginBottom="40px">
        <Heading size="2xl">Projects</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap="20">
          {sortedProjects.map((item) => (
            <ProjectPreview
              key={item.id}
              project={item.attributes}
              onClick={() => navigate(`/projects/${item.id}`)}
            />
          ))}
        </Grid>
      </Stack>
      <Outlet />
    </Container>
  );
}
