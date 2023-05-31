<template>
  <div id="app">
    <div @click="animateControl">
      <span v-if="animateRemove"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 18q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h10q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18H7Zm10-3q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9q-1.25 0-2.125.875T14 12q0 1.25.875 2.125T17 15Z"
          /></svg></span
      ><span v-else
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 18q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h10q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18H7Zm0-2h10q1.65 0 2.825-1.175T21 12q0-1.65-1.175-2.825T17 8H7Q5.35 8 4.175 9.175T3 12q0 1.65 1.175 2.825T7 16Zm0-1q1.25 0 2.125-.875T10 12q0-1.25-.875-2.125T7 9q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15Zm5-3Z"
          /></svg
      ></span>
    </div>
    <div class="container mx-auto px-4">
      <slot />
    </div>
    <Particles
      v-if="animateRemove"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      url="http://foo.bar/particles.json"
    />

    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            // value: '#000',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        // fpsLimit: 20,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ccc',
          },
          links: {
            color: '#ccc',
            distance: 120,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>

<script setup>
import { loadFull } from "tsparticles";
import { ref, computed } from "vue";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

const animateRemove = ref(true);

const animateControl = computed(() => {
  console.log(animateRemove.value);
  return (animateRemove.value = !animateRemove.value);
});
</script>
<style>
@keyframes cursorAnimation {
  0% {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) scale(0);
    opacity: 0;
  }
}

.cursor {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation: cursorAnimation 1s infinite;
}
</style>
