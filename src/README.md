# vue-template - Making async/lazy load of components

Hi, everyone! 👋

This is a nice repo with some approaches to use in VueJS (2.x) projects. [You may find more here](https://github.com/open-ish/vue2-template) or change by the branch at GitHub.

If you wanna, let's get in touch!

## What're we gonna use?

- [VueJS (2.x | 3.x)](https://vuejs.org/)

## Summary

- [What does it resolve?](#What does it resolve?)
- [Key files](#Key-files)

## What does it solve?

Once the application gets huge, keep it with good performance is one of the most challenging. A good approach that helps us is to create small chunks and get them smartly. Getting components async/lazy and choose the right moment to do it can help us a lot.
vue-cli (using behind the scenes Vue and webpack) give us a nice approach to delay some chunk and reuse them when they are called in more then one place.

The best part about it is easiness. You only will need to `change the way you are importing components` and combine it with a `v-if directive`. Let's take a look.

### Import differences

First of all, let's see the difference between the normal import and async/lazy import.

**Normal import**

```sh
<template>
    <div>
        <!-- Once rendering the dad component, myNomalComponent also will be rendered -->
        <myNomalComponent/>
    </div>
</template>

import Vue from "vue";
import myNomalComponent from './myNomalComponent.vue'

export default Vue.extend({
    components: {
        myNomalComponent
    }
})
```

**Async/Lazy import**

```sh
<template>
    <div>
        <!-- This combination between the v-if directive and the import in a function-->
        <!-- makes the component been rendered into a separated chunk.-->
        <myAsyncComponent v-if="isOpened"/>

        <button @click="isOpened=true"> btn </button>
    </div>
</template>

import Vue from "vue";

export default Vue.extend({
    components: {
        myAsyncComponent: () => import('./myAsyncComponent.vue')

        // on vue 3
        // you must import defineAsyncComponent from vue ;)
        myAsyncComponentWithVue3: defineAsyncComponent(() => import('myAsyncComponentWithVue3.vue'))
    },
    data() {
        return {
            isOpened: false
        }
    }
})
```

## Key files
