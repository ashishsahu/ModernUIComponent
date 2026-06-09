const ui = "@/registry/default/ui"

export const docVariantDefinitions = {
  "button-group": [
    {
      id: "default",
      title: "Default",
      description: "Grouped actions with nested groups and a dropdown menu.",
      source: `"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "${ui}/button"
import { ButtonGroup } from "${ui}/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "${ui}/dropdown-menu"

export default function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}`,
    },
    {
      id: "orientation",
      title: "Orientation",
      description: "Vertical button group layout.",
      source: `import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "${ui}/button"
import { ButtonGroup } from "${ui}/button-group"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
      <Button variant="outline" size="icon"><PlusIcon /></Button>
      <Button variant="outline" size="icon"><MinusIcon /></Button>
    </ButtonGroup>
  )
}`,
    },
    {
      id: "size",
      title: "Size",
      description: "Small, default, and large buttons in a group.",
      source: `import { PlusIcon } from "lucide-react"
import { Button } from "${ui}/button"
import { ButtonGroup } from "${ui}/button-group"

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="sm"><PlusIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline"><PlusIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="lg"><PlusIcon /></Button>
      </ButtonGroup>
    </div>
  )
}`,
    },
    {
      id: "separator",
      title: "Separator",
      description: "Separate button groups visually.",
      source: `import { Button } from "${ui}/button"
import { ButtonGroup, ButtonGroupSeparator } from "${ui}/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  )
}`,
    },
    {
      id: "split",
      title: "Split",
      description: "Primary action with a secondary trigger.",
      source: `import { ChevronDownIcon } from "lucide-react"
import { Button } from "${ui}/button"
import { ButtonGroup } from "${ui}/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button>Save</Button>
      <Button size="icon" aria-label="More save options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}`,
    },
    {
      id: "input",
      title: "Input",
      description: "Button group with an input field.",
      source: `import { Button } from "${ui}/button"
import { ButtonGroup } from "${ui}/button-group"
import { Input } from "${ui}/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}`,
    },
  ],
  direction: [
    {
      id: "default",
      title: "RTL",
      description: "Right-to-left direction provider.",
      source: `import { DirectionProvider } from "${ui}/direction"

export default function DirectionDemo() {
  return (
    <DirectionProvider dir="rtl">
      <p className="text-sm">RTL content — مرحبا</p>
    </DirectionProvider>
  )
}`,
    },
    {
      id: "ltr",
      title: "LTR",
      description: "Left-to-right direction provider.",
      source: `import { DirectionProvider } from "${ui}/direction"

export default function DirectionLtr() {
  return (
    <DirectionProvider dir="ltr">
      <p className="text-sm">LTR content — Hello</p>
    </DirectionProvider>
  )
}`,
    },
  ],
  empty: [
    {
      id: "default",
      title: "Default",
      description: "Empty state with icon, title, and description.",
      source: `import { InboxIcon } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "${ui}/empty"

export default function EmptyDemo() {
  return (
    <Empty className="max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You are all caught up.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}`,
    },
    {
      id: "with-action",
      title: "With Action",
      description: "Empty state with a call-to-action button.",
      source: `import { InboxIcon } from "lucide-react"
import { Button } from "${ui}/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "${ui}/empty"

export default function EmptyWithAction() {
  return (
    <Empty className="max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Create your first project to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Create project</Button>
      </EmptyContent>
    </Empty>
  )
}`,
    },
  ],
  field: [
    {
      id: "default",
      title: "Field",
      description: "Label, control, and description for a single field.",
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Input } from "${ui}/input"

export default function FieldDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@company.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  )
}`,
    },
    {
      id: "invalid",
      title: "Invalid",
      description: "Invalid field state with error styling.",
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Input } from "${ui}/input"

export default function FieldInvalid() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="email-invalid">Email</FieldLabel>
      <Input id="email-invalid" aria-invalid placeholder="you@company.com" />
      <FieldDescription>Please enter a valid email address.</FieldDescription>
    </Field>
  )
}`,
    },
    {
      id: "horizontal",
      title: "Horizontal",
      description: "Horizontal field orientation with a checkbox.",
      source: `import { Checkbox } from "${ui}/checkbox"
import { Field, FieldLabel } from "${ui}/field"

export default function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="terms-field" defaultChecked />
      <FieldLabel htmlFor="terms-field" className="font-normal">
        Accept terms and conditions
      </FieldLabel>
    </Field>
  )
}`,
    },
  ],
  form: [
    {
      id: "default",
      title: "React Hook Form",
      description: "Form component integrated with React Hook Form and Zod.",
      source: `"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "${ui}/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "${ui}/form"
import { Input } from "${ui}/input"

const FormSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
})

export default function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "" },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({ title: "Submitted", description: JSON.stringify(data, null, 2) })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    },
  ],
  "input-group": [
    {
      id: "default",
      title: "Default",
      description: "Input with icon addon and keyboard hint.",
      source: `import { SearchIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "${ui}/input-group"

export default function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon><SearchIcon /></InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>⌘K</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
    },
    {
      id: "button",
      title: "Button",
      description: "Input group with trailing button addon.",
      source: `import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "${ui}/input-group"

export default function InputGroupButtonDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Enter your domain" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="default">Check</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
    },
    {
      id: "textarea",
      title: "Textarea",
      description: "Multi-line input group with block-end addons.",
      source: `import { ArrowUpIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "${ui}/input-group"

export default function InputGroupTextareaDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupTextarea placeholder="Ask, search, or make anything..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-sm" variant="default" className="ml-auto rounded-full">
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
    },
  ],
  item: [
    {
      id: "default",
      title: "Default",
      description: "Item with icon, title, and description.",
      source: `import { ChevronRightIcon, UserIcon } from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "${ui}/item"

export default function ItemDemo() {
  return (
    <Item variant="outline" className="max-w-sm">
      <ItemMedia variant="icon"><UserIcon /></ItemMedia>
      <ItemContent>
        <ItemTitle>ModernUI</ItemTitle>
        <ItemDescription>Component registry</ItemDescription>
      </ItemContent>
      <ChevronRightIcon className="text-muted-foreground size-4" />
    </Item>
  )
}`,
    },
    {
      id: "muted",
      title: "Muted",
      description: "Muted item variant for secondary content.",
      source: `import { UserIcon } from "lucide-react"
import { Item, ItemContent, ItemMedia, ItemTitle } from "${ui}/item"

export default function ItemMuted() {
  return (
    <Item variant="muted" className="max-w-sm">
      <ItemMedia variant="icon"><UserIcon /></ItemMedia>
      <ItemContent>
        <ItemTitle>Processing payment...</ItemTitle>
      </ItemContent>
    </Item>
  )
}`,
    },
  ],
  kbd: [
    {
      id: "default",
      title: "Default",
      description: "Keyboard shortcut keys.",
      source: `import { Kbd } from "${ui}/kbd"

export default function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  )
}`,
    },
    {
      id: "group",
      title: "Group",
      description: "Grouped keyboard shortcuts in a sentence.",
      source: `import { Kbd, KbdGroup } from "${ui}/kbd"

export default function KbdGroupDemo() {
  return (
    <p className="text-muted-foreground text-sm">
      Press <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> to open command palette
    </p>
  )
}`,
    },
  ],
  "native-select": [
    {
      id: "default",
      title: "Default",
      description: "Styled native select element.",
      source: `import { NativeSelect, NativeSelectOption } from "${ui}/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelect defaultValue="apple" className="w-[180px]">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="orange">Orange</NativeSelectOption>
    </NativeSelect>
  )
}`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled native select state.",
      source: `import { NativeSelect, NativeSelectOption } from "${ui}/native-select"

export default function NativeSelectDisabled() {
  return (
    <NativeSelect defaultValue="apple" disabled className="w-[180px]">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  )
}`,
    },
  ],
  spinner: [
    {
      id: "default",
      title: "Default",
      description: "Loading spinner in an item layout.",
      source: `import { Item, ItemContent, ItemMedia, ItemTitle } from "${ui}/item"
import { Spinner } from "${ui}/spinner"

export default function SpinnerDemo() {
  return (
    <Item variant="muted" className="max-w-sm">
      <ItemMedia><Spinner /></ItemMedia>
      <ItemContent><ItemTitle>Processing payment...</ItemTitle></ItemContent>
    </Item>
  )
}`,
    },
    {
      id: "size",
      title: "Size",
      description: "Different spinner sizes.",
      source: `import { Spinner } from "${ui}/spinner"

export default function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}`,
    },
    {
      id: "button",
      title: "Button",
      description: "Spinner inside loading buttons.",
      source: `import { Button } from "${ui}/button"
import { Spinner } from "${ui}/spinner"

export default function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
    </div>
  )
}`,
    },
    {
      id: "badge",
      title: "Badge",
      description: "Spinner inside badges.",
      source: `import { Badge } from "${ui}/badge"
import { Spinner } from "${ui}/spinner"

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4">
      <Badge><Spinner data-icon="inline-start" />Syncing</Badge>
      <Badge variant="secondary"><Spinner data-icon="inline-start" />Updating</Badge>
    </div>
  )
}`,
    },
  ],
  textarea: [
    {
      id: "field",
      title: "Field",
      description: "Textarea with Field label and description.",
      merge: true,
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Textarea } from "${ui}/textarea"

export default function TextareaField() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}`,
    },
    {
      id: "invalid",
      title: "Invalid",
      description: "Invalid textarea state with Field error styling.",
      merge: true,
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Textarea } from "${ui}/textarea"

export default function TextareaInvalid() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}`,
    },
    {
      id: "rtl",
      title: "RTL",
      description: "Right-to-left textarea with translations.",
      merge: true,
      source: `"use client"

import { useTranslation, type Translations } from "@/components/language-selector"
import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Textarea } from "${ui}/textarea"

const translations: Translations = {
  en: { dir: "ltr", values: { label: "Feedback", placeholder: "Your feedback helps us improve...", description: "Share your thoughts." } },
  ar: { dir: "rtl", values: { label: "التعليقات", placeholder: "تعليقاتك تساعدنا على التحسين...", description: "شاركنا أفكارك." } },
}

export default function TextareaRtl() {
  const { dir, t } = useTranslation(translations, "ar")
  return (
    <Field className="max-w-xs" dir={dir}>
      <FieldLabel htmlFor="feedback" dir={dir}>{t.label}</FieldLabel>
      <Textarea id="feedback" placeholder={t.placeholder} dir={dir} rows={4} />
      <FieldDescription dir={dir}>{t.description}</FieldDescription>
    </Field>
  )
}`,
    },
  ],
  input: [
    {
      id: "field",
      title: "Field",
      description: "Input with Field label and description.",
      merge: true,
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Input } from "${ui}/input"

export default function InputField() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="input-email">Email</FieldLabel>
      <Input id="input-email" type="email" placeholder="you@company.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  )
}`,
    },
    {
      id: "invalid",
      title: "Invalid",
      description: "Invalid input state with Field error styling.",
      merge: true,
      source: `import { Field, FieldDescription, FieldLabel } from "${ui}/field"
import { Input } from "${ui}/input"

export default function InputInvalid() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="input-invalid">Email</FieldLabel>
      <Input id="input-invalid" aria-invalid placeholder="you@company.com" />
      <FieldDescription>Please enter a valid email address.</FieldDescription>
    </Field>
  )
}`,
    },
  ],
}
