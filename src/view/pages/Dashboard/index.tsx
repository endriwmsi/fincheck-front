import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts";
import {
  DashboardContext,
  DashboardProvider,
} from "./components/DashboardContext";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";
import { EditAccountModal } from "./modals/EditAccountModal";
import { NewAccountModal } from "./modals/NewAccountModal";
import { NewTransactionModal } from "./modals/NewTransactionsModal";

export function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
        {({ isEditingAccount }) => (
          <div className="w-full h-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
            <header className="flex h-12 items-center justify-between">
              <Logo className="text-teal-900 h-6" />

              <UserMenu />
            </header>

            <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
              <div className="w-full md:w-1/2">
                <Accounts />
              </div>

              <div className="w-full md:w-1/2">
                <Transactions />
              </div>
            </main>

            <Fab />
            <NewAccountModal />
            <NewTransactionModal />

            {isEditingAccount && <EditAccountModal />}
          </div>
        )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  );
}
