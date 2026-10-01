---
id: "en-php-function-function-str-decrement"
language: "php"
lang: "en"
category: "function"
name: "str_decrement"
title: "Decrement an alphanumeric string"
signature: "string str_decrement(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/en/function.str-decrement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrement an alphanumeric string

## Description

```php
string str_decrement(string $string)
```

Returns the decremented alphanumeric ASCII `$string`.

## Parameters

- **`$string`** — The input string.

## Return Values

Returns the decremented alphanumeric ASCII string.

## Errors/Exceptions

A `ValueError` is thrown if `$string` is empty.

A `ValueError` is thrown if `$string` is not an alphanumeric ASCII string.

A `ValueError` is thrown if `$string` cannot be decremented. For example, `"A"` or `"0"`.

## Examples

**Basic `str_decrement()` example**

```php


<?php
$str = 'ABC';
var_dump(str_decrement($str));
?>

    
```

The above example will output:

```text


string(3) "ABB"

    
```

**`str_decrement()` example with a carry**

```php


<?php
$str = 'ZA';
var_dump(str_decrement($str));

$str = 'AA';
var_dump(str_decrement($str));
?>

    
```

The above example will output:

```text


string(2) "YZ"
string(1) "Z"

    
```

## See Also

`str_increment()`
