<template>
  <table>
    <thead>
      <tr>
        <th colspan="4">The table header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Taille</td>
        <td>Poids</td>
        <td>IMC</td>
        <td>Poids ideal</td>
      </tr>
      <tr>
        <td>{{ display_result_height }} cm</td>
        <td>{{ display_result_weight }} kg</td>
        <td>
          <b>{{ display_result_imc }}</b>
        </td>
        <td>{{ display_result_ideal }} kg</td>
      </tr>
    </tbody>
  </table>

  <div class="form_flex">
    <h3>Entrez vos informations ci-dessous:</h3>

    <section>
      <h3>binding value</h3>

      <input type="radio" id="yes" value="Homme" v-model="selected_gender" />
      <label for="yes">Homme</label>
      <br />
      <input type="radio" id="no" value="Femme" v-model="selected_gender" />
      <label for="no">Femme</label>
    </section>

    <label for="exampleInputEmail1" class="form-label">Taille en CM : </label>
    <input
      v-model="form_e.heightt"
      type="number"
      name="heightheight"
      id="heightheight"
      min="0"
      step="1"
    />
    <label for="exampleInputEmail1" class="form-label"
      >Poids en KG entier :
    </label>
    <input
      v-model="form_e.weightt"
      type="number"
      name="weightweight"
      id="weightweight"
      min="0"
      step="1"
    />
    <!-- <button>Calculer</button> -->
    <button @click="OnCalculate" type="button">Calculer</button>
    <p>
      Votre IMC est de :
      <b>
        {{ display_result_imc }}
      </b>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onUpdated } from "@vue/runtime-core";

const form_e = { heightt: null, weightt: null };
const selected_gender = ref();
const display_result_height = ref();
const display_result_weight = ref();
const display_result_imc = ref();
const display_result_ideal = ref();
const picked = ref();

function OnCalculate() {
  console.log("Start func Calculate");
  // console.log(form_e.weightt);

  if (typeof form_e.heightt === "string" || form_e.weightt instanceof String) {
    alert("I want numbers only");
    return;
  }

  if (form_e.heightt === null || form_e.weightt === null) {
    alert("Merci de rajouter les informations");
    return;
  }

  console.log(selected_gender);
  console.log(selected_gender.value);
  let gender_value = 0;

  if (selected_gender.value == "Homme") {
    gender_value = 4;
  } else if (selected_gender.value == "Femme") {
    gender_value = 2.5;
  } else {
    alert("Vous devez selectionner votre genre.");
    return;
  }

  form_e.heightt = Math.floor(Math.abs(form_e.heightt));
  form_e.weightt = Math.floor(Math.abs(form_e.weightt));

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

  let ideal_weight =
    form_e.heightt - 100 - (form_e.heightt - 150) / gender_value;

  display_result_height.value = form_e.heightt;
  display_result_weight.value = weight_kg;
  display_result_imc.value = imc_output;
  display_result_ideal.value = ideal_weight;
}
</script>
<style>
table {
  table-layout: fixed;
  width: 50vw;
  text-align: center;
}
td {
  border: 1px solid #333;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}
th {
  text-align: center;
  column-span: all;
}
</style>