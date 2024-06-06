export interface Transaction {
  id: string;
  name: string;
  value: number;
  date: string;
  type: "INCOME" | "OUTCOME";
  categoryId: string;
  bankAccountId: string;
  category?: {
    id: string;
    name: string;
    icon: string;
  };
}
