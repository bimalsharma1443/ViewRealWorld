<template>
    <div>
        <h1>Event {{ $store.state.user.name }}</h1>
        <p>This is event is created by {{ user.name }}</p>
        <ul>
            <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>
        <p>category length is {{ catLength }}</p>
        <p>List of active todo</p>
        <ul>
            <li v-for="todo in doneTodo" :key="todo.id">{{ todo }}</li>
        </ul>
        <p>Not active count of todo  is {{ notActiveTodoCount }}</p>
        <p>Displaying a todo {{ getTodoById(1) }}</p>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    computed : {
        catLength() {
            return this.$store.getters.catLength;
        },
        doneTodo() {
            return this.$store.getters.doneTodo;
        },
        notActiveTodoCount() {
            return this.$store.getters.notActiveTodoCount;
        },
        getTodoById() {
            return this.$store.getters.getTodoById;
        },
        ...mapState(['user','categories'])
    }
}
</script>s