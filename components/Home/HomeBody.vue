<template>
  	<v-sheet color:="white">
		<v-layout color="transparent" class="d-flex flex-column flex-md-row align-center py-5">
	  		<v-layout :style="
				$vuetify.breakpoint.smAndDown ? 'max-width: 80%' : 'max-width: 50%'
	  			"
				column
				:class="$vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text pl-16'"
			>
				<v-col cols="11" class="d-flex justify-center">
					<div :class="
						$vuetify.breakpoint.smAndDown
						? 'h6 font-weight-bold text-center pl-9'
						: 'h3 font-weight-bold'
					">
						{{ $t("title.1") }}
					</div>
				</v-col>
			<v-col cols="12" class="grey--text">
				<div :class="
					$vuetify.breakpoint.smAndDown
					? 'mt-2  text-center'
					: 'h6 mb-11 '"
				>
					{{ $t("title.2") }}
				</div>
			</v-col>
			<v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '9'" class="d-flex justify-center">
				<v-hover class=" " v-slot="{ hover }">
					<v-btn :class="
						$vuetify.breakpoint.smAndDown
							? 'rounded-lg white--text'
							: 'rounded-lg black--text'
						" :color="hover ? 'grey darken-1' : 'cyan lighten-3'" :height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
						href="https://www.google.com/intl/vi/gmail/about/"
					>
						<div>{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</v-col>
	  	</v-layout>
	  	<v-img contain class="mx-15  " aspect-ratio="1" :width="$vuetify.breakpoint.smAndDown ? '50%' : '40%'"
			src="logo 2.png">
	  	</v-img>
	</v-layout>
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