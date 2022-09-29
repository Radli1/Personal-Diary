import { extend } from "vee-validate";
import { required, alpha_dash, email } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Поле не заполнено"
});

extend("alpha_dash", {
  ...alpha_dash,
  message: "Поле должно быть заполнено только буквами, цифрами, тире, подчеркиваниями"
});

extend("email", {
  ...email,
  message: "Введите e-mail"
});
