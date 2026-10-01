---
id: "en-php-function-function-apcu-sma-info"
language: "php"
lang: "en"
category: "function"
name: "apcu_sma_info"
title: "Retrieves APCu Shared Memory Allocation information"
signature: "array|false apcu_sma_info(bool $limited = false)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-sma-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves APCu Shared Memory Allocation information

## Description

```php
array|false apcu_sma_info(bool $limited = false)
```

Retrieves APCu Shared Memory Allocation information.

## Parameters

- **`$limited`** — When set to `false` (default) `apcu_sma_info()` will return a detailed information about each segment.

## Return Values

Array of Shared Memory Allocation data; `false` on failure.

## Examples

**A `apcu_sma_info()` example**

```php


<?php
print_r(apcu_sma_info());
?>

   
```

The above example will output something similar to:

```text


Array
(
    [num_seg] => 1
    [seg_size] => 31457280
    [avail_mem] => 31448408
    [block_lists] => Array
        (
            [0] => Array
                (
                    [0] => Array
                        (
                            [size] => 31448408
                            [offset] => 8864
                        )

                )

        )

)

   
```

## See Also

  APCu configuration directives
