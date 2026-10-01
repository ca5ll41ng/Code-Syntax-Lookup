---
id: "en-php-function-function-scoutapm-get-calls"
language: "php"
lang: "en"
category: "function"
name: "scoutapm_get_calls"
title: "Returns a list of instrumented calls that have occurred"
signature: "array scoutapm_get_calls()"
module: "scoutapm"
source_url: "https://www.php.net/manual/en/function.scoutapm-get-calls.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a list of instrumented calls that have occurred

## Description

```php
array scoutapm_get_calls()
```

Returns a list of any instrumented function calls since `scoutapm_get_calls()` was last called. The list is cleared each time the function is called.

## Parameters

This function has no parameters.

## Return Values

`scoutapm_get_calls()` returns an array containing a list of all recorded calls to instrumented function calls.

## Examples

**Fetch instrumented calls**

```php


<?php

file_get_contents('a.txt');
file_get_contents('b.txt');

print_r(scoutapm_get_calls());
?>

   
```

The above example will output something similar to:

```text

    
Array
(
    [0] => Array
        (
            [function] => file_get_contents
            [entered] => 1576839727.7934
            [exited] => 1576839727.7935
            [time_taken] => 2.7894973754883E-5
            [argv] => Array
                (
                    [0] => a.txt
                )

        )

    [1] => Array
        (
            [function] => file_get_contents
            [entered] => 1576839727.7935
            [exited] => 1576839727.7935
            [time_taken] => 7.8678131103516E-6
            [argv] => Array
                (
                    [0] => b.txt
                )

        )

)

   
```
