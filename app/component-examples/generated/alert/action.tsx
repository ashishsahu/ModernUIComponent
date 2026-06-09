import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import { Button } from "@/registry/default/ui/button"

export function AlertActionPreview() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>
        Enable it under your profile settings to get started.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  )
}

