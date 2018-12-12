<template>
  <div>
    <header>
      <h1>Board</h1>
    </header>
    <v-layout justify-center>
      <v-flex
        xs12
        sm6
      >
        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout
              row
              wrap
            >
              <v-flex
                v-for="card in cards"
                :key="card.title"
                v-bind="{ [`xs6`]: true }"
              >
                <v-card :to="`/board/card/${card.id}`">
                  <v-img
                    :src="card.src"
                    height="200px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex
                          xs12
                          align-end
                          flexbox
                        >
                          <span
                            class="headline white--text"
                            v-text="card.title"
                          ></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "상품1",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg"
        },
        {
          id: 2,
          title: "상품2",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg"
        },
        {
          id: 3,
          title: "상품3",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg"
        },
        {
          id: 4,
          title: "상품4",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg"
        },
        {
          id: 5,
          title: "상품5",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.products {
  overflow: hidden;
  .product {
    float: left;
    width: 200px;
    height: 100px;
    line-height: 100px;
    border: 1px solid red;
    border-radius: 5px;
    margin: 0.5rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
</style>

