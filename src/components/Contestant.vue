<template>
  <div class="contester col m6 s6">
    <div class="row">
      <div class="input-field col m6 s6">
        <input placeholder="mbensan"  type="text" class="validate"  v-model="login">
        <label for="first_name">Nombre de usuario</label>
      </div>
      <div class="col m6 s6">
        <button class="btn" @click="load_user">Buscar</button>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Puntaje</h5>
        <p class="card-text">Repositorios: {{ this.public_repos}}</p>
        <p class="card-text">Gists: {{ this.public_gists}}</p>
        <p class="card-text">Seguidores: {{ this.followers}}</p>
        <p class="card-text">Seguidos: {{ this.following}}</p>
        <h6 class="card-subtitle mb-2 text-muted">Puntos: {{ this.score }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contestant',
  props: {
    num: String
  },
  data() {
    return {
      login: 'mbensan',
      name: '',
      followers: 0,
      following: 0,
      public_repos: 0,
      public_gists: 0,
      score: 0
    }
  },
  methods: {
    load_user(ev) {
      ev.preventDefault();
      this.axios.get(`https://api.github.com/users/${this.login}`)
      .then(data => {
        const user = data.data;
        console.log(user)
        this.followers = user.followers;
        this.following = user.following;
        this.public_repos = user.public_repos;
        this.public_gists = user.public_gists;
        this.name = user.name;
        this.score = user.followers + user.following + user.public_repos + user.public_gists;
        if (this.num == '1') {
          this.store.commit('update1', this.score)
        } else {
          this.store.commit('update2', this.score)
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
}
</script>