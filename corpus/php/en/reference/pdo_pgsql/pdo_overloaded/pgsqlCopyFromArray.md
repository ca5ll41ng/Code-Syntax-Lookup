---
id: "en-php-function-pdo-pgsqlcopyfromarray"
language: "php"
lang: "en"
category: "function"
name: "PDO::pgsqlCopyFromArray"
title: " `Pdo\\Pgsql::copyFromArray()`"
signature: "#[\\Deprecated] public bool PDO::pgsqlCopyFromArray(string $tableName, array|Traversable $rows, string $separator = \"\\t\", string $nullAs = \"\\\\\\\\N\", string|null $fields = null)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo.pgsqlcopyfromarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

#  `Pdo\Pgsql::copyFromArray()`

## Description

```php
#[\Deprecated] public bool PDO::pgsqlCopyFromArray(string $tableName, array|Traversable $rows, string $separator = "\t", string $nullAs = "\\\\N", string|null $fields = null)
```

This method is an alias of: `Pdo\Pgsql::copyFromArray()`.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The `$rows` parameter now also accepts a `Traversable`; previously only an `array` was accepted. |
