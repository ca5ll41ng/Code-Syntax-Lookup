---
id: "en-php-function-uri-whatwg-url-withquery"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withQuery"
title: "Modify the query component"
signature: "public static Uri\\WhatWg\\Url::withQuery(string|null $query)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the query component

## Description

```php
public static Uri\WhatWg\Url::withQuery(string|null $query)
```

Creates a new URL and modifies its query component.

## Parameters

- **`$query`** — New query component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withQuery()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com?foo=bar");
$url = $url->withQuery("foo=baz");

echo $url->getQuery();
?>

   
```

The above example will output:

```text


foo=baz

   
```

## See Also

 `Uri\WhatWg\Url::getQuery()` `Uri\Rfc3986\Uri::withQuery()`
