<template>
	<AppHeader />
	<main class="flex h-3/4">
		<AppCatFacts />
	</main>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppCatFacts from './components/AppCatFacts.vue';
</script>

<style>
html,
body,
#__nuxt {
	height: 100%;
}

* {
	font-family: Jost, 'serif';
}

main {
	background-color: #c9ada7;
	padding: 30px 7%;
}
</style>
