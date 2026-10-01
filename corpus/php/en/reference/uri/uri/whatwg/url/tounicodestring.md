---
id: "en-php-function-uri-whatwg-url-tounicodestring"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::toUnicodeString"
title: "Recompose the URL as a Unicode `string`"
signature: "public string Uri\\WhatWg\\Url::toUnicodeString()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.tounicodestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recompose the URL as a Unicode `string`

## Description

```php
public string Uri\WhatWg\Url::toUnicodeString()
```

Recomposes the URL as a `string`, where the host component may contain Unicode characters.

## Parameters

This function has no parameters.

## Return Values

Returns the recomposed URL as a Unicode `string`.

## Examples

**`Uri\WhatWg\Url::toUnicodeString()` basic example**

```php


<?php

$url = new \Uri\WhatWg\Url("https://xn--tst-qla.example.com/foo/bar?baz");

echo $url->toUnicodeString();

   
```

The above example will output:

```text


https://täst.example.com/foo/bar?baz

   
```

## See Also

 `Uri\WhatWg\Url::toAsciiString()` `Uri\Rfc3986\Uri::toRawString()` `Uri\Rfc3986\Uri::toString()`
