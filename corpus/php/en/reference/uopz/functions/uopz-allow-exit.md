---
id: "en-php-function-function-uopz-allow-exit"
language: "php"
lang: "en"
category: "function"
name: "uopz_allow_exit"
title: "Allows control over disabled exit opcode"
signature: "void uopz_allow_exit(bool $allow)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-allow-exit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allows control over disabled exit opcode

## Description

```php
void uopz_allow_exit(bool $allow)
```

By default uopz disables the exit opcode, so `exit()` calls are practically ignored. `uopz_allow_exit()` allows to control this behavior.

## Parameters

- **`$allow`** — Whether to allow the execution of exit opcodes or not.

## Return Values

No value is returned.

## Examples

**`uopz_allow_exit()` example**

```php


<?php
exit(1);
echo 1;
uopz_allow_exit(true);
exit(2);
echo 2;
?>

   
```

The above example will output:

```text


1

   
```

## Notes

> OPcache optimizes away dead code after unconditional exit.

## See Also

 {{{ 

 `uopz_get_exit_status()`
