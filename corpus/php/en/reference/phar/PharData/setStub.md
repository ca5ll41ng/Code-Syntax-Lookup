---
id: "en-php-function-phardata-setstub"
language: "php"
lang: "en"
category: "function"
name: "PharData::setStub"
title: "Dummy function (Phar::setStub is not valid for PharData)"
signature: "public true PharData::setStub(resource|string $stub, int $length = -1)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.setstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dummy function (Phar::setStub is not valid for PharData)

## Description

```php
public true PharData::setStub(resource|string $stub, int $length = -1)
```

Non-executable tar/zip archives cannot have a stub, so this method simply throws an exception.

## Parameters

- **`$stub`** — Formally, a string or an open stream handle to use as the executable stub for this phar archive. This parameter is ignored.
- **`$length`** — `$stub` in bytes. This parameter is ignored.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `PharException` on all method calls

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | The return type is `true` now; previously, it was `bool`. |

## See Also

`Phar::setStub()`
