---
id: "en-php-function-uri-whatwg-url-getpath"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getPath"
title: "Retrieve the path component"
signature: "public string Uri\\WhatWg\\Url::getPath()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the path component

## Description

```php
public string Uri\WhatWg\Url::getPath()
```

Retrieves the path component.

## Parameters

This function has no parameters.

## Return Values

Returns the path component as a `string`.

## Examples

**`Uri\WhatWg\Url::getPath()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com/foo/bar");

echo $url->getPath();
?>

   
```

The above example will output:

```text


/foo/bar

   
```

## See Also

 `Uri\WhatWg\Url::withPath()` `Uri\Rfc3986\Uri::getRawPath()` `Uri\Rfc3986\Uri::getPath()`
