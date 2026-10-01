---
id: "en-php-function-function-uopz-overload"
language: "php"
lang: "en"
category: "function"
name: "uopz_overload"
title: "Overload a VM opcode"
signature: "void uopz_overload(int $opcode, Callable $callable)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-overload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Overload a VM opcode

## Description

```php
void uopz_overload(int $opcode, Callable $callable)
```

Overloads the specified `$opcode` with the user defined function

## Parameters

- **`$opcode`** — A valid opcode, see constants for details of supported codes
- **`$callable`**

## Return Values

## Examples

**`uopz_overload()` example**

```php


<?php
uopz_overload(ZEND_EXIT, function(){});

exit();
echo "Hello World";
?>

   
```

The above example will output:

```text


Hello World

   
```
