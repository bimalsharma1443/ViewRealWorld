<template>
    <div>
        <h1>Event {{ userName }}</h1>
        <p>This is event is created by {{ userName }}</p>
    </div>
</template>

<script>

import {mapAction} from 'vuex'

export default {
    computed : {
        userName() {
            return this.$store.state.user.name;
        }
    }
}
</script>