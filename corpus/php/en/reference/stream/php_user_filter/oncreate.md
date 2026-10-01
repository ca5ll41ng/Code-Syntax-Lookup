---
id: "en-php-function-php-user-filter-oncreate"
language: "php"
lang: "en"
category: "function"
name: "php_user_filter::onCreate"
title: "Called when creating the filter"
signature: "public bool php_user_filter::onCreate()"
module: "stream"
source_url: "https://www.php.net/manual/en/php-user-filter.oncreate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Called when creating the filter

## Description

```php
public bool php_user_filter::onCreate()
```

This method is called during instantiation of the filter class object. If your filter allocates or initializes any other resources (such as a buffer), this is the place to do it.

When your filter is first instantiated, and `yourfilter->onCreate()` is called, a number of properties will be available as shown in the table below.

| Property | Contents |
| --- | --- |
| `FilterClass->filtername` | A string containing the name the filter was instantiated with. Filters may be registered under multiple names or under wildcards. Use this property to determine which name was used. |
| `FilterClass->params` | The contents of the `$params` parameter passed to `stream_filter_append()` or `stream_filter_prepend()`. |
| `FilterClass->stream` | The stream resource being filtered. Maybe available only during `filter()` calls when the `closing` parameter is set to `false`. |

## Parameters

This function has no parameters.

## Return Values

Your implementation of this method should return `false` on failure, or `true` on success.
