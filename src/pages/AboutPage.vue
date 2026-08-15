<template>
  <q-page class="flex flex-center">
    <q-card flat bordered style="max-width: 560px" class="q-pa-lg">
      <q-card-section class="text-center">
        <q-icon name="info" color="primary" size="56px" class="q-mb-sm" />
        <h2 class="text-h5 text-weight-medium q-mb-sm">Sobre este app</h2>
        <p class="text-body1 text-grey-8">
          Este é um aplicativo de exemplo construído com
          <strong>Quasar Framework</strong> e <strong>Vue 3</strong>, usando Vite como
          ferramenta de build. Ele demonstra uma estrutura padrão com layout, drawer
          lateral, cabeçalho, rodapé, roteamento entre páginas e modo escuro.
        </p>
      </q-card-section>

      <q-separator inset class="q-my-md" />

      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon name="layers" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Framework</q-item-label>
            <q-item-label caption>Quasar {{ quasarVersion }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="code" color="secondary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Linguagem</q-item-label>
            <q-item-label caption>Vue 3 + TypeScript</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="bolt" color="accent" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Build</q-item-label>
            <q-item-label caption>Vite</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-card-actions align="center" class="q-mt-md">
        <q-btn flat color="primary" label="Voltar ao início" icon="arrow_back" to="/" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();
const quasarVersion = $q.version;
</script>
