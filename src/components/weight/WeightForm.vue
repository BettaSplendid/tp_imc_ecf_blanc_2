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

const form_e = { heightt: null, weightt: null };
const selected_gender = ref();
const display_result_height = ref();
const display_result_weight = ref();
const display_result_imc = ref();
const display_result_ideal = ref();
function OnCalculate() {
  // C'est une grosse fonction, qui va calculer l'imc
  // Verification supplémentaire de si on à un string, le type le plus probable
  if (typeof form_e.heightt === "string" || form_e.weightt instanceof String) {
    alert("I want numbers only");
    return;
  }

  //Idem. Separé pour plus de lisibilité
  if (form_e.heightt === null || form_e.weightt === null) {
    alert("Merci de rajouter les informations");
    return;
  }

  // Un placeholder qui nous sert juste en dessous pour ne pas repeter le calcul du poids ideal
  let gender_value = 0;
  if (selected_gender.value == "Homme") {
    gender_value = 4;
  } else if (selected_gender.value == "Femme") {
    gender_value = 2.5;
  } else {
    alert("Vous devez selectionner votre genre.");
    return;
  }

  // On rends tout les chiffres en positif avec abs, et arrondi en entier avec floor
  form_e.heightt = Math.floor(Math.abs(form_e.heightt));
  form_e.weightt = Math.floor(Math.abs(form_e.weightt));

  // Les calculs de l'IMC
  let height_squared = form_e.heightt * form_e.heightt;
  let weight_kg = form_e.weightt;
  let imc_output = (weight_kg / height_squared) * 10000;
  // Pour la quantité de chiffres après virgules
  imc_output = imc_output.toPrecision(3);

  let ideal_weight =
    form_e.heightt - 100 - (form_e.heightt - 150) / gender_value;

  // Assignation des valeurs pour affichage reactif
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
