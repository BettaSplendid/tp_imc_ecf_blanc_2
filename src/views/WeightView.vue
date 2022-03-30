<template>
  <!-- <div class="about">
    <center>
      <h1>This is the weight page</h1>
      <div>
        <WeightForm />
      </div>
    </center>
  </div> -->
  <h2>Calculateur d'Imc</h2>
  <p>
    Cette application vous permet de faire des calculs d'imc rapidement et
    facilement.
  </p>
  <p>On ne prendra pas vos données non plus.</p>
  <div class="form_flex">
    <label for="exampleInputEmail1" class="form-label">Taille en CM : </label>
    <input
      v-model="form_e.heightt"
      type="number"
      name="heightheight"
      id="heightheight"
    />
    <label for="exampleInputEmail1" class="form-label"
      >Poids en KG entier :
    </label>
    <input
      v-model="form_e.weightt"
      type="number"
      name="weightweight"
      id="weightweight"
    />
    <!-- <button>Calculer</button> -->
    <button @click="OnCalculate" type="button">Calculer</button>
    <p>
      Votre IMC est de :
      <b>
        {{ display_result }}
      </b>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// import WeightForm from "../components/weight/WeightForm.vue";
const form_e = { heightt: null, weightt: null };
const display_result = ref();

function OnCalculate() {
  console.log("Start func Calculate");
  // console.log(form_e.weightt);

  if(typeof form_e.heightt === 'string' || form_e.weightt instanceof String) {
    alert("I want numbers only")
    return
  }


  let height_meter = form_e.heightt / 100;
  let height_squared = form_e.heightt * form_e.heightt;
  let weight_kg = form_e.weightt;
  // height_meter
  console.log({ height_meter });
  console.log({ height_squared });
  console.log({ weight_kg });
  let imc_output = (weight_kg / height_squared) * 10000;
  imc_output = imc_output.toPrecision(3);
  console.log({ imc_output });
  display_result.value = imc_output;
}
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
