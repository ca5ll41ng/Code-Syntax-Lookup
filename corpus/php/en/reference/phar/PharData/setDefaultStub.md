---
id: "en-php-function-phardata-setdefaultstub"
language: "php"
lang: "en"
category: "function"
name: "PharData::setDefaultStub"
title: "Dummy function (Phar::setDefaultStub is not valid for PharData)"
signature: "public bool PharData::setDefaultStub(string|null $index = null, string|null $webIndex = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.setdefaultstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dummy function (Phar::setDefaultStub is not valid for PharData)

## Description

```php
public bool PharData::setDefaultStub(string|null $index = null, string|null $webIndex = null)
```

Non-executable tar/zip archives cannot have a stub, so this method simply throws an exception.

## Parameters

- **`$index`** — Relative path within the phar archive to run if accessed on the command-line
- **`$webIndex`** — Relative path within the phar archive to run if accessed through a web browser

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Throws `PharException` on all method calls

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$webIndex` is nullable now. |

## See Also

`Phar::setDefaultStub()`
