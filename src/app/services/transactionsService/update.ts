import { httpClient } from "../httpClient";

export interface UpdateTransactionParams {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: "INCOME" | "OUTCOME";
}

export async function update({ id, ...params }: UpdateTransactionParams) {
  const { data } = await httpClient.put(`/transactions/${id}`, params);

  return data;
}
