---
id: "en-php-function-function-uopz-get-exit-status"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_exit_status"
title: "Retrieve the last set exit status"
signature: "mixed uopz_get_exit_status()"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-exit-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the last set exit status

## Description

 {{{ 

```php
mixed uopz_get_exit_status()
```

Retrieves the last set exit status, i.e. the value passed to `exit()`.

 }}} 

## Parameters

 {{{ 

This function has no parameters.

 }}} 

## Return Values

 {{{ 

This function returns the last exit status, or `null` if `exit()` has not been called.

 }}} 

## Examples

 {{{ 

**`uopz_get_exit_status()` example**

 {{{ 

```php


<?php
exit(123); 
echo uopz_get_exit_status();?>

   
```

The above example will output:

```text


123

   
```

 }}} 

 }}} 

## Notes

 {{{ 

> OPcache optimizes away dead code after unconditional exit.

 }}} 

## See Also

 {{{ 

 `uopz_allow_exit()` 

 }}}
