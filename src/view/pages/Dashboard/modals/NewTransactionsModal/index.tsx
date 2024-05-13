import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { InputCurrency } from "../../../../components/InputCurrency";
import { useNewTransactionModalController } from "./useNewTransactionModalController";
import { Select } from "../../../../components/Select";
import { options } from "../../../../../app/config/constants";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      title={isExpense ? "Nova Despesa" : "Nova Receita"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor {isExpense ? "da despesa" : "da receita"}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}
          />

          <Select placeholder="Categoria" options={options} />

          <Select
            placeholder={isExpense ? "Pagar com" : "Receber com"}
            options={options}
          />

          <DatePickerInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
