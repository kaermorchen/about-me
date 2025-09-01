import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { Project } from "./Project.tsx";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter basename="/about-me">
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={""} />
            <Route path="projects">
              <Route path=":projectId" element={<Project />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
