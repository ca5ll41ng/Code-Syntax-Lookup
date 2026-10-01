---
id: "en-php-function-function-posix-sysconf"
language: "php"
lang: "en"
category: "function"
name: "posix_sysconf"
title: "Returns system runtime information"
signature: "int posix_sysconf(int $conf_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-sysconf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns system runtime information

## Description

```php
int posix_sysconf(int $conf_id)
```

Returns system runtime information.

## Parameters

- **`$conf_id`** — Identifier of the variable with the following constants `POSIX_SC_ARG_MAX`, `POSIX_SC_PAGESIZE`, `POSIX_SC_NPROCESSORS_CONF`, `POSIX_SC_NPROCESSORS_ONLN`, `POSIX_SC_CHILD_MAX`, `POSIX_SC_CLK_TCK`

## Return Values

Returns the numeric value related to `$conf_id`

## Examples

**`posix_sysconf()` example**

Returns the number of active cpus.

```php


<?php
echo posix_sysconf(POSIX_SC_NPROCESSORS_ONLN);
?>

   
```

The above example will output:

```text


2

   
```
