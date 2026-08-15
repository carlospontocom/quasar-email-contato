<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar size="32px" class="q-mr-sm">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg" alt="logo" />
          </q-avatar>
          Meu App Quasar
        </q-toolbar-title>

        <q-btn flat round dense icon="dark_mode" @click="toggleDarkMode">
          <q-tooltip>Alternar tema</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="260" class="bg-grey-1">
      <q-list padding>
        <q-item-label header>Menu</q-item-label>

        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
            <q-item-label caption>Página principal</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/about" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre</q-item-label>
            <q-item-label caption>Sobre o app</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item-label header>Links</q-item-label>

        <q-item clickable v-ripple tag="a" href="https://quasar.dev" target="_blank">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Documentação</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="a" href="https://github.com/quasarframework" target="_blank">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GitHub</q-item-label>
            <q-item-label caption>quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

     
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDarkMode() {
  $q.dark.toggle();
}
</script>
