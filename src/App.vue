<template>
  <div class="container">
    <h1>Convertidor de Distancia</h1>

    <div class="row">
      <label for="km">Kilómetros (km)</label>
      <input
        id="km"
        type="number"
        step="any"
        :value="inputValue"
        @input="onKmInput"
      />
    </div>

    <p
      v-if="showResults"
      class="result"
      :style="{ color: store.resultColor }"
    >
      Metros (m): {{ store.metersFormatted }}
    </p>

    <p
      v-if="showResults"
      class="result"
      :style="{ color: store.resultColor }"
    >
      Millas (mi): {{ store.milesFormatted }}
    </p>

    <p class="answers">
      respuestas: 1:c 2:b 3:c 4:a 5:b
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDistanceStore } from "./stores/distance.store";

const store = useDistanceStore();

const inputValue = ref("");

const isOnlyDash = computed(() => inputValue.value === "-");

const showResults = computed(() => {
  return inputValue.value !== "" && !isOnlyDash.value;
});

function onKmInput(e) {
  const value = e.target.value;
  inputValue.value = value;

  store.setKilometers(value);
}
</script>

<style>
.container {
  max-width: 700px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

.row {
  margin: 20px 0;
}

label {
  margin-right: 10px;
}

input {
  width: 160px;
  padding: 6px 8px;
}

.result {
  font-weight: 700;
  margin: 10px 0;
}

.answers {
  margin-top: 30px;
  color: #444;
}
</style>
