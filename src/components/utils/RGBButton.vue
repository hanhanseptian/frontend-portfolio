<script setup lang="ts">
// INTERFACES
interface IProps {
  text?: string;
}

// VARIABLES
const props = defineProps<IProps>();
</script>
<template>
  <div class="rgb-button-container">
    <slot name="button">
      <button class="rgb-button flex items-center justify-center">
        <slot name="prepend"></slot>
        <slot name="text">
          {{ props?.text }}
        </slot>
        <slot name="append"> </slot>
      </button>
    </slot>
  </div>
</template>
<style scoped>
.rgb-button {
  font-size: 20px;
  padding: 0.3em 0.8em;
  border-radius: 0.7em;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 2px 3px #000000b4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.rgb-button-container {
  position: relative;
  padding: 2px;
  background: linear-gradient(90deg, #03a9f4, rgb(201, 243, 29));
  border-radius: 0.9em;
  transition: all 0.4s ease;
  display: inline-flex;
}

.rgb-button-container::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

.rgb-button-container:hover::before {
  background: linear-gradient(90deg, #03a9f4, rgb(201, 243, 29));
  filter: blur(1.2em);
}
.rgb-button-container:active::before {
  filter: blur(0.2em);
}
</style>
