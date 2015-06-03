# gitbook-plugin-gtm
Google Tag Manager for Gitbook

### How to use?

Add plugin to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["gtm"]
}
```

Configure gtm token:

```
{
    "plugins": ["gtm"],
    "pluginsConfig": {
        "gtm": {
            "token": "GTM-XXXXXX"
        }
    }
}
```