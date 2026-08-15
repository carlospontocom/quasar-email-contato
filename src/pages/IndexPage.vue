<template>
  <q-page class="flex flex-center col-12 q-pa-lg">

    <div class="form-content">
      <h1>Fale com nossa empresa</h1>
      <p>Para saber mais informações</p>
      <q-form ref="formContato" class="column q-gutter-y-md" @submit="validar">
        <q-input label="Nome" v-model="nome" :rules="[(val)=> !! val || 'Preencha o campo!']" outlined type="text"/>
        <q-input label="E-mail" v-model="email" :rules="[(val)=> !! val || 'Preencha o campo!']" outlined type="text"/>
        <q-input label="Telefone" mask="(##) #####-####" fill-mask unmasked-value v-model="telefone" :rules="[(val)=> !! val || 'Preencha o campo!']" outlined type="tel"/>
        <q-input label="Assunto" v-model="assunto" :rules="[(val)=> !! val || 'Preencha o campo!']" outlined type="text"/>
        <div style="max-width:100%">
          <q-input label="Mensagem" v-model="mensagem" :rules="[(val)=> !! val || 'Preencha o campo!']" outlined type="textarea"/>
        </div>

        <q-btn color="green"  label="Enviar mensagem" type="submit"/>
      </q-form>

      </div>
  </q-page>
</template>


<script setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';

const carregando  = ref(false);
const formContato = ref(null);
const $q = useQuasar();
import axios from 'axios';

const nome = ref('');
const email = ref('');
const telefone = ref('');
const assunto = ref('');
const mensagem = ref('');

// Sem o emailjs
// const validar=()=>{
//   alert("campos preenchidos!");
// }


// com o emailjs
const validar=async () =>{
  carregando.value = true;
// Lendo do arquivo .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Payload exigido pela API REST do EmailJS
  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey, 
    template_params: {
      from_name: nome.value,
      from_email: email.value,
      telefone: telefone.value,
      subject: assunto.value,
      message: mensagem.value
    }
  };

  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload);
   
    $q.notify({
    type: 'positive',
    message: 'Mensagem enviada com sucesso!',
    position: 'top',
    timeout: 2000
  });

    // Limpar campos
    nome.value = '';
    email.value = '';
    telefone.value = '';
    assunto.value = '';
    mensagem.value = '';

    if (formContato.value) {
      formContato.value.resetValidation();
    }
  } catch (error) {
    console.error('Erro ao enviar via Axios:', error);
    alert('Erro ao enviar a mensagem. Verifique os dados e tente novamente.');
  } finally {
    carregando.value = false;
  }
}


</script>


<style scoped>

h1{
  font-size: 2.4rem;
  line-height: 90%;
  font-weight: 800;
}

p{
  font-size: 1.1rem;
  line-height: 90%;
  font-weight: 500;
  padding: 0 0 1rem 0;
}

.form-content{
  box-shadow:0 0 10px #00000050;
  width:95%;
  max-width:490px;
  padding: 40px 30px;
}
</style>
  