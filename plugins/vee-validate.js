import { extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Поле не заполнено"
});

extend("alpha", {
  ...alpha,
  message: "Поле должно быть заполнено только буквами"
});
