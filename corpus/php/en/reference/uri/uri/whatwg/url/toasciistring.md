---
id: "en-php-function-uri-whatwg-url-toasciistring"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::toAsciiString"
title: "Recompose the URL as an ASCII `string`"
signature: "public string Uri\\WhatWg\\Url::toAsciiString()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.toasciistring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recompose the URL as an ASCII `string`

## Description

```php
public string Uri\WhatWg\Url::toAsciiString()
```

Recomposes the URL as an ASCII `string`, using punycode transcription instead of Unicode characters in the host component.

## Parameters

This function has no parameters.

## Return Values

Returns the recomposed URL as an ASCII `string`.

## Examples

**`Uri\WhatWg\Url::toAsciiString()` basic example**

```php


<?php

$url = new \Uri\WhatWg\Url("https://täst.example.com/foo/bar?baz");

echo $url->toAsciiString();

   
```

The above example will output:

```text


https://xn--tst-qla.example.com/foo/bar?baz

   
```

## See Also

 `Uri\WhatWg\Url::toUnicodeString()` `Uri\Rfc3986\Uri::toRawString()` `Uri\Rfc3986\Uri::toString()`
