---
id: "en-php-function-function-yaz-database"
language: "php"
lang: "en"
category: "function"
name: "yaz_database"
title: "Specifies the databases within a session"
signature: "bool yaz_database(resource $id, string $databases)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-database.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the databases within a session

## Description

```php
bool yaz_database(resource $id, string $databases)
```

This function allows you to change databases within a session by specifying one or more databases to be used in search, retrieval, etc. - overriding databases specified in call to `yaz_connect()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$databases`** — A string containing one or more databases. Multiple databases are separated by a plus sign `+`.

## Return Values

Returns `true` on success or `false` on failure.
