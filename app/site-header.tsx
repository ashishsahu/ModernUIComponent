import Link from "next/link"

import { ComponentSearchInput } from "@/app/component-search"
import { GitHubLink } from "@/app/github-link"
import { ModeToggle } from "@/app/mode-toggle"

function ModernLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 118 23"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M11.0918 10.6846C11.0918 5.42789 15.3519 1.16772 20.6087 1.16772V10.6846H11.0918Z"
        fill="currentColor"
      />
      <path
        d="M0 1.17529C5.25672 1.17529 9.51688 5.43545 9.51688 10.6922H0V1.17529Z"
        fill="currentColor"
      />
      <path
        d="M20.8579 17.0173C20.8579 19.7856 18.6142 22.0293 15.8459 22.0293C13.0777 22.0293 10.834 19.7856 10.834 17.0173C10.834 14.2491 13.0777 12.0054 15.8459 12.0054C18.6142 12.0054 20.8579 14.2491 20.8579 17.0173Z"
        fill="currentColor"
      />
      <path
        d="M9.51688 12.2648H0V21.7817H9.51688V12.2648Z"
        fill="currentColor"
      />
      <path
        d="M35.5499 21.7723L29.0518 6.09538V21.7723H26.54V1.20581H29.5239L36.4882 18.0891L43.4233 1.20581H46.3081V21.7723H43.7963V6.09538L37.3623 21.7723H35.5499Z"
        fill="currentColor"
      />
      <path
        d="M54.9503 8.7953C52.2695 8.7953 50.661 11.074 50.661 14.3259C50.661 17.5779 52.2695 19.8566 54.9503 19.8566C57.6311 19.8566 59.2396 17.5779 59.2396 14.3259C59.2396 11.074 57.6311 8.7953 54.9503 8.7953ZM54.9503 22.0653C50.865 22.0653 48.1143 18.8833 48.1143 14.3259C48.1143 9.76855 50.8592 6.58655 54.9503 6.58655C59.0415 6.58655 61.7864 9.76855 61.7864 14.3259C61.7864 18.8833 59.0065 22.0653 54.9503 22.0653Z"
        fill="currentColor"
      />
      <path
        d="M74.0934 11.3235C73.3242 9.78497 71.8497 8.87583 70.2762 8.87583C67.4264 8.87583 65.7538 11.1895 65.7538 14.3365C65.7538 17.4836 67.4264 19.7972 70.2762 19.7972C71.8497 19.7972 73.3242 18.8939 74.0934 17.3495V11.3177V11.3235ZM74.0934 20.0303C73.3533 21.1027 71.7506 22.0759 69.9032 22.0759C65.5498 22.0759 63.2012 18.5559 63.2012 14.3365C63.2012 10.1172 65.544 6.59713 69.9032 6.59713C71.7448 6.59713 73.3533 7.57038 74.0934 8.64271V0H76.6402V21.7787H74.0934V20.0362V20.0303Z"
        fill="currentColor"
      />
      <path
        d="M81.0261 12.8865H88.9345C88.8995 10.6777 87.7281 8.73119 85.2513 8.73119C83.0075 8.73119 81.3991 10.2756 81.0319 12.8865M91.2773 17.3098C90.7411 20.1246 88.6314 22.0653 85.2804 22.0653C81.2242 22.0653 78.4443 18.9474 78.4443 14.3609C78.4443 9.77438 81.1601 6.58655 85.2105 6.58655C89.2608 6.58655 91.4754 9.57041 91.4754 13.8888V14.7922H80.9561C80.9911 17.9742 82.7628 19.9207 85.2804 19.9207C87.122 19.9207 88.4974 18.9824 88.8995 17.3098H91.2773Z"
        fill="currentColor"
      />
      <path
        d="M101.1 9.4014C100.698 9.13332 100.063 8.99928 99.4277 8.99928C97.8542 8.99928 96.4788 10.0366 95.9776 11.7792V21.7623H93.4658V6.88377H95.9776V8.83027C96.6129 7.5598 98.0232 6.58655 99.6608 6.58655C100.296 6.58655 100.832 6.68562 101.1 6.81966V9.4014Z"
        fill="currentColor"
      />
      <path
        d="M102.891 6.8896H105.402V8.76617C106.271 7.59477 107.879 6.58655 109.791 6.58655C113.177 6.58655 115.018 8.76616 115.018 12.0123V21.7623H112.472V12.4144C112.472 10.3397 111.434 8.89437 109.191 8.89437C107.448 8.89437 105.939 10.0658 105.402 11.6743V21.7564H102.891V6.88377V6.8896Z"
        fill="currentColor"
      />
      <path
        d="M115.361 6.57886H116.381V6.77118H115.979V7.84933H115.769V6.77118H115.361V6.57886Z"
        fill="currentColor"
      />
      <path
        d="M117.115 7.84933L116.777 6.9635V7.84933H116.579V6.57886H116.818L117.191 7.55211L117.564 6.57886H117.791V7.84933H117.593V6.9635L117.261 7.84933H117.115Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <ModernLogo className="h-6 w-auto shrink-0 text-foreground" />
          <span
            aria-hidden="true"
            className="bg-border hidden h-5 w-px sm:block"
          />
          <span className="text-muted-foreground hidden truncate text-sm sm:inline">
            Component Registry
          </span>
          <span className="sr-only">Modern — Component Registry</span>
        </Link>
        <ComponentSearchInput className="mx-auto hidden h-9 w-full max-w-md sm:block" />
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <ModeToggle />
          <GitHubLink className="text-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors" />
        </div>
      </div>
      <div className="border-t px-6 pb-3 sm:hidden">
        <ComponentSearchInput className="h-9 w-full" />
      </div>
    </header>
  )
}
