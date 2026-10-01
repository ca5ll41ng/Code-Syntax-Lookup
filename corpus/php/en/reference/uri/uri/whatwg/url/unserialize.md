---
id: "en-php-function-uri-whatwg-url-unserialize"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::__unserialize"
title: "Deserialize the array from the data parameter into a Url object"
signature: "public void Uri\\WhatWg\\Url::__unserialize(array $data)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deserialize the array from the data parameter into a Url object

## Description

```php
public void Uri\WhatWg\Url::__unserialize(array $data)
```

Deserializes the `array` from the `$data` parameter into a `Uri\WhatWg\Url` object.

## Parameters

- **`$data`** — The serialized data as an `array`.

## Return Values

No value is returned.

## Errors/Exceptions

If the `__unserialize()` method is called on an already existing URL, Error is thrown.

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## See Also

 `Uri\WhatWg\Url::__serialize()` `Uri\Rfc3986\Uri::__unserialize()`
