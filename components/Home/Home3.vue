<template>
	<v-sheet
		color="white"
		class="d-flex flex-column flex-md-row align-center py-5"
	>
		<v-layout
			:style="$vuetify.breakpoint.smAndDown ? 'max-width: 90%' : 'max-width: 50%'"
			column
			:class="$vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text pl-16'"
		>
			<v-row class="justify-start pb-5">
				<v-col cols="2">
					<v-img
						:class="$vuetify.breakpoint.smAndDown ? 'mt-5' : ''"
						max-with="70"
						max-height="70"
						src="/3ddd.jpg"
					></v-img>
				</v-col>
				<v-col justify="center">
					<h2 class="grey--text mt-5">3D graphic design</h2>
				</v-col>
			</v-row>
			<v-col cols="11" class="d-flex justify-center">
				<div
					:class="
						$vuetify.breakpoint.smAndDown
							? 'h6 font-weight-bold text-center pl-9'
							: 'h4 font-weight-bold'
					"
				>
					{{ $t("title.1") }}
				</div>
			</v-col>

			<v-col cols="12" class="grey--text">
				<div
					:class="$vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'h6 mb-11 '"
				>
					{{ $t("title.2") }}
				</div>
			</v-col>
			<v-col
				:cols="$vuetify.breakpoint.smAndDown ? '12' : '9'"
				class="d-flex justify-center"
			>
				<v-hover class=" " v-slot="{ hover }">
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

		<v-img
			v-if="$vuetify.breakpoint.smAndUp"
			class="mb-n16"
			aspect-ratio="1"
			:width="$vuetify.breakpoint.smAndDown ? '40%' : '0%'"
			src="/home3.jpg"
		>
		</v-img>
	</v-sheet>
</template>

<script>
export default {};
</script>

<style></style>

<i18n>
{
	"en": {
		"title":{
        "1":"We built designs that built your world",
        "2":"Turn your ideas into the 3D graphic designs that "
        },
        "button":{
        "2":"Built your world"
        }

	},
	"fr": {
		"title": {
		"1":"Rester en contact",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
    "button":{
        "2":"Built your world"
        }
	}
}
</i18n>
