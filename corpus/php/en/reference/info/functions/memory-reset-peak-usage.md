---
id: "en-php-function-function-memory-reset-peak-usage"
language: "php"
lang: "en"
category: "function"
name: "memory_reset_peak_usage"
title: "Reset the peak memory usage"
signature: "void memory_reset_peak_usage()"
module: "info"
source_url: "https://www.php.net/manual/en/function.memory-reset-peak-usage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reset the peak memory usage

## Description

```php
void memory_reset_peak_usage()
```

Resets the peak memory usage returned by the `memory_get_peak_usage()` function.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`memory_reset_peak_usage()` example**

```php


<?php

var_dump(memory_get_peak_usage());

$a = str_repeat("Hello", 424242);
var_dump(memory_get_peak_usage());

unset($a);
memory_reset_peak_usage();

$a = str_repeat("Hello", 2424);
var_dump(memory_get_peak_usage());

?>

    
```

The above example will output something similar to:

```text


int(422440)
int(2508672)
int(399208)

    
```

## See Also

`memory_get_peak_usage()`
