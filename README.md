# vue-template - Breadcrumb apporach

Hi, everyone! 👋

This is a nice repo with some approaches to use in VueJS (2.x) projects. [You may find more here](https://github.com/open-ish/vue2-template) or change by the branch at GitHub.

If you wanna, let's get in touch!

## What're we gonna use?

- [VueJS (2.x | 3.x)](https://vuejs.org/)
- [VueRouter](https://router.vuejs.org/)

## Summary

1. [Approach 1 - Using finders field at router config 🚀](#Approach-1---finders-field) - `The best one 🎉`!
2. [Pre-requirements](#Installation)

## Approach 1 - finders field

At this approach, the idea is to create keys (which will be found at `finders array`) at route config and treat it in breadcrumb component itself. Here we'll use the join between `this.$route` (route instance) with finders keys.

Key files: \
[route config](https://github.com/open-ish/vue2-template/blob/feat/add-breadcrumb/src/router/pets.ts) \
[Breadcrumb](https://github.com/open-ish/vue2-template/blob/feat/add-breadcrumb/src/components/Breadcrumb.vue) \
[View](https://github.com/open-ish/vue2-template/blob/feat/add-breadcrumb/src/views/Pets/Pets.vue) \
[Fake database](https://github.com/open-ish/vue2-template/blob/feat/add-breadcrumb/src/views/Pets/database.ts)

## Installation

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```
