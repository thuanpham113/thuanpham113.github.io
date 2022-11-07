<template>
	<v-app id="app" class="overflow-hidden">
		<v-app-bar
			:elevation="scrolled ? '10' : ''"
			:color="scrolled ? 'white' : 'transparent'"
			app
			flat
			clipped-left
			height="80vh"
		>
			<v-layout class="my-2">
				<v-col
					cols="10"
					sm="11"
					class="d-flex align-center justify-md-center"
					md="3"
				>
					<nuxt-link to="/">
						<v-img
							width="105"
							contain
							src="/logo_ploggvn.svg"
						></v-img>
					</nuxt-link>
				</v-col>
				<v-col class="d-md-none align-center d-flex">
					<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
				</v-col>
				<v-col cols="7" class="d-none align-center d-md-flex">
					<div>
						<v-btn
							v-for="(list, index) in lists"
							:key="index"
							:color="scrolled ? 'black' : 'black'"
							class="transition font-weight-bold text-none"
							text
							:href="list.link"
						>
							<div class="h7">
								{{ list.title }}
							</div>
						</v-btn>
					</div>
				</v-col>
				<v-col class="d-md-flex d-none align-center" cols="2">
					<kq-button-locale color="black" />
				</v-col>
			</v-layout>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" color="#cac5e5" absolute temporary>
			<v-layout column>
				<v-btn
					v-for="(list, index) in lists"
					:key="index"
					class="my-1 font-weight-bold deep-purple--text text--darken-4"
					text
					height="10vh"
				>
					<div class="h7">
						{{ list.title }}
					</div>
				</v-btn>
				<kq-button-locale x height="10vh" color="deep-purple darken-4" />
			</v-layout>
		</v-navigation-drawer>
		<kq-scroll-progress-bar v-if="scrolled"></kq-scroll-progress-bar>
		<v-main v-if="$vuetify.breakpoint.smAndDown">
			<v-container fluid class="pa-0" max-height="600">
				<Nuxt />
			</v-container>
		</v-main>
		<v-container v-else fluid class="pa-0" max-height="600">
			<Nuxt />
		</v-container>
		<v-footer color="#EEEEEE" class=" white--text font-weight-light">
			<v-layout column>
				<v-layout
					:column="$vuetify.breakpoint.smAndDown"
					:align-center="$vuetify.breakpoint.lgAndUp"
					justify-center
					class="py-5"
				>
					<v-col :cols="$vuetify.breakpoint.smAndDown ? '9 ml-2 pb-10' : '3'">
						<v-row v-for="(text, index) in texts" :key="index">
							<div class="black--text font-weight-bold h7">
								{{ text.title2 }}
							</div>

							<v-img height="40px" max-width="40px" contain :src="text.img"> </v-img>

							<v-col class="black--text">{{ text.title }} </v-col>
						</v-row>
					</v-col>

					<v-col
						v-for="(head, index) in heads"
						:key="index"
						cols="12"
						md="2"
						sm="5"
						class="d-flex flex-column pb-10"
						fill-height
					>
						<div class="mb-2 font-weight-bold black--text h7">
							{{ head.title }}
						</div>
						<div class="black--text">{{ head.subtitle }}</div>
						<div class="my-2 black--text">{{ head.text }}</div>
						<div class="black--text">{{ head.sub }}</div>
					</v-col>
				</v-layout>

				<v-divider class="mt-5" />

				<v-col class="d-flex justify-start grey--text"
					>(C) Plogg Viet Nam 2022</v-col
				>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		scrolled: false,
		lists: [
			{
				title: "About us",
				link: "#1",
			},
			{
				title: "Industries",
				link: "#2",
			},
			{
				title: "Our services",
				link: "#3",
			},
			{
				title: "Careers",
				link: "#4",
			},
		],
		texts: [
			{ title2: "Contrach us" },
			{ img: "/us1.jpg", title: "Twitter" },
			{ img: "/us2.jpg", title: "Linkedin" },
			{ img: "/us3.jpg", title: "Instagram" },
			{ img: "/us4.jpg", title: "Gmail" },
			{ img: "/us5.jpg", title: "Phone" },
		],
		heads: [
			{
				title: "Company",
				subtitle: "About us",
				text: "Careers",
				sub: "Collaborate",
			},
			{
				title: "Legal",
				subtitle: "Terms of service",
				text: "Privacy policy",
			},
			{
				title: "Support",
				subtitle: "Feedback",
				text: "Help center",
				sub: "Our communtiny",
			},
		],
	}),
	beforeMount() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (
				this.lastPosition < window.scrollY &&
				this.limitPosition < window.scrollY
			) {
				this.scrolled = true;
			}
			if (this.lastPosition > window.scrollY) {
				this.scrolled = false;
			}
			this.lastPosition = window.scrollY;
			this.scrolled = window.scrollY > 50;
		},
		goToHome() {
			this.$router.push("/pricing");
		},
	},
};
</script>
<style lang="scss" scoped>
.transition::after {
	background: white !important;
}
</style>

<i18n>
{
	"en": {
		"text":{
		"1":"Wosks",
		"2":"Concepts",
		"3":"Archive",
		"4":"Personal",
    	"5":"2018 Plogg Viet Nam. All rights reserved.",
    	"6":"Do you have any question?"
		}
	},
	"fr": {
		"text":{
		"1":"Œuvres",
		"2":"Notions",
		"3":"Archive",
		"4":"Personnel",
    	"5":"2018 Plogg Viet Nam. Tous les droits sont réservés.",
    	"6":"Avez-vous des questions?"
		}
	}
}
</i18n>
