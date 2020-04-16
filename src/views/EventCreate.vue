<template>
    <div>
        <h1>Event {{ $store.state.user.name }}</h1>
        <p>This is event is created by {{ user.name }}</p>
        <ul>
            <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    computed : {
        ...mapState(['user','categories'])
    }
}
</script>s