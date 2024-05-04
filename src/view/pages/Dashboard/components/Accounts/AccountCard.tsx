import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";

interface AccountCardProps {
  name: string;
  balance: number;
  color: string;
  type: "CASH" | "CHECKING" | "INVESTMENT";
}

export function AccountCard({ name, balance, color, type }: AccountCardProps) {
  return (
    <div
      className="flex flex-col justify-between bg-white rounded-2xl p-4 h-[200px] border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>

        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
