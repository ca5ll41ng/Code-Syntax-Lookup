---
id: "en-php-function-uri-whatwg-url-getquery"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getQuery"
title: "Retrieve the query component"
signature: "public string|null Uri\\WhatWg\\Url::getQuery()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the query component

## Description

```php
public string|null Uri\WhatWg\Url::getQuery()
```

Retrieves the query component.

## Parameters

This function has no parameters.

## Return Values

Returns the query component as a `string` if the query component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getQuery()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com?foo/bar");

echo $url->getQuery();
?>

   
```

The above example will output:

```text


foo/bar

   
```

## See Also

 `Uri\WhatWg\Url::withQuery()` `Uri\Rfc3986\Uri::getRawQuery()` `Uri\Rfc3986\Uri::getQuery()`
