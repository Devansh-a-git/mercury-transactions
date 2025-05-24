"use client"

import { Drawer, List, Box } from "@mui/material"
import { Home, Assignment, Receipt, Payment, CreditCard, TrendingUp, AccountBalance } from "@mui/icons-material"
import { NavigationItem } from "./navigation-item"
import { AccountBalance as AccountBalanceComponent } from "./account-balance"
import { SidebarHeader } from "./sidebar-header"
import { WorkflowControls } from "./workflow-controls"

const SIDEBAR_WIDTH = 256

// Navigation items directly in component
const NAVIGATION_ITEMS = [
  {
    id: "home",
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "tasks",
    name: "Tasks",
    href: "/tasks",
    badge: "5",
    icon: Assignment,
  },
  {
    id: "transactions",
    name: "Transactions",
    href: "/transactions",
    isActive: true,
    icon: Receipt,
  },
  {
    id: "payments",
    name: "Payments",
    href: "/payments",
    hasSubmenu: true,
    icon: Payment,
  },
  {
    id: "cards",
    name: "Cards",
    href: "/cards",
    icon: CreditCard,
  },
  {
    id: "capital",
    name: "Capital",
    href: "/capital",
    icon: TrendingUp,
  },
  {
    id: "accounts",
    name: "Accounts",
    href: "/accounts",
    hasSubmenu: true,
    icon: AccountBalance,
  },
]

// Account data directly in component
const ACCOUNTS = [
  { id: "credit-card", name: "Credit Card", balance: "", type: "credit" as const },
  { id: "treasury", name: "Treasury", balance: "$200,000.00", type: "treasury" as const },
  { id: "ops-payroll", name: "Ops / Payroll", balance: "$2,023,287.12", type: "ops" as const },
  { id: "ap", name: "AP", balance: "$226,767.82", type: "ap" as const },
  { id: "ar", name: "AR", balance: "$0.00", type: "ar" as const },
  { id: "checking", name: "Checking", balance: "$1,374,471.14", type: "checking" as const, accountNumber: "0297" },
  { id: "savings", name: "Savings", balance: "$1,320,201.00", type: "savings" as const, accountNumber: "7658" },
]

export function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          position: "relative",
          height: "100%",
        },
      }}
    >
      <SidebarHeader companyName="Mercury Demo" />

      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <List sx={{ py: 1 }}>
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationItem key={item.id} item={item} />
          ))}
        </List>

        <Box sx={{ px: 2, py: 1 }}>
          {ACCOUNTS.map((account) => (
            <AccountBalanceComponent key={account.id} account={account} />
          ))}
        </Box>
      </Box>

      <WorkflowControls />
    </Drawer>
  )
}
