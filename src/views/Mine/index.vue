<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div id="content">
            <Login />
        </div>

        <Tapbar />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Tapbar from '@/components/Tapbar';
    import Login  from '@/components/Login'
    export default {
        name: "mine",
        components:{
            Header,
            Tapbar,
            Login
        }
    }
</script>

<style scoped>

</style>