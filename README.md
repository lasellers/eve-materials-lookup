# Eve Echoes Planetary Materials Lookup

Do you play the mobile game Eve Echoes? (ie, the mobile version of Eve Online) 

Do you like to build things, like ships? Lots and lots of ships?

Well, then you're probably hunting all over Eve looking for the materials to build them.

This is a SPA reference app to help you track down what star system are the best to setup planetary mining on based on what you're trying to build.

Btw, if you travel on down to Delve .... try to hunt me down and say Hello.


## Live version

See https://lasellers.github.io/eve-materials-lookup/ for a live running version hosted on githubs own pages.


## Data

Data pulled from:

 https://docs.google.com/spreadsheets/d/1ZxHoEcl-831osyZT8eXBvSH8gTKXLpOngPmkKgRAcNk/edit#gid=1857997663

and

 https://docs.google.com/spreadsheets/d/1qY5K7CfyuPZPun9hUf_RnchMNVpKPtMlN0iACmUOemA/edit#gid=0


## Todo

* The app is stable now, but I've been looking into various dynamic proogramming techniques to
optimize the responsiveness. For the next version, going to update the algs to see if we can't improve speed by about 100x.


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
* v1.4 Add routing for "Resources", "Yields" and "Suggestions". Optimize more -- the restructure 
and addition of several new sections has thrown off the speed of the app.
* v1.5
    * A lot of optimization to the generation and spinners. Still needs a bit more tweaking.
Moved some of the vuex to computed calls so that those can be cached until the dropdowns
that are hooked into the vuex state change. Still have some optimization and spinner issues
to look into. 
    * Fixed an issue with the region/constellation/system dropdown where all three could be selected.
Now only allows one at a time. 
    * Part of the reason I've worked on this project is to learn VueJs so ... we're getting there.
* v1.6 Minor optimization tweaking. Added a home/stats page with in-app instructions.
Fixed a bug with the "Suggestions" page where the resources for the default blueprint were not loading
do to a load order issue. Started to remove the abundant console logging for debugging issues.
Optimized speed for computing initial suggestions planet grouping.
* v1.7 Refactored a bit more -- pruning away code that wasn't needed now that I thought about it.
Shaved about 500 + 250 ish ms off of the "resources by planet" pre-calc function.
Removed the old
```
import productionCsv from '../assets/Production.csv'
import blueprintsCsv from '../assets/Blueprints.csv'
```
reference lines, etc as well. Originally the app bundled the csvs into the dist folder itself.
Which worked -- but it took several long seconds for anything to appear. Looked like the site was down.
The refactor to a spinner looks much better.

 
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
