import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { InputCurrency } from "../../../../components/InputCurrency";
import { useNewAccountModalController } from "./useNewAccountModalController";
import { Select } from "../../../../components/Select";
import { ColorsDropDownInput } from "../../../../components/ColorsDropDownInput";
import { options } from "../../../../../app/config/constants";
import { Button } from "../../../../components/Button";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form>
        <div>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />

          <Select placeholder="Tipo" options={options} />

          <ColorsDropDownInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
