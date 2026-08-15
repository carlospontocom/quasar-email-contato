# Formulário de Contato - Quasar Framework & EmailJS

Projeto desenvolvido em **Vue 3** e **Quasar Framework** para envio de mensagens via formulário de contato integrado com a API REST do **EmailJS** utilizando **Axios**.

---

## 🚀 Tecnologias Utilizadas

* **Vue 3** (Script Setup)
* **Quasar Framework** (UI Components & Validation)
* **Axios** (Requisições HTTP)
* **EmailJS** (Serviço de envio de e-mails)
* **Vite** (Build tool)

---

## 🛠️ Configuração de Variáveis de Ambiente (.env)

Para que a integração com o EmailJS funcione, crie um arquivo `.env` na raiz do projeto com o seguinte formato:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key