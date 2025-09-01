import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
