# Redux basics

This repository serves as a support code sample to my talk on the basic concepts of [redux](https://github.com/reactjs/redux).

You can find the presentation [on my icloud](https://www.icloud.com/keynote/0cldl0AZHeijqzqpsZlhlo7NQ#redux-basics).
Don't be scared about the portuguese title, most of the slides are in english and feature quotes by @gaearon and @markerikson.

If you're interested on learning more about redux and the surrounding environment, be sure to check out the [https://github.com/markerikson/react-redux-links](react-redux-link) repository. It is full of fantastic content.

## Code samples

The files are supposed to be read on the following order.

### gist.js
> Slide 11

Features a single-file simple implementation of the classic counter store.

### combine-reducers.js
> Slide 13

Has some insights about what is and how redux's `combineReducers` works.

### on-react.js
> After combine-reducers.js

Has a minimal example app of how `Provider` and `connect` work, and how to integrate actions and reducers within React.

## Running the code samples

You can run most code samples by just running node, but note that you must install the dependencies before. e.g.

```bash
$ yarn install
$ node gist.js
```

> Note that we're supposing that you're using yarn and that you have node installed in your computer. In case you're wondering, you can install the dependencies using `npm install` just as well.
