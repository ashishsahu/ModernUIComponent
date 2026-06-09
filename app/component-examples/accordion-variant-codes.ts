const imports = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`

const cardImports = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"`

export const accordionVariantCodes = {
  basic: `${imports}

export function AccordionBasic() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
        <AccordionContent>
          Click Forgot Password on the login page, enter your email, and we'll
          send a reset link that expires in 24 hours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I change my subscription plan?</AccordionTrigger>
        <AccordionContent>
          Yes. Open billing settings to upgrade, downgrade, or switch between
          monthly and annual plans at any time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept major credit cards, debit cards, and select digital wallets.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  multiple: `${imports}

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="notifications">
        <AccordionTrigger>Notification settings</AccordionTrigger>
        <AccordionContent>
          Manage email alerts for updates or push notifications for mobile devices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy & security</AccordionTrigger>
        <AccordionContent>
          Control profile visibility, connected apps, and two-factor authentication.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>Billing & subscription</AccordionTrigger>
        <AccordionContent>
          View invoices, update payment methods, and manage renewal dates.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  disabled: `${imports}

export function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="history">
        <AccordionTrigger>Can I access my account history?</AccordionTrigger>
        <AccordionContent>
          Yes. Your recent activity is available under Account History.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="premium" disabled>
        <AccordionTrigger>Premium feature information</AccordionTrigger>
        <AccordionContent>
          Upgrade to Premium to unlock advanced analytics and priority support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="email">
        <AccordionTrigger>How do I update my email address?</AccordionTrigger>
        <AccordionContent>
          Go to Profile settings, enter a new email, and confirm the change.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  borders: `${imports}

export function AccordionBorders() {
  return (
    <Accordion type="single" collapsible className="w-full rounded-lg border">
      <AccordionItem value="billing" className="border-b last:border-b-0">
        <AccordionTrigger>How does billing work?</AccordionTrigger>
        <AccordionContent>
          We offer monthly and annual plans. Billing is charged at the start of each cycle.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security" className="border-b last:border-b-0">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Data is encrypted in transit and at rest with role-based access controls.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="integrations" className="border-b last:border-b-0">
        <AccordionTrigger>What integrations do you support?</AccordionTrigger>
        <AccordionContent>
          Connect Slack, GitHub, Linear, and custom webhooks from the integrations page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  card: `${cardImports}

export function AccordionCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Subscription & billing</CardTitle>
        <CardDescription>
          Common questions about plans, payments, and cancellations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="plans">
            <AccordionTrigger>What subscription plans do you offer?</AccordionTrigger>
            <AccordionContent>
              Starter, Professional, and Enterprise tiers with increasing storage and support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cycle">
            <AccordionTrigger>How does billing work?</AccordionTrigger>
            <AccordionContent>
              Plans renew automatically each month or year unless you cancel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cancel">
            <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
            <AccordionContent>
              Open Billing settings, choose Cancel plan, and confirm.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}`,
} as const
