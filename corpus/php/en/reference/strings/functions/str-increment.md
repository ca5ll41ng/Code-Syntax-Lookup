---
id: "en-php-function-function-str-increment"
language: "php"
lang: "en"
category: "function"
name: "str_increment"
title: "Increment an alphanumeric string"
signature: "string str_increment(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/en/function.str-increment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Increment an alphanumeric string

## Description

```php
string str_increment(string $string)
```

Returns the incremented alphanumeric ASCII `$string`.

## Parameters

- **`$string`** — The input string.

## Return Values

Returns the incremented alphanumeric ASCII string.

## Errors/Exceptions

A `ValueError` is thrown if `$string` is empty.

A `ValueError` is thrown if `$string` is not an alphanumeric ASCII string.

## Examples

**Basic `str_increment()` example**

```php


<?php
$str = 'ABC';
var_dump(str_increment($str));
?>

    
```

The above example will output:

```text


string(3) "ABD"

    
```

**`str_increment()` example with a carry**

```php


<?php
$str = 'DZ';
var_dump(str_increment($str));

$str = 'ZZ';
var_dump(str_increment($str));
?>

    
```

The above example will output:

```text


string(2) "EA"
string(3) "AAA"

    
```

## See Also

`str_decrement()`
