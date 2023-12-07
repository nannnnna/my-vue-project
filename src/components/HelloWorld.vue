<template>
  <div class="hello">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- Add more navigation links here -->
        </ul>
      </nav>
    </header>
    
    <h1>Welcome to My Vue App</h1>
    <p>This is a custom welcome page for my Vue.js application.</p>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: #42b983;
  text-decoration: none;
}

/* Add more styles for other elements here */
</style>
