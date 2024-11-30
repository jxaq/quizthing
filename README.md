# Quizthing : A simple, yet functional quiz app

## Overview
This is one of my first projects, to help increase my skills in TS, Next.js, React, Node, etc.
One of the first ideas that went through my head was a quiz app, because I get quite annoyed with all the other ones such as Kahoot or Blooket, because they have quite complicated systems.

The overall design brief of this app is:

"A simple but functional quiz web-app, with functions to almost eliminate all chances of cheating, make the app accessible, and make it easy to use."

## Setup Overview

In this app, you will find 2 main web apps. 

- The Player-side app (the one players use to participate in a game)
- The Host-side app (the one people use to host a quiz)

The 2 apps need to be on seperate domains, and hosted as 2 different apps.

This is the **player-facing** web app branch of this repo. Go to the main-host branch to see the host-facing source code.

## Cheating Prevention
**So far, these are just ideas, that I know eventually, one of these won't be possible**

- Keeping the DB that contains the answers private, and only accessible to the servers.
- Keeping the Per-Quiz DB (the one that contains the stats for one quiz session), read-only for the users, and make the servers the only entity with write access.
- Answers aren't ever passed over to the user, and only kept on the server.
- Preventing a user from submitting multiple answers, and overwriting their current answer status for that question

## Simplicity & Ease of Use
The host side of the app will have a simple login page run through Clerk, and a simple UI to host a quiz, and make a quiz.
The player side of the app will be easy to join a quiz, and play.

## Accessibility
On the player side of the app, the user will have the ability to use the number keys to select their answer, and the whole page will be screen-reader friendly.

Also, there will be an option to change the font of the pages to one of three fonts:
- Noto Sans (Default)
- OpenDyslexic
- Courier

This preference will be stored in a simple "font=notosans" cookie.