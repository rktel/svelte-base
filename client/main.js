import App from '../imports/ui/App.svelte';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    new App({
        target: document.body
    })
})