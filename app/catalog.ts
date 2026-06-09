import { chartCatalogCategories } from "@/app/chart-catalog"

export type CatalogItem = {
  name: string
  title: string
  description: string
  install: string
}

export type CatalogCategory = {
  id: string
  title: string
  items: CatalogItem[]
}

const install = (name: string) =>
  `npx shadcn@latest add ashishsahu/ModernUIComponent/${name}`

const item = (
  name: string,
  title: string,
  description: string
): CatalogItem => ({
  name,
  title,
  description,
  install: install(name),
})

export const catalog: CatalogCategory[] = [
  {
    id: "foundation",
    title: "Foundation",
    items: [
      item(
        "project-setup",
        "Project Setup",
        "Install AGENTS.md and docs/modernui-setup.md — conventions for contributors and a step-by-step consumer install guide."
      ),
      item("theme", "Theme", "Figma Dev-Ready design tokens and CSS variables."),
      item("utils", "Utils", "cn() classname utility."),
    ],
  },
  {
    id: "actions",
    title: "Actions",
    items: [
      item("button", "Button", "Primary action with brand variant."),
      item("button-group", "Button Group", "Grouped button controls."),
      item("toggle", "Toggle", "Two-state toggle button."),
      item("toggle-group", "Toggle Group", "Mutually exclusive toggle set."),
    ],
  },
  {
    id: "forms",
    title: "Forms",
    items: [
      item("input", "Input", "Text input field."),
      item("textarea", "Textarea", "Multi-line text input."),
      item("label", "Label", "Accessible form label."),
      item("checkbox", "Checkbox", "Boolean checkbox control."),
      item("radio-group", "Radio Group", "Single-select radio options."),
      item("switch", "Switch", "On/off toggle switch."),
      item("select", "Select", "Dropdown select menu."),
      item("native-select", "Native Select", "Native HTML select."),
      item("slider", "Slider", "Range slider input."),
      item("input-otp", "Input OTP", "One-time password input."),
      item("input-group", "Input Group", "Input with addons and buttons."),
      item("field", "Field", "Form field wrapper with label and message."),
      item("form", "Form", "React Hook Form integration."),
      item("combobox", "Combobox", "Searchable select combobox."),
    ],
  },
  {
    id: "layout",
    title: "Layout",
    items: [
      item("card", "Card", "Content container with header and footer."),
      item("separator", "Separator", "Visual divider."),
      item("aspect-ratio", "Aspect Ratio", "Fixed aspect ratio container."),
      item("scroll-area", "Scroll Area", "Custom scrollable region."),
      item("resizable", "Resizable", "Resizable panel groups."),
      item("direction", "Direction", "RTL/LTR direction provider."),
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    items: [
      item("tabs", "Tabs", "Tabbed content navigation."),
      item("accordion", "Accordion", "Expandable sections."),
      item("breadcrumb", "Breadcrumb", "Hierarchy navigation trail."),
      item("navigation-menu", "Navigation Menu", "Site navigation menu."),
      item("menubar", "Menubar", "Application menu bar."),
      item("pagination", "Pagination", "Paged navigation controls."),
      item("sidebar", "Sidebar", "Collapsible app sidebar."),
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    items: [
      item("dialog", "Dialog", "Modal dialog."),
      item("alert-dialog", "Alert Dialog", "Confirmation modal."),
      item("sheet", "Sheet", "Edge-aligned panel."),
      item("drawer", "Drawer", "Mobile-friendly bottom drawer."),
      item("popover", "Popover", "Floating content panel."),
      item("hover-card", "Hover Card", "Rich content on hover."),
      item("tooltip", "Tooltip", "Short hint on hover."),
      item("dropdown-menu", "Dropdown Menu", "Action dropdown menu."),
      item("context-menu", "Context Menu", "Right-click context menu."),
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    items: [
      item("alert", "Alert", "Inline status message."),
      item("badge", "Badge", "Status label chip."),
      item("progress", "Progress", "Progress indicator bar."),
      item("skeleton", "Skeleton", "Loading placeholder."),
      item("spinner", "Spinner", "Loading spinner."),
      item("sonner", "Sonner", "Toast notifications."),
      item("empty", "Empty", "Empty state placeholder."),
    ],
  },
  {
    id: "data",
    title: "Data Display",
    items: [
      item("table", "Table", "Data table primitives."),
      item(
        "chart",
        "Chart",
        "Beautiful charts built with Recharts — interactive demos and composition examples."
      ),
      item(
        "calendar",
        "Calendar",
        "React DayPicker calendar with doc examples and 32 block layouts."
      ),
      item("carousel", "Carousel", "Content carousel."),
      item("avatar", "Avatar", "User avatar with fallback."),
      item("kbd", "Kbd", "Keyboard shortcut badge."),
      item("item", "Item", "List item layout primitive."),
      item("collapsible", "Collapsible", "Show/hide content region."),
      item("command", "Command", "Command palette search."),
    ],
  },
  ...chartCatalogCategories,
  {
    id: "blocks",
    title: "Blocks",
    items: [
      item("login", "Login", "Authentication layouts and login form blocks."),
      item("signup", "Signup", "Registration layouts and signup form blocks."),
      item(
        "login-form",
        "Login Form",
        "Sign-in form block with Zod validation."
      ),
    ],
  },
]

export const allComponents = catalog.flatMap((category) => category.items)
