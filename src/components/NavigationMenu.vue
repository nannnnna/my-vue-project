<template>
    <nav class="menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/list-books">List Books</router-link></li>
        <li><router-link to="/feedback">Feedback</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
    .menu ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      /* Add other styles as needed */
    }
    .menu li {
      display: inline-block;
      margin: 0 10px;
    }
    .menu a {
      color: inherit; /* Inherits from .menu class */
    }
  </style>
  