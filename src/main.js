import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import { router } from "./router";
import i18n from "./core/plugins/i18n/i18n";
import Maska from "maska";
import Notifications from "@kyvg/vue3-notification";

import * as validate from "./core/plugins/vee-validate/vee-validate";

import { Form } from "vee-validate";
import Input from "@/components/Reusable/input.vue";
import Select from "@/components/Reusable/select.vue";
import FileInput from "@/components/Reusable/fileInput.vue";
import Scribble from "@/components/reusableComponents/scribble.vue";

const app = createApp(App);

app.use(createPinia());
app.use(Notifications);
app.use(validate);
app.use(i18n);
app.use(router);
app.use(Maska);

//components

app.component("Input", Input);
app.component("Select", Select);
app.component("FileInput", FileInput);
app.component("Form", Form);
app.component("Scribble", Scribble);

app.mount("#app");
