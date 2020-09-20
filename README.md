# Eve Materials Lookup

See https://lasellers.github.io/eve-materials-lookup/ for a live running version.

Data pulled from https://docs.google.com/spreadsheets/d/1ZxHoEcl-831osyZT8eXBvSH8gTKXLpOngPmkKgRAcNk/edit#gid=1857997663


## Todo

* If I can find a data sheet for the blueprints, could add a dropdown with blueprint names that you would
select which would auto-select all the resources.
* https://docs.google.com/spreadsheets/d/1qY5K7CfyuPZPun9hUf_RnchMNVpKPtMlN0iACmUOemA/edit#gid=0
* Change the production.csv loader to something that happens after the app starts we we can get 
a loader spinner. As-is, the almost 12mb (147k records) load that happens is a bit ...
slow on some devices.
* Hmm. Could re-process it so the resource column had all the resources for a single planet. Hmm...
* May add a small suggestion area above resources suggesting some of the best planets to farm PI from, given what you are looking for.


## Versions
* v1 September 19 2020. Pulled together in a few hours Saturday partly to practice using VueJS and
partly because writing a program to handle this was less hassle than doing it by hand.
* v1.1 Clean up the UI for phones & tablets. Works decently on my phone and tablet now.
 Could always use more tweaking of course.


## Project setup
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

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Deploy
```
git checkout -b gh-pages
git add dist
npm run build
git subtree push --prefix dist origin gh-pages 
git push origin gh-pages
```
