<template>
  <h2>Calculateur d'Imc</h2>
  <p>
    Cette application vous permet de faire des calculs d'imc rapidement et
    facilement.
  </p>
  <p>On ne prendra pas vos données non plus.</p>
  <div class="container d-flex flex-column bd-highlight mb-3 p-2">
    <label for="exampleInputEmail1" class="form-label">Taille en CM : </label>
    <input type="number" name="" id="" class="m-2" />
    <label for="exampleInputEmail1" class="form-label"
      >Poids en KG entier :
    </label>
    <input type="number" name="" id="" class="m-2" />
    <!-- <button>Calculer</button> -->
    <button @click="OnCalculate" type="button" class="btn btn-primary m-2">
      Calculer
    </button>
    <p class="bd-highlight border border-dark">Resultat:</p>
  </div>
</template>

<script setup>
function OnCalculate() {
  console.log("Calculate");
}
</script>
