import {
  ProjectSetupAgentsPreview,
  ProjectSetupConsumerPreview,
  ProjectSetupOverviewPreview,
} from "@/app/component-examples/project-setup-detail"
import { projectSetupCodes } from "@/app/component-examples/project-setup-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const projectSetupVariantPage: ComponentVariantPage = {
  name: "project-setup",
  title: "Project Setup",
  description:
    "Install AGENTS.md and consumer documentation into your project.",
  install: "npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup",
  variants: [
    {
      id: "overview",
      title: "Overview",
      description: "What gets installed and the recommended setup order.",
      Preview: ProjectSetupOverviewPreview,
      code: projectSetupCodes.overview,
    },
    {
      id: "agents",
      title: "AGENTS.md",
      description: "Agent and contributor conventions copied to your project root.",
      Preview: ProjectSetupAgentsPreview,
      code: projectSetupCodes.agents,
    },
    {
      id: "consumer-guide",
      title: "Consumer Guide",
      description: "Setup documentation installed as docs/modernui-setup.md.",
      Preview: ProjectSetupConsumerPreview,
      code: projectSetupCodes.consumer,
    },
  ],
}
