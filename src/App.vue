<template>
  <div id="app" class="container">
    <div class="row">
      <Contestant num="1" />
      <Contestant num="2" />
    </div>
    <div class="row">
      <div class="col m12 s12">
        <h3>Mascotitas:</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Vacunas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mascota in mascotas" :key="mascota.id">
              <td>{{ mascota.nombre }}</td>
              <td>{{ mascota.edad }}</td>
              <td><span v-for="(vacuna, i) in mascota.vacunas" :key="i">{{vacuna}} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Contestant from './components/Contestant.vue'
import { db } from '@/firebase'; 

export default {

  name: 'App',
  components: {
    Contestant
  },
  data() {
    return {
      mascotas: []
    }
  },
  firestore() {
    return {
      mascotas: db.collection('mascotas')
    }
  },
  mounted() {
    console.log(this.mascotas)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
