---
id: "en-php-function-function-yaz-set-option"
language: "php"
lang: "en"
category: "function"
name: "yaz_set_option"
title: "Sets one or more options for connection"
signature: "void yaz_set_option(resource $id, string $name, string $value)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets one or more options for connection

## Description

```php
void yaz_set_option(resource $id, string $name, string $value)
```

```php
void yaz_set_option(resource $id, array $options)
```

Sets one or more options on the given connection.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$name` or `$options`** — May be either a string or an array. — If given as a string, this will be the name of the option to set. You'll need to give it's `$value`. — If given as an array, this will be an associative array (option name => option value).
  | Name | Description |
  | --- | --- |
  | implementationName | implementation name of server |
  | implementationVersion | implementation version of server |
  | implementationId | implementation ID of server |
  | schema | schema for retrieval. By default, no schema is used. Setting this option is equivalent to using function `yaz_schema()` |
  | preferredRecordSyntax | record syntax for retrieval. By default, no syntax is used. Setting this option is equivalent to using function `yaz_syntax()` |
  | start | offset for first record to be retrieved via `yaz_search()` or `yaz_present()`. First record is numbered has a start value of 0. Second record has start value 1. Setting this option in combination with option `count` has the same effect as calling `yaz_range()` except that records are numbered from 1 in `yaz_range()` |
  | count | maximum number of records to be retrieved via `yaz_search()` or `yaz_present()`. |
  | elementSetName | element-set-name for retrieval. Setting this option is equivalent to calling `yaz_element()`. |


- **`$value`** — The new value of the option. Use this only if the previous argument is a string.

## Return Values

No value is returned.
