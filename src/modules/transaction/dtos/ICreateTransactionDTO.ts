export default interface ICreateTransactionDTO {
  value: number;
  type: string;
  user_id: string;
  date: Date;
  payment_id: string;
  cost_id: string;
}
