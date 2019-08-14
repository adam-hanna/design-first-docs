---
title: Introduction
type: guide
order: 2
vue_version: 0.0.1
---

## What is design-first?

design-first is a command line tool to help you build better typescript http REST api's, faster. design-first api's begin with a `design.json` file which specifies the api's endpoints, payloads and return types. `$ design-first gen` takes information from this `design.json` file and takes care of all of the plumbing, leaving you to focus on implmentation.

One of design-first's principles is the separation of concerns, especially authentication (i.e. "who are you?"), authorization (i.e. "are you allowed to access this?") and business logic. These key components are clearly separated for you in your api to focus on each, individually, without mixing concerns.

## Getting Started

<a class="button" href="installation.html">Installation</a>

<p class="tip">This guide assumes intermediate level knowledge of JavaScript and Typescript. If you are totally new to back-end development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!</p>

To start a new design-first api, use the initialize command:

```bash
$ design-first init my-first-api
```

This will create a new directory for you at `./my-first-api/`.

Next, change directories to this new folder and npm install:

```bash
$ cd my-first-api
$ npm install
```

In order to run, a design-first api needs a `.env` file and a `design.json` file. Two example files have been provided for you.

```bash
$ cp .env.example .env
$ cp design.example.json design.json
```

Make the necessary changes to your [design file](design-file.html) and then generate your api.

```bash
$ design-first gen
```

Finally, code out the necessary models, and authentication, authorization and business logic and run your new api with:

```bash
$ npm run dev
```

See the [examples](examples.html) for more information.
