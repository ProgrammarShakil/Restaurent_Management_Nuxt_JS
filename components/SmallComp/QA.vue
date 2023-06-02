<template>
  <div>
    <div class="flex justify-between hover:cursor-pointer" @click="toggleAnswer">
      <div class="text-2xl py-3">{{ question }}</div>
      <div  class="text-gray-500 text-3xl mt-3">
        <div v-if="Q">+</div>
        <div v-else>-</div>
      </div>
    </div>
    <hr class="border-gray-500"/>
    <p v-show="showAnswer" class="answer py-5 text-green-500">{{ answer }}</p>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String,
  },
  data() {
    return {
      showAnswer: false,
      Q: true,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
      this.Q = !this.Q;
    },
  },
};
</script>
