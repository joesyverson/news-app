# DATES

*features / technology*

* J W T authorization
* React Router
* self referential user relation
  * friends
  * message (web sockets)
    * chatroom per topic
  * database stores user avatar-images (https://edgeguides.rubyonrails.org/active_storage_overview.html)
* news A P I
  * https://newsapi.org/
  * comments and user-tagging
* parallel history
  * https://history.muffinlabs.com/#api
* weather
  * https://developer.yahoo.com/weather/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAACB9VIChli4jSDVzc478-VAFo7HM1C1t9kv-VWCXNoJ2Vnxu0GDoJIuoKHaG0svMOmc3i_hPgNJRpgX_OEQzWlubqaNYl7_QIf3Z7RkGp-Vy7nfgE-XXNoO7CTzopxnL4OieUdsjkhxref1o7JJzv47Di01LXDnRqWxrTMpxQc4d
* clock / calendar / journal
* email updates for mentions / tags
* donation by card
  * https://stripe.com/
* namespacing
* A P I key
* D B validations
* serializers
* tests
* vanilla C S S for desktop and mobile

*notes*

- attribution link
  - https://newsapi.org
- key
  - d1a63a25170149fcb27fe09d94da4de9

- basic fetch
  ```javascript

    let data = []
    fetch(req).then((r) => r.json()).then((json) => data = json)

  ```
  - five categories
    - technology and design
    - spirituality and health
    - science and philosophy
    - art, sports and culture
    - politics and history

*user stories*

- without registration, a user should have access to
  - headlines
  - about
  - contact
  - terms of use
  - privacy
- a registered user should be able to create a secure password that gives them access to the following features
  - commenting
    - mentions
    - subject tags
  - friends
  - saving articles
- a user should be able to search articles by
  - subject tags
  - title / description / author / periodical
  - date
  - articles should be filtered by saved / commented / tagged

*models*
  `excluding I D and timestamps`

- location
  - city
  - province / state
  - state / nation
- user_locations
- users
  - name
  - password
  - age
  - email
- articles
  - title
  - author
  - description
  - published_at
  - src
  - url
  - url_to_image
<!-- - comments -->
- article_comments
  - author (user)
  - content
  - tags
- article_mentions
- user_articles
