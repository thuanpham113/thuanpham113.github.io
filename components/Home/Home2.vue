<template>
	<v-sheet
		color="white"
		class="d-flex flex-column flex-md-row align-center justify-center"
	>
		<v-img height="55vh" contain src="/home2.png" class="ml-16"/>

		<v-layout
			:style="
				$vuetify.breakpoint.smAndDown
					? 'max-width: 80%'
					: 'max-width: 50%'
			"
			column
			:class="
				$vuetify.breakpoint.smAndDown
					? 'black--text'
					: 'black--text pl-16'
			"
		>
			<v-row
				class="justify-end"
				:class="$vuetify.breakpoint.smAndDown ? ' pt-12' : 'mr-12'"
			>

				<h2 class="grey--text pb-12">Software development <v-icon>mdi-xml</v-icon> </h2>
			</v-row>
			<v-col cols="14" class="mr-4">
				<div
					:class="
						$vuetify.breakpoint.smAndDown
							? 'h6 font-weight-bold text-center '
							: 'h4 font-weight-bold text-right mr-10'
					"
				>
					{{ $t("title.1") }}
				</div>
			</v-col>
			<v-col cols="12" class="grey--text d-flex justify-end">
				<div
					:class="
						$vuetify.breakpoint.smAndDown
							? 'mt-2  text-center'
							: 'h6 pl-12 text-right mr-10'
					"
				>
					{{ $t("title.2") }}
				</div>
			</v-col>
			<v-col
				:cols="$vuetify.breakpoint.smAndDown ? '11' : '11'"
				class="d-flex justify-center pl-12"
			>
				<v-hover v-slot="{ hover }">
					<v-btn
						:class="
							$vuetify.breakpoint.smAndDown
								? 'rounded-lg white--text'
								: 'rounded-lg black--text'
						"
						:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						height="45"
						href="https://www.google.com/intl/vi/gmail/about/"
					>
						<div>{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</v-col>
		</v-layout>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		selected: 1,
		headers: [
			{
				item1: "Product Registration",
				item2: "Allows your customers to register your products directly from the Synode player.",
			},
			{
				item1: "Product Registration",
				item2: "Allows users to rate the products they have just assembled. An invaluable source of data, accessible any time via the Synode Dahboard or our API !",
			},
			{
				item1: "Product Registration",
				item2: "At the end of the assembly guide, display cross-sell complimentary items to your customers to increase your sales. You can link each assembly animation with a list of products of your choice anytime.",
			},
		],
	}),
	methods: {
		change(index) {
			this.selected = index;
		},
	},
};
</script>

<style></style>

<i18n>
{
	"en": {
		"title":{
		"1":"You plan your dreams, we make it comes true",
		"2":"Plogg Vietnam provides the best software development that contribute to your success."
		},
		"button":{
		"2":"Start your dream"
		}

	},
	"fr": {
		"title": {
		"1":"Rester en contact",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
	"button":{
		"2":"Start your dream"
		}


	}
}
</i18n>