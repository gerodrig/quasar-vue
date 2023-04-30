<template>
  <q-page class="column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
    <q-separator />
    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>
    <q-separator />

    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet
      non totam vitae nobis possimus, officia aspernatur deserunt numquam modi
      alias maiores, voluptatem cum eos voluptas accusamus harum? Inventore,
      obcaecati!
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minima
      optio. Mollitia odio error quia veritatis aliquam amet, perspiciatis
      molestias. Dolores ipsa quas incidunt esse iusto saepe magnam modi
      debitis.
    </p>
    <q-separator />

    <span class="text-caption">Caption</span>
    <span class="text-overline">Overline</span>
    <q-separator />

    <span class="text-uppercase">Uppercase</span>
    <span class="text-lowercase">Lowercase</span>
    <span class="text-capitalize">Capitalize</span>
    <q-separator />

    <span class="text-weight-bold">Bold</span>
    <span class="text-weight-medium">Medium</span>
    <span class="text-weight-regular">Regular</span>
    <span class="text-weight-light">Light</span>
    <q-separator />

    <span class="text-italic">Italic</span>
    <q-separator />

    <span class="text-nowrap">No wrap</span>
    <q-separator />

    <span class="text-hide">Hide</span>
    <q-separator />

    <span class="text-strike">Strike</span>
    <q-separator />

    <span class="text-underline">Underline</span>
    <q-separator />

    <span class="text-ellipsis">Ellipsis</span>
    <q-separator />

    <span class="text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quod, voluptatem, quae quia quos voluptate quibusdam
      voluptates quas doloribus quidem. Quisquam voluptatum, quod, voluptatem,
      quae quia quos voluptate quibusdam voluptates quas doloribus quidem.
    </span>

    <!-- <h1>Typography</h1> -->
    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Close Side Menu' : 'Open Side Menu'"
      class="q-mt-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script lang="ts">
import { useUI } from 'src/composables/useUI';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypographyPage',
  setup() {
    const { toggleSideMenu, sideMenuOpen } = useUI();
    return {
      toggleSideMenu,
      sideMenuOpen,
    };
  },
});
</script>
