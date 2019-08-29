TOP TEN
=======

*Top Ten* is a social media application where user interaction finds basis in the top ten most recent headlines, as provided by [NewsAPI](https://newsapi.org/). The application uses a Rails backend, React frontend, and vanilla CSS for styling.

![](./demo-gifs/00-news-api.gif)

1. On page-load and interval after page-load, the application fetches and then renders the ten most recent headlines.
![](./demo-gifs/01-on-page-load.gif)

2. Users can view and visit the headlines presented without registration.
![](./demo-gifs/02-link-to-article.gif)

3. The footer buttons are still defunct.
![](./demo-gifs/03-defunct-footer.gif)

4. Relative measurements permit dynamic resizing of interface. BUG: text does not resize with window.
![](./demo-gifs/04-responsive-interface-except-text-size.gif)

5. Returning users may log in for special privileges, such as profile and commenting. Frontend and backend validations deliver error messages for incorrect user input.
![](./demo-gifs/05-login-and-errors.gif)

6. BUG: date headers break upon window resizing.
![](./demo-gifs/06-another-style-bug.gif)

7. Login and signup use Javascript web tokens to authorize current user, with BCrypt for authentication on the backend. React Router identifies the token and redirects the user.
![](./demo-gifs/07-jwt.gif)

8. Signout clears local storage of the token and redirects user to home.
![](./demo-gifs/08-signout.gif)

9. Users may create an account by filling in the fields noted, with errors for incorrect input. Note that the number field is for age and not yet labeled.
![](./demo-gifs/09-signup.gif)

10. More error messages if the backend fails to authenticate the user.
![](./demo-gifs/10-update-auth.gif)

11. Profile updates are instantly reflected using pessimistic rendering.
![](./demo-gifs/11-profile-update.gif)

12. Users may cancel update order.
![](./demo-gifs/12-cancel-update.gif)

13. BUG: only the update button on the update form currently works.
![](./demo-gifs/13-update-bug.gif)

14. Users may save articles they're interested in. The action grabs the relevant data from NewsAPI and persists it in the backend. The SAVE button switches for a DELETE button if the app detects an association between an article from NewsAPI and the users saved data.
![](./demo-gifs/14-save-feature.gif)

15. Deleting an article from the headlines section, whose objects are from NewsAPI and deleting an article from the user profile both remove the association from the app's backend and render changes.
![](./demo-gifs/15-delete-feature.gif)

16. Commenting on an article persists the article on the app's backend and associates it with the user. A user may view all articles they've commented on or saved in their profile.
![](./demo-gifs/16-commenting.gif)

17. Users may interact with each other about articles through article comments. Any article associated with a user gives that user access to all comments about the article
![](./demo-gifs/17-user-interaction.gif)

18. A user may delete comments if they are the author of those comments.
![](./demo-gifs/18-delete-comment.gif)

19. Deleting all comments for a given article will remove all associations of the user through comments, and therefore remove the article from the user's profile (unless they have other associations with the article, such as saves or mentions). However, deleting all comments does not yet instantly remove the article from profile -- the page must be refreshed or the user must further interact with the app to reset its state.
![](./demo-gifs/19-delete-all-comments.gif)

20. Deleting an article purges all associations between the user and the article.
![](./demo-gifs/20-delete-all-association.gif)

21. BUG: any comments showing in an article in the headlines section remain visible after signout, until the page is refreshed.
![](./demo-gifs/21-comment-after-signout-bug.gif)

22. A user may delete their account, easily enough to do so accidentally.
![](./demo-gifs/22-delete-account.gif)

##FUTURE FUNCTIONALITY

This application is not complete. Future functionality will allow features such as following, mentioning other users in articles, and categorizing articles. All these features are already established, albeit incompletely, in the backend. Additional functionality will include weather updates, web sockets for live chats about articles, a story feature that allows users to track a single story across multiple sources and compare facts, plus much more.

23. The backend is filled with unused routes.
![](./demo-gifs/23-unused-routes.gif)

24. The backend is filled with unused controllers and controller actions.
![](./demo-gifs/24-unused-controllers.gif)

25. The backend is filled with unused models and relations.
![](./demo-gifs/25-unused-models-and-relations.gif)

26. The frontend is complicated and malformed. Function naming follows no obvious convention. Much of the code is to fix a bug, to fix a bug, to fix a bug, and is better sorted out by a more concise and efficient backend, customized for the frontend experience.
![](./demo-gifs/26-front-end-mess.gif)

To be continued...
