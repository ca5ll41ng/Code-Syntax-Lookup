---
id: "en-php-function-phardata-setalias"
language: "php"
lang: "en"
category: "function"
name: "PharData::setAlias"
title: "Dummy function (Phar::setAlias is not valid for PharData)"
signature: "public bool PharData::setAlias(string $alias)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.setalias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dummy function (Phar::setAlias is not valid for PharData)

## Description

```php
public bool PharData::setAlias(string $alias)
```

Non-executable tar/zip archives cannot have an alias, so this method simply throws an exception.

## Parameters

- **`$alias`** — A shorthand string that this archive can be referred to in `phar` stream wrapper access. This parameter is ignored.

## Return Values

## Errors/Exceptions

Throws `PharException` on all method calls

## See Also

`Phar::setAlias()`
