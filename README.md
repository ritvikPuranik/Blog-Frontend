# My Blog Site
This is a simple Blog Site created using React. Express is used as the backend framework and mySql as the database(using Sequelize ORM).
## Features
The App is capable of the following functionalities - 
1. Sign Up of new users and Sign in of existing users - Currently its a basic approach, I'll be refining it in the future
2. Creating an article, viewing and editing the ones created by you.
3. Viewing all articles in your feed.
4. Adding, viewing and editing comments to each other's posts - In Progress

## Launch
In the project directory, you can run:
### `npm start`

## Working
Here's how the flow is designed-
1. When a User signs up on the platform, a new entry is created in the Users table and the corresponding userId(primary key) is stored in localStorage. This is used to identify the user throughout the journey.
2. If an existing user logs in, the Users table is queried and if the credentials are valid, it stores the userId again in localStorage.
3. In the "Feed" Page, a user can view all articles, while in "My Articles" page, he can only view his articles, and also has the option of editing them. The My Articles Page identifies the user from the localStorage
4. The user can compose an article, which inserts a new record into the blog_posts table, with the userId being the foreign key. This is used to identify which user wrote which article.
5. Whenever a user clicks on "Read More" for any article snippet, a dynamic route is created with the articleId, which is then used to fetch the entire article from the blog_posts table and present to the user.
6. When the user logs out, the localStorage is cleared and the cycle repeats.
