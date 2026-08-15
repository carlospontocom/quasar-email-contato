<template>
  <q-page class="flex flex-center col-12 q-pa-lg">

    <div class="form-content">
      <h1>Fale conosco</h1>
      <p>Para saber mais informações</p>
      <q-form class="column q-gutter-y-md" @submit="validar">
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

const nome = ref('');
const email = ref('');
const telefone = ref('');
const assunto = ref('');
const mensagem = ref('');

const validar=()=>{
  alert("campos preenchidos!");
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
  width:100%;
  max-width:490px;
  padding: 40px 35px;
}
</style>
  