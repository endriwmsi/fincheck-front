import { createContext, useCallback, useState } from "react";
import { BankAccount } from "../../../../../app/entities/BankAccount";

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: "INCOME" | "OUTCOME" | null;
  toggleValueVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: "INCOME" | "OUTCOME"): void;
  closeNewTransactionModal(): void;
  isEditAccountModalOpen: boolean;
  isEditingAccount: null | BankAccount;
  openEditAccountModal(bankAccount: BankAccount): void;
  closeEditAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);

  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [isEditingAccount, setIsEditingAccount] = useState<null | BankAccount>(
    null
  );

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] = useState<
    "INCOME" | "OUTCOME" | null
  >(null);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);
  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setIsEditingAccount(bankAccount);
    setIsEditAccountModalOpen(true);
  }, []);
  const closeEditAccountModal = useCallback(() => {
    setIsEditingAccount(null);
    setIsEditAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: "INCOME" | "OUTCOME") => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);
  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValueVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        isNewTransactionModalOpen,
        openNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
        isEditAccountModalOpen,
        isEditingAccount,
        openEditAccountModal,
        closeEditAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
