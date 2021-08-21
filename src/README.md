# vue-template - Loading application smartly

Hi, everyone! 👋

This is a nice repo with some approaches to use in VueJS (2.x) projects. [You may find more here](https://github.com/open-ish/vue2-template) or change by the branch at GitHub.

If you wanna, let's get in touch!

## What're we gonna use?

- [VueJS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)

## Summary

1. [Loading application smartly](#Loading-application-smartly)
2. [Pre-requirements](#Installation)

## Loading application smartly

As a developer, you probably have noticed that there are differences between data that we have in applications.

For example, if you imagine some e-commerce, we could have `user data`, cart data, catalogue data, etc. Of course, the kind of data changes by each application, but all applications will have a kind of `data scale relevance - I mean, some data are more important than others`. So, if you put it in mind, probably, `user data` will be the most important data in our example, and this happens because `user data` can be used to get all other data - `of course, it will depend on the project architecture`.

It's really important to `understand the relevance/importance of each data and create our application respecting it`. So, again, let's get the e-commerce example. If the `user data` can be necessary to get all (or almost) other data, we need to make sure the `user data` is available as soon as possible. Because if we don't do that, we can have a lot of `async problems` with our application.

As crazy it sounds, we can easily apply it at the Vue applications, but I have used all that context because the most important thing here is to understand the reason. And that approach will avoid that you have many async problems.

[You can see the PR with key files here](https://github.com/open-ish/vue2-template/pull/1/files)

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
