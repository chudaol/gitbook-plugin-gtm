# gitbook-plugin-gtm
<p>
  <a href="https://www.npmjs.com/package/gitbook-plugin-gtm"><img src="https://img.shields.io/npm/dt/gitbook-plugin-gtm.svg" alt="Downloads"></a>
</p>
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

You need to setup a trigger called 'GitBook Virtual PageView' (for example) which fires on a custom event called 'virtualPageView'.

![](https://github.com/luisherranz/gitbook-plugin-gtm/raw/master/trigger.png)

Then setup a variable called `'DataLayer - page title'` (for example) which is a dataLayer value of `page.title` and another variable called `'DataLayer - page url'` which is a dataLayer value of `page.url`.

![](https://github.com/luisherranz/gitbook-plugin-gtm/raw/master/add-variable.png)

Then setup a new Universal Analytics tag which has all your usual pageview settings but with 2 'Fields to Set' (under More Settings). Set `title` to `{{DataLayer - page title}}` and `page` to `{{DataLayer - page url}}`.

![](https://github.com/luisherranz/gitbook-plugin-gtm/raw/master/fields.png)

Finally set the trigger to 'virtualPageView' and you'll find everytime you push the event + data into the datalayer you'll get a pageView fired off with your virtual page's title and virtual url.

![](https://github.com/luisherranz/gitbook-plugin-gtm/raw/master/tag.png)
