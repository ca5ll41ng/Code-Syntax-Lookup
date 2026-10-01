---
id: "en-php-function-function-ftok"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "ftok"
title: "Convert a pathname and a project identifier to a System V IPC key"
signature: "int ftok(string $filename, string $project_id)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.ftok.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a pathname and a project identifier to a System V IPC key

## Description

```php
int ftok(string $filename, string $project_id)
```

The function converts the `$filename` of an existing accessible file and a project identifier into an `integer` for use with for example `shmop_open()` and other System V IPC keys.

## Parameters

- **`$filename`** — Path to an accessible file.
- **`$project_id`** — Project identifier. This must be a one character string.

## Return Values

On success the return value will be the created key value, otherwise `-1` is returned.

## See Also

 `shmop_open()` `sem_get()`
