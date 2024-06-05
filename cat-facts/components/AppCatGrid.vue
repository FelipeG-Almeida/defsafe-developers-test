<template>
	<div class="grid grid-cols-2 gap-7 w-full md:w-3/5 h-full">
		<img class="col-span-1 row-span-2" src="/images/kitty2.webp" alt="" />
		<img class="col-span-1 row-span-1" src="/images/kitty1.webp" alt="" />
		<img class="col-span-1 row-span-1" src="/images/kitty3.webp" alt="" />
	</div>
</template>

<style scoped>
div {
	height: calc(100% - 1.75rem);
	grid-template-columns: 60% 30%;
	grid-template-rows: 45% 55%;
}

img {
	border-radius: 20px;
	filter: grayscale(1);
	height: 100%;
	object-fit: cover;
	width: 100%;
}
</style>
