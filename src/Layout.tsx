import { Container } from "@gravity-ui/uikit";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container maxWidth="l">
      <Outlet />
    </Container>
  );
}
