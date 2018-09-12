# Vulcan Menu

## Manage your app navigation menus like a boss

This  package provides helpers to handle menu configuration for [Vulcan.js](http://vulcanjs.org/) applications. The idea is to separate menu configuration, handled by this package, from menu display, handled by your application UI. 

Instead of hardcoding menu items, this package allows you to register them in a shared data structure. Thus, any package can ask to add new links in the menu, without needing to actually modify your application menu, navigation and layout components.

Vulcan itself rely on similar principles when it comes to [routing](http://docs.vulcanjs.org/routing.html), with the `addRoute` method.

See the [Awesome Vulcan demo app](https://github.com/lbke/awesome-vulcan)  `core` package for an usage example.

**/!\ This is an experimental package, API will certainly evolve in the months to come**.

## Installation

Clone this repo:

```sh
git clone https://github.com/lbke/vulcan-menu
```

You can clone it directly in your app `packages` folder. You can also clone it in an isolated `vulcan-packages` folder outside of your app, and then set the `METEOR_PACKAGE_DIRS` environment variable to `"/some-dir/vulcan-packages"`. This way, you can put all your reusable package in this `vulcan-packages` folder without polluting your own app.

Then use the package in your app:

```js
import { theFunctionYouNeed } from "vulcan:menu"
```

This package won't be published on Atmosphere or npm until it is a bit more mature.

## Contributing

This package will evolve and improve depending on the use cases we encounter. Best way to contribute is to use it in your own app, and propose ideas, suggestions and PR based on your experience.

We seek for maximum reusability, so each method should be as configurable as possible, and split into independant functions whenever possible.

Possible improvements:

- improve API, manage hierarchies, nested items, icons...
- managing not one but multiple menus, e.g if you want to create a default menu but also another menu with different items (footer menu, top menu...)
- improve permission system (better API or reusing the related route own permissions to avoid redundancy)



*[Built with love by LBKE](https://github.com/lbke)*

