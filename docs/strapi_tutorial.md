
## Strapi Headless CMS

### Create New Strapi API

```bash
strapi new api
```

Follow prompt for Mongo Configuration. Enter DB Name, IP, User, Password, etc.

```bash
? Choose your main database: MongoDB
? Database name: blog-api
? Host: 127.0.0.1
? +srv connection: false
? Port (It will be ignored if you enable +srv): 27017
? Username:
? Password:
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: false
```

### Start Strapi

```
cd api
strapi start
```

It should open http://localhost:1337/admin if it doesn't, visit that URL and setup your initial adminstraitor account.

### Create Content Type

1. Select Content Type Builder from sidebar.
2. Click **+ Add Content Type** button near the top right
3. In the popup modal, add the content type name: post leave the rest default
4. Hit Save

### Add Fields To Content Type

1. Select the **+ Add New Field** blue button
2. Create a String Field, with the name: title
3. Click **+Add New Field**
4. Create a Text Field, with the name: content
5. Click **Advanced Settings** Tab, checkmark the **Display as a WYSIWYG** field
6. Click **+Add New Field**
7. Create a Media Field, with the name: image
8. Click **+Add New Field**
9. Create a Relation Field, change the left field name to: author
10. Change the right field by click the title of the box and select "User(Users-Permissions)" from the dropdown menu
11. Make sure you click the middle option that says "User has many Posts"
12. Click **Continue**
13. Finally, make sure you click **Save\*** at the top right.

The server will restart and you will have to re-login.

### Create Blog Posts

On the top-left of the sidebar you should see a new content type called "Posts".

1. Select Posts Content Type
2. Click **+ Add New Post**
3. Enter a title
4. Enter some content
5. Select yourself as the author, from the author dropdown menu
6. Add an image
7. Click **Save**

Repeat as many times as you want

### Set Roles & Permissions

In order to actually get access to this content type through you API and onto your frontend you'll need to configure permissions

1. Click **Roles & Permissions** from left sidebar
2. Click **Public** row
3. Under Permissions, select the **find** and **findone** fields
4. On the right, under **Advanced Settings\*, select the dropdown and click **ratelimit\*\*
5. Click **Save**