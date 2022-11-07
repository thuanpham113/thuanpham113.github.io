<template>
  	<v-sheet color:="white" :class="$vuetify.breakpoint.smAndDown ? 'vh-100 w-100 d-flex flex-column-reverse justify-end align-center':'vh-100 d-flex flex-row'">
		<div :class="$vuetify.breakpoint.smAndDown ? 'd-flex flex-column justify-center w-100 align-center':'d-flex flex-column justify-center w-60 h-100 ml-15'">
			<div :class="
				$vuetify.breakpoint.smAndDown
				? 'h3 font-weight-bold text-center pl-9'
				: 'h2 font-weight-bold'
			">
				{{ $t("title.1") }}
			</div>

			<div :class="
				$vuetify.breakpoint.smAndDown
				? 'mt-2  text-center'
				: 'h6 mb-11 '"
			>
				{{ $t("title.2") }}
			</div>

			<div>
				<v-btn :class="
					$vuetify.breakpoint.smAndDown
						? 'rounded-lg white--text'
						: 'rounded-lg black--text'
					"
					color="cyan lighten-3"
					href="https://www.google.com/intl/vi/gmail/about/"
				>
					{{ $t("button.2") }}
				</v-btn>
			</div>
		</div>

		<div :class="$vuetify.breakpoint.smAndDown ? 'w-40 d-flex justify-center':'r-0 mr-16 pb-16 w-40 h-100 d-flex justify-center'">
			<v-img
				contain
				width="100%"
				class="mx-15"
				aspect-ratio="1"
				src="logo 2.png">
			</v-img>
		</div>
	</v-sheet>
</template>

<script>
export default {};
</script>

<style>
</style>

<i18n>
{
	"en": {
		"title":{
			"1":"Welcome to Plogg Vietnam,",
			"2":"The best Information Technology Services company that you need to boost your success."
		},
		"button":{
			"2":"Who are we ?"
		}
	},
	"fr": {
		"title": {
			"1":"Rester en contact",
			"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
		"button":{
			"1":"S'abonner"
		}
	}
}
</i18n>