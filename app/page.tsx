import { MainLayout } from "../components/layout/main-layout"
import { TransactionsPage } from "../components/dashboard/transactions-page"

const currentUser = {
  name: "John Doe",
  initials: "JB",
}

export default function Dashboard() {
  return (
    <MainLayout user={currentUser}>
      <TransactionsPage />
    </MainLayout>
  )
}
