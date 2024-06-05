<template>
	<AppHeader />
	<main class="flex flex-col-reverse gap-y-5 md:gap-y-0 justify-between gap-x-10 h-auto md:h-3/4 md:flex-row">
		<AppCatFacts />
		<AppCatGrid />
	</main>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppCatFacts from './components/AppCatFacts.vue';
import AppCatGrid from './components/AppCatGrid.vue';
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
	padding: 30px 1% 30px 7%;
}
</style>
