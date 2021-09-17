import App from './App.svelte';
import './styles/reset.css';

const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
})