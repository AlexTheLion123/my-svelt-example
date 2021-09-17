<script>
    export let name;
</script>


<style>
    nav {
        background: cornflowerblue;
        display: grid;
        place-items: center;
    }
    ul {
        list-style-type: none;
    }

    li {
        display: inline;
        padding: 10px 10px;
        background: rgba(230, 230, 240, 20%);
        border-radius: 5px;
        margin: 0 5px;
    }

    li:hover {
        background: rgb(230, 230, 240);
    }

</style>

<nav>
    <ul>
        <li>Home</li>
        <li>Foo</li>
        <li>Bar</li>
        <li>Reg</li>
    </ul>
</nav>
<section>
    <h1>Hello <span class="name">{name}</span>..</h1>
</section>






