# gitbook-plugin-gtm
Google Tag Manager for Gitbook

### How to use?

Add plugin to your `book.json`, then run `gitbook install`:

```json
{
    "plugins": ["gtm"]
}
```

Configure gtm token:

```json
{
    "plugins": ["gtm"],
    "pluginsConfig": {
        "gtm": {
            "token": "GTM-XXXXXX"
        }
    }
}
```

### Virtual Page Views

Gitbook won't fire PageViews on each page change. To solve this problem you can add virtualPageViews:

```json
{
    "plugins": ["gtm"],
    "pluginsConfig": {
        "gtm": {
            "token": "GTM-XXXXXX",
            "virtualPageViews": true
        }
    }
}
```

It will fire this `dataLayer` event:

```javascript
dataLayer.push({
  'event':'virtualPageView',
  'page':{
    'title':'Some Document',
    'url':'/some-document.html',
  }
});
```

Then you'd setup a variable called `'DataLayer - page title'` (for example) which is a dataLayer value of `page.title` and another variable called `'DataLayer - page url'` which is a dataLayer value of `page.url`.

You then setup a new Universal Analytics tag which has all your usual pageview settings but with 2 'Fields to Set' (under More Settings). Set `title` to `{{DataLayer - page title}}` and `page` to `{{DataLayer - page url}}`.

Finally set the trigger to 'virtualPageView' and you'll find everytime you push the event + data into the datalayer you'll get a pageView fired off with your virtual page's title and virtual url.
