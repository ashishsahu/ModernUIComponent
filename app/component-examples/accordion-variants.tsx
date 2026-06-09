"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export function AccordionBasicPreview() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
        <AccordionContent>
          Click Forgot Password on the login page, enter your email, and
          we&apos;ll send a reset link that expires in 24 hours.
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
          We accept major credit cards, debit cards, and select digital wallets
          depending on your region.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionMultiplePreview() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="notifications">
        <AccordionTrigger>Notification settings</AccordionTrigger>
        <AccordionContent>
          Manage email alerts for updates or push notifications for mobile
          devices from your account preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy &amp; security</AccordionTrigger>
        <AccordionContent>
          Control profile visibility, connected apps, and two-factor
          authentication from the security tab.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>Billing &amp; subscription</AccordionTrigger>
        <AccordionContent>
          View invoices, update payment methods, and manage renewal dates in the
          billing section.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionDisabledPreview() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="history">
        <AccordionTrigger>Can I access my account history?</AccordionTrigger>
        <AccordionContent>
          Yes. Your recent activity is available under Account History in
          settings.
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
          Go to Profile settings, enter a new email, and confirm the change
          from your inbox.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionBordersPreview() {
  return (
    <Accordion type="single" collapsible className="w-full rounded-lg border">
      <AccordionItem value="billing" className="border-b last:border-b-0">
        <AccordionTrigger>How does billing work?</AccordionTrigger>
        <AccordionContent>
          We offer monthly and annual plans. Billing is charged at the start of
          each cycle and you can cancel anytime.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security" className="border-b last:border-b-0">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Data is encrypted in transit and at rest with role-based access
          controls for your team.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="integrations" className="border-b last:border-b-0">
        <AccordionTrigger>What integrations do you support?</AccordionTrigger>
        <AccordionContent>
          Connect Slack, GitHub, Linear, and custom webhooks from the
          integrations page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionCardPreview() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Subscription &amp; billing</CardTitle>
        <CardDescription>
          Common questions about plans, payments, and cancellations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="plans">
            <AccordionTrigger>What subscription plans do you offer?</AccordionTrigger>
            <AccordionContent>
              Starter, Professional, and Enterprise tiers with increasing
              storage, API access, and support levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cycle">
            <AccordionTrigger>How does billing work?</AccordionTrigger>
            <AccordionContent>
              Plans renew automatically each month or year unless you cancel
              before the next billing date.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cancel">
            <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
            <AccordionContent>
              Open Billing settings, choose Cancel plan, and confirm. Access
              continues until the end of the current period.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
