<template>
  <section id="card-content-types">
    <b-row>
      <b-col
        md="6"
        lg="6"
      >
        <b-card
          :img-src="require('@/modules/Users/image/card1.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-card-text>
            Cookie topping caramels jujubes gingerbread. Lollipop apple pie
            cupcake candy canes cookie ice cream. Wafer chocolate bar carrot
            cake jelly-o.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="6"
        lg="6"
      />
      <b-col>
        <b-card
          :img-src="require('@/modules/Users/image/card2.jpg')"
          img-bottom
          img-alt="card img"
          class="mb-3"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
        </b-card></b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardText,
  // BLink,
  // BListGroup,
  // BListGroupItem,
  // BCardTitle,
  // BCardBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    // BLink,
    // BCardTitle,
    // BListGroup,
    // BListGroupItem,
    // BCardBody,
  },
  data() {
    return {
      listData: [
        { text: 'Cras justo odio' },
        { text: 'Dapibus ac facilisis in' },
        { text: 'Vestibulum at eros' },
      ],
      kitchenSinkList: [
        { text: 'Cras justo odio' },
        { text: 'Vestibulum at eros' },
      ],
    }
  },
}
</script>
