import { h, ref } from 'vue'
import {
  QPage,
  QCard,
  QCardSection,
  QForm,
  QInput,
  QCardActions,
  QBtn,
} from 'quasar'
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'SowellAuth',

  props: {
    store: Object,
  },

  setup({ store }) {
    const email = ref('')
    const password = ref('')

    const validations = {
      email: [
        (val) => !!val || "L'adresse email doit être fourni",
        (val) => isEmail || 'Email non valide',
      ],
      password: [(val) => !!val || 'Le mot de passe doit être fourni'],
    }

    const submitHandler = () => {
      console.log('email....', email.value)
      console.log('password....', password.value)

      /*const data = {
        auth: { email: 'gardienb@sowellapp.com', password: '123456' },
      }

      var response = ''
      try {
        response = await axios.post('https://api.sowellapp.com/tokens', data)
        if (response.status == '201') {
          console.log(response)
          store.commit('auth/setJWT', response.data.jwt)
        } else {
          console.log('Not 201')
          store.commit('auth/clearJWT')
        }
      } catch (err) {
        console.log('Error...')
        store.commit('auth/clearJWT')
      }*/
    }

    return () => [
      h(
        QPage,
        {
          class: 'flex flex-center',
        },
        [
          h(
            QCard,
            {
              class: 'card',
            },
            [
              h(QCardSection, [
                h(
                  'div',
                  {
                    class: 'text-6 text-center title',
                  },
                  "Vos identifiants d'accès"
                ),
              ]),
              h(
                QForm,
                {
                  class: 'q-gutter-md',
                  submit: submitHandler,
                },
                [
                  h(QCardSection, [
                    h(QInput, {
                      class: 'full-width q-mb-md',
                      outlined: true,
                      rounded: true,
                      dense: true,
                      label: 'Email',
                      props: {
                        'v-model': email.value,
                      },
                      type: 'email',
                      modelValue: email,
                    }),
                    h(QInput, {
                      class: 'full-width q-mb-md',
                      outlined: true,
                      rounded: true,
                      dense: true,
                      label: 'Mot de passe',
                      type: 'password',
                      modelValue: password,
                      props: {
                        'v-model': password.value,
                      },
                      rules: [validations['password']],
                    }),
                  ]),
                  h(
                    QCardActions,
                    h(QBtn, {
                      label: 'Connexion',
                      class: 'full-width',
                      rounded: true,
                      dense: true,
                      color: 'primary',
                      type: 'submit',
                      onClick: (event) => submitHandler(),
                    })
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  },
}
