
<template>
  <!-- src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" -->
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../../assets/smile.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light"
                >
                  WELCOME TO
                </span>

                <br>

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  VUETIFY
                </span>

              </v-col>

              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#about-me')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          src:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Mobile first & Responsive",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        },
        {
          src:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Think outside the box",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "Small changes, big difference",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
        }
      ],
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "Vibrant Community",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-update",
          title: "Frequent Updates",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ],
      stats: [
        ["24k", "Github Stars"],
        ["330+", "Releases"],
        ["1m", "Downloads/mo"],
        ["5m", "Total Downloads"]
      ]
    };
  }
};
</script>