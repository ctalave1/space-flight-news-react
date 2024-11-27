# Space Flight News React

A project I worked on as a learning exercise to brush up on my skills with React and Typescript.


[See Project Live](https://space-flight-news-react-vert.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [How to Run Locally](#how-to-run-locally)
- [How to Build for Deployment](#how-to-build-for-deployment)

## Overview

A project that I worked on to brush up on my skills with React and to see how to setup a project using React with Vite.

I followed along with this [Medium article](https://javascript.plainenglish.io/building-a-lightning-fast-spa-with-vite-and-react-8acb23a320a4) to start off, but also added TypeScript to the project myself so that I could get some practice with that, as well. The project also makes use of Tailwind CSS for simpler styling and responsiveness.

This project displays links to article thumbnails gotten from the [Spaceflight News API](https://www.spaceflightnewsapi.net/) and then allows a user to click on one of those thumbnails to be taken to a page for that particular article. It also has a search bar to filter for articles on a specific keyword that the user inputs.

The project is also responsive, adjusting to screen size changes.

### Prerequisites

```bash
Install Node.js
https://nodejs.org/
```

## Setup Instructions

1. Clone the repository to your local machine

2. Install dependencies

```bash
npm install
```

### How to Run Locally

```bash
npm run dev
```

### How to Build for Deployment

```bash
npm run build
```