<template>
	<div
		class="flex flex-col gap-y-5 md:gap-y-0 items-center md:items-start h-full justify-between py-9 w-full md:w-2/6">
		<h4 class="text-white text-3xl font-semibold">CAT FACT:</h4>
		<Transition>
			<p v-if="this.fadeInOut" :style="{ fontSize: fontSize }" class="font-medium">
				{{ randomFact }}
			</p>
		</Transition>
		<button @click="getRandomFact"
			class="flex items-center gap-x-2.5 p-3 w-fit font-semibold text-white rounded-lg min-w-60 whitespace-nowrap group">
			<img src="/refresh.svg" class="w-8 group-hover:animate-spin" alt="" />
			GET A RANDOM CAT FACT
		</button>
	</div>
</template>

<script>
import fetchFacts from '../server/api';

export default {
	data() {
		return { randomFact: '', localData: [], fadeInOut: false };
	},

	async mounted() {
		this.localData = JSON.parse(localStorage.getItem('catFacts'))?.data;
		if (!this.localData) {
			try {
				await fetchFacts();
				this.localData = JSON.parse(
					localStorage.getItem('catFacts')
				)?.data;
			} catch (error) {
				console.error('Error fetching facts:', error);
				return;
			}
		}
		this.getRandomFact();
	},

	computed: {
		fontSize() {
			return this.randomFact.length > 200 ? '0.9rem' : '1.5rem';
		}
	},

	methods: {
		getRandomFact() {
			this.fadeInOut = false;
			const randomIndex = Math.floor(
				Math.random() * this.localData.length
			);
			setTimeout(() => {
				this.randomFact = this.localData[randomIndex];
				this.fadeInOut = true;
			}, 500)
		},
	},
};
</script>

<style scoped>
h4 {
	color: #22223b;
}

p {
	color: #4a4e69;
}

button {
	background-color: #4a4e69;
	box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.5);
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
