# Chorum
[![CircleCI](https://circleci.com/gh/blixhavn/chorum.svg?style=svg)](https://circleci.com/gh/blixhavn/chorum) [![codecov](https://codecov.io/gh/blixhavn/chorum/branch/master/graph/badge.svg)](https://codecov.io/gh/blixhavn/chorum)

Chorum is a react-native app which aims to be a complete management app for choirs. Providing rosters, calendars with mandatory and sign-up events and song archive with notes, recordings and starting tones. If you have any ideas on functionality, please chime in!

### Technology
The app is made with React-Native, Redux and Firebase. New technology might be introduced later if necessary.

### Contributing
I'd love it if anyone wants to contribute to this little project. To start, have a look at our [issues](https://github.com/blixhavn/chorum/issues), fork the repo, and send over a pull request :) 

#### Getting started
To get Chorum to run locally, the following steps should be sufficient:
* Clone the repo
* CD into it and run `yarn install` to install Node dependencies
* run `yarn test` to run the tests locally.

For Android development, you need to have Android Studio installed, and set up either with an emulator, or connect your android phone. I have currently no guide for this.

For iOS development, I have currently no idea how to get started. Please fill me in here!

#### Commit style

Please don't be scared by these rules -- remember the power of interactive rebase and `git commit --amend` for cleaning up a branch before submitting a pull request (which means that `fixup` and `bleeeh` are perfectly fine before sending your work over here). 

We follow the [Udacity style guide](http://udacity.github.io/git-styleguide/). In short:

* Use imperative tone in header
* Prefix header with type of commit (**feat, fix, docs, style, refactor, test, chore**)
* Use body if needed - keep the header short
* Link all relevant issues in footer

Example:
```
chore: Create README file

Adds README file with status badges, info about the project, and a contributing guide.

solves: #2
```
