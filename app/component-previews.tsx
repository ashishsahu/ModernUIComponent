"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  AlertCircleIcon,
  ChevronRightIcon,
  InboxIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react"

import { AccordionBasicPreview } from "@/app/component-examples/accordion-variants"
import { ProjectSetupOverviewPreview } from "@/app/component-examples/project-setup-detail"
import { authBlockCatalogPreviews } from "@/app/component-examples/auth-block-catalog-previews"
import { ChartCatalogPreview } from "@/app/component-examples/chart-detail/catalog-preview"
import { chartPreviewEntries } from "@/app/chart-previews"
import { ThemePalettePreview } from "@/app/theme-palette-preview"
import { LoginForm } from "@/registry/default/blocks/login-form/login-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/default/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/registry/default/ui/alert"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import { Badge } from "@/registry/default/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import { Button } from "@/registry/default/ui/button"
import { ButtonGroup } from "@/registry/default/ui/button-group"
import { Calendar } from "@/registry/default/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel"
import { Checkbox } from "@/registry/default/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/default/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { DirectionProvider } from "@/registry/default/ui/direction"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"
import { Input } from "@/registry/default/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item"
import { Kbd } from "@/registry/default/ui/kbd"
import { Label } from "@/registry/default/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/registry/default/ui/menubar"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/default/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/registry/default/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Progress } from "@/registry/default/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable"
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { Separator } from "@/registry/default/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/default/ui/sidebar"
import { Skeleton } from "@/registry/default/ui/skeleton"
import { Slider } from "@/registry/default/ui/slider"
import { Spinner } from "@/registry/default/ui/spinner"
import { Switch } from "@/registry/default/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"
import { Textarea } from "@/registry/default/ui/textarea"
import { Toggle } from "@/registry/default/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

const comboboxItems = ["Next.js", "React", "Tailwind CSS", "TypeScript"]

export const componentPreviews: Record<string, React.ReactNode> = {
  theme: <ThemePalettePreview />,
  utils: (
    <code className="bg-muted rounded-md px-3 py-2 text-sm">
      cn(&quot;px-4&quot;, condition &amp;&amp; &quot;bg-primary&quot;)
    </code>
  ),
  button: (
    <div className="flex flex-wrap justify-center gap-2">
      <Button>Default</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  "button-group": (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
  toggle: <Toggle aria-label="Toggle bold">Bold</Toggle>,
  "toggle-group": (
    <ToggleGroup type="single" defaultValue="a">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
  input: (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
  textarea: <Textarea className="max-w-sm" placeholder="Write a message..." />,
  label: (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="demo-label">Email</Label>
      <Input id="demo-label" placeholder="you@company.com" />
    </div>
  ),
  checkbox: (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  ),
  "radio-group": (
    <RadioGroup defaultValue="comfortable" className="max-w-sm">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  ),
  switch: (
    <div className="flex items-center gap-2">
      <Switch id="airplane" defaultChecked />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
  select: (
    <Select defaultValue="apple">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
  "native-select": (
    <NativeSelect defaultValue="apple" className="w-[180px]">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  ),
  slider: <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />,
  "input-otp": (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  "input-group": (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>⌘K</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
  field: (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" placeholder="you@company.com" />
        <FieldDescription>We never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
  form: (
    <p className="text-muted-foreground max-w-sm text-center text-sm">
      Form integrates with React Hook Form. Install and wire to your schema.
    </p>
  ),
  combobox: (
    <Combobox items={comboboxItems} defaultValue={comboboxItems[0]}>
      <ComboboxInput placeholder="Select framework" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No results.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  card: (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Card content area.</p>
      </CardContent>
    </Card>
  ),
  separator: (
    <div className="flex w-full max-w-sm items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator className="flex-1" />
      <span className="text-sm">Right</span>
    </div>
  ),
  "aspect-ratio": (
    <AspectRatio ratio={16 / 9} className="bg-muted max-w-sm overflow-hidden rounded-lg">
      <div className="flex h-full items-center justify-center text-sm">16:9</div>
    </AspectRatio>
  ),
  "scroll-area": (
    <ScrollArea className="h-28 w-full max-w-sm rounded-md border p-4">
      {Array.from({ length: 12 }, (_, i) => (
        <p key={i} className="text-sm">
          Scroll item {i + 1}
        </p>
      ))}
    </ScrollArea>
  ),
  resizable: (
    <ResizablePanelGroup orientation="horizontal" className="max-w-sm rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-20 items-center justify-center p-4 text-sm">One</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-20 items-center justify-center p-4 text-sm">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  direction: (
    <DirectionProvider dir="rtl">
      <p className="text-sm">RTL content — مرحبا</p>
    </DirectionProvider>
  ),
  tabs: (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  ),
  accordion: (
    <div className="w-full max-w-sm">
      <AccordionBasicPreview />
    </div>
  ),
  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  "navigation-menu": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
            Getting started
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  menubar: (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  pagination: (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  sidebar: (
    <div className="relative isolate mx-auto w-full max-w-sm overflow-hidden rounded-lg border [transform:translateZ(0)] [&_[data-slot=sidebar-wrapper]]:!min-h-0 [&_[data-slot=sidebar-wrapper]]:min-h-40 [&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:top-0 [&_[data-slot=sidebar-container]]:!h-full">
      <SidebarProvider className="min-h-40">
        <Sidebar collapsible="offcanvas">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex min-h-40 items-center justify-center p-4">
            <SidebarTrigger />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
  dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Modal content using ModernUI tokens.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  "alert-dialog": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  sheet: (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Side panel content.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  drawer: (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Bottom drawer content.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  popover: (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">Popover content</PopoverContent>
    </Popover>
  ),
  "hover-card": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@modernui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        ModernUI component registry on GitHub.
      </HoverCardContent>
    </HoverCard>
  ),
  tooltip: (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  "context-menu": (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  alert: (
    <Alert className="max-w-sm">
      <AlertCircleIcon />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components via the shadcn CLI.</AlertDescription>
    </Alert>
  ),
  badge: (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  progress: <Progress value={66} className="max-w-sm" />,
  skeleton: (
    <div className="flex w-full max-w-sm items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
  spinner: <Spinner />,
  sonner: (
    <Button
      variant="outline"
      onClick={() => toast("ModernUI toast", { description: "From Sonner" })}
    >
      Show toast
    </Button>
  ),
  empty: (
    <Empty className="max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You are all caught up.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  table: (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  chart: <ChartCatalogPreview />,
  calendar: (
    <Calendar mode="single" className="rounded-md border" />
  ),
  carousel: (
    <Carousel className="mx-auto w-full max-w-sm">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <Card>
              <CardContent className="flex aspect-video items-center justify-center">
                Slide {n}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  avatar: (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>MU</AvatarFallback>
    </Avatar>
  ),
  kbd: (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
  item: (
    <Item variant="outline" className="max-w-sm">
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>ModernUI</ItemTitle>
        <ItemDescription>Component registry</ItemDescription>
      </ItemContent>
      <ChevronRightIcon className="text-muted-foreground size-4" />
    </Item>
  ),
  collapsible: (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Toggle details
          <PlusIcon className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground pt-2 text-sm">
        Hidden content revealed on expand.
      </CollapsibleContent>
    </Collapsible>
  ),
  command: (
    <Command className="max-w-sm rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  ...authBlockCatalogPreviews,
  "login-form": <LoginForm />,
  ...chartPreviewEntries,
  "project-setup": <ProjectSetupOverviewPreview />,
}
