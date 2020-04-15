<template>
  <div>
    <h1>Event List</h1>
    <p>
      <router-link :to="{ name: 'EventShow', params:{ id : 1 } }">Event Show #1</router-link>
    </p>
  </div>
</template>