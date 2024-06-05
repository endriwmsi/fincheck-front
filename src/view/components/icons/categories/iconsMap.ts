import { Clothes } from "./outcome/Clothes";
import { Education } from "./outcome/Education";
import { Outcome } from "./outcome/Outcome";
import { Food } from "./outcome/Food";
import { Fun } from "./outcome/Fun";
import { Grocery } from "./outcome/Grocery";
import { Home } from "./outcome/Home";
import { Transport } from "./outcome/Transport";
import { Travel } from "./outcome/Travel";
import { Income } from "./income/Income";

export const iconsMap = {
  income: {
    default: Income,
  },
  outcome: {
    default: Outcome,
    food: Food,
    fun: Fun,
    grocery: Grocery,
    home: Home,
    education: Education,
    clothes: Clothes,
    transport: Transport,
    travel: Travel,
  },
};
