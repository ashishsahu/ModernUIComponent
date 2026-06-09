import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"

export function TabsDisabledPreview() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

