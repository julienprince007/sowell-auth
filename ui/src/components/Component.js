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

export default {
  name: "SowellAuth",

  setup() {
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
                    }),
                    h(QInput, {
                      class: "full-width q-mb-md",
                      outlined: true,
                      rounded: true,
                      dense: true,
                      label: "Mot de passe",
                      type: "password",
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
