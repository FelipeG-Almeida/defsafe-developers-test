<template>
	<div class="flex flex-col h-full justify-between py-8">
		<h4 class="text-white text-3xl font-semibold">CAT FACT:</h4>
		<p>
			The website functionality is simple and straightforward: A cat fact
			is displayed to the user. Whenever the user wants to see a new cat
			fact, they should click the blue button. This retrieves a new cat
			fact from a public API and refreshes the fact.
		</p>
		<button class="flex items-center gap-x-2.5 p-3 w-fit font-medium text-white rounded-lg">
			<img src="/refresh.svg" class="w-8" alt="" />
			GET A RANDOM CAT FACT
		</button>
	</div>
</template>

<style scoped>
h4 {
	color: #22223b;
}

button {
	background-color: #4a4e69;
	box-shadow: 7px 7px 10px 0px rgba(0,0,0,0.5);
}
</style>
