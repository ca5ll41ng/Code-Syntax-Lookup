---
id: "en-php-function-mysqli-debug"
language: "php"
lang: "en"
category: "function"
name: "mysqli::debug"
aliases: ["mysqli_debug"]
title: "Performs debugging operations"
signature: "public true mysqli::debug(string $options)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.debug.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs debugging operations

## Description

Object-oriented style

```php
public true mysqli::debug(string $options)
```

Procedural style

```php
true mysqli_debug(string $options)
```

Performs debugging operations using the Fred Fish debugging library.

## Parameters

- **`$options`** — A string representing the debugging operation to perform — The debug control string is a sequence of colon separated fields as follows: `<field_1>:<field_2>:<field_N>` Each field consists of a mandatory flag character followed by an optional `,` and comma separated list of modifiers: `flag[,modifier,modifier,...,modifier]` — | `$options` character | Description | | --- | --- | | O | `MYSQLND_DEBUG_FLUSH` | | A/a | `MYSQLND_DEBUG_APPEND` | | F | `MYSQLND_DEBUG_DUMP_FILE` | | i | `MYSQLND_DEBUG_DUMP_PID` | | L | `MYSQLND_DEBUG_DUMP_LINE` | | m | `MYSQLND_DEBUG_TRACE_MEMORY_CALLS` | | n | `MYSQLND_DEBUG_DUMP_LEVEL` | | o | output to file | | T | `MYSQLND_DEBUG_DUMP_TIME` | | t | `MYSQLND_DEBUG_DUMP_TRACE` | | x | `MYSQLND_DEBUG_PROFILE_CALLS` |

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function now always returns `true`. Previously it returned `false` on failure. |

## Examples

**Generating a Trace File**

```php


<?php

/* Create a trace file in '/tmp/client.trace' on the local (client) machine: */
mysqli_debug("d:t:o,/tmp/client.trace");

?>

    
```

## Notes

> To use the `mysqli_debug()` function you must compile the MySQL client library to support debugging.

## See Also

`mysqli_dump_debug_info()` `mysqli_report()`
