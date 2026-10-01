---
id: "en-php-function-uri-whatwg-url-withpath"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withPath"
title: "Modify the path component"
signature: "public static Uri\\WhatWg\\Url::withPath(string $path)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the path component

## Description

```php
public static Uri\WhatWg\Url::withPath(string $path)
```

Creates a new URL and modifies its path component.

## Parameters

- **`$path`** — New path component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withPath()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com/foo/bar");
$url = $url->withPath("/baz");

echo $url->getPath();
?>

   
```

The above example will output:

```text


/baz

   
```

## See Also

 `Uri\WhatWg\Url::getPath()` `Uri\Rfc3986\Uri::withPath()`
