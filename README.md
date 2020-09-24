# Eve Materials Lookup

See https://lasellers.github.io/eve-materials-lookup/ for a live running version.

Data pulled from:

 https://docs.google.com/spreadsheets/d/1ZxHoEcl-831osyZT8eXBvSH8gTKXLpOngPmkKgRAcNk/edit#gid=1857997663

and

 https://docs.google.com/spreadsheets/d/1qY5K7CfyuPZPun9hUf_RnchMNVpKPtMlN0iACmUOemA/edit#gid=0


## Todo

* Hmm. Could re-process it so the resource column had all the resources for a single planet. Hmm...
* May add a small suggestion area above resources suggesting some of the best planets to farm PI from, given what you are looking for.


## Versions
* v1 September 19 2020. Pulled together in a few hours Saturday partly to practice using VueJS and
partly because writing a program to handle this was less hassle than doing it by hand.
* v1.1 Clean up the UI for phones & tablets. Works decently on my phone and tablet now.
Could always use more tweaking of course.
* v1.2
    * Found blueprints csv data: 
(https://docs.google.com/spreadsheets/d/1qY5K7CfyuPZPun9hUf_RnchMNVpKPtMlN0iACmUOemA/edit#gid=0)
Added a blueprints dropdown that auto-fills the resources using some of this data.
    * Changed the production.csv/blueprints.csv loader to something that happens after the app starts so we can get 
      a loader spinner. As it was, the almost 12mb (147k records) load that happens was a bit ...
      slow on some devices.
* v1.3 Mainly optimizations.
    * Initial data loading was too slow. Worked through the code to pin down the issues. Was mainly 
the code gathering up data for the dropdown boxes. Refactored that and sped up the load times by a
magnitude or so (ie, it is up to x10 faster now).
    * Also removed "Rigs" from blueprint dropdown as they didn't use PI.
    * Fixed font sizes on smaller phones like iPhones 8 and before.
    * Broke up the data loader into parts that can be monitored more easily to see where any slow downs
     are taking place. 
    * Will do a code cleanup for next version if all seems stable.
    * Todo Replace all magic numbers from CSVs


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
