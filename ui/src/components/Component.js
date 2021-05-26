import { h } from "vue";
import {
  QPage,
  QCard,
  QCardSection,
  QForm,
  QInput,
  QCardActions,
  QBtn,
} from "quasar";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "SowellAuth",

  props: {
    store: Object,
  },

  setup({ store }) {
    const email = ref("");
    const password = ref("");

    const submitHandler = async () => {
      console.log("submit....");

      const data = {
        auth: { email: "gardienb@sowellapp.com", password: "123456" },
      };

      var response = "";
      try {
        response = await axios.post("https://api.sowellapp.com/tokens", data);
        if (response.status == "201") {
          console.log(response);
          store.commit("auth/setJWT", response.data.jwt);
        } else {
          console.log("Not 201");
          store.commit("auth/clearJWT");
        }
      } catch (err) {
        console.log("Error...");
        store.commit("auth/clearJWT");
      }
    };

    return () => [
      h(
        QPage,
        {
          class: "flex flex-center",
        },
        [
          h(
            QCard,
            {
              class: "card",
            },
            [
              h(QCardSection, [
                h(
                  "div",
                  {
                    class: "text-6 text-center title",
                  },
                  "Vos identifiants d'accès"
                ),
              ]),
              h(
                QForm,
                {
                  class: "q-gutter-md",
                  submit: submitHandler,
                },
                [
                  h(QCardSection, [
                    h(QInput, {
                      class: "full-width q-mb-md",
                      outlined: true,
                      rounded: true,
                      dense: true,
                      label: "Email",
                      type: "email",
                      modelValue: email,
                    }),
                    h(QInput, {
                      class: "full-width q-mb-md",
                      outlined: true,
                      rounded: true,
                      dense: true,
                      label: "Mot de passe",
                      type: "password",
                      modelValue: password,
                    }),
                  ]),
                  h(
                    QCardActions,
                    h(QBtn, {
                      label: "Connexion",
                      class: "full-width",
                      rounded: true,
                      dense: true,
                      color: "primary",
                      type: "submit",
                    })
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ];
  },
};
