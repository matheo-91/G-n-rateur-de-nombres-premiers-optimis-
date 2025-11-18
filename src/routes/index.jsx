import { createFileRoute } from "@tanstack/react-router";
import { IndexPage } from "../pages/IndexPage.jsx";

export const Route = createFileRoute("/")({
  component: IndexPage,
});
