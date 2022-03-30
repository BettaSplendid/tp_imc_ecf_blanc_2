<template>
  <div class="about">
    <h2>Calculateur d'Imc</h2>
    <p>
      Cette application vous permet de faire des calculs d'imc rapidement et
      facilement.
    </p>
    <p>On ne prendra pas vos données non plus.</p>
    <center>
      <WeightForm />
    </center>
  </div>
</template>

<script setup>
import WeightForm from "../components/weight/WeightForm.vue";

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.form_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1vh;
}
</style>
