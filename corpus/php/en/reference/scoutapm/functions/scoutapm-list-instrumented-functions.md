---
id: "en-php-function-function-scoutapm-list-instrumented-functions"
language: "php"
lang: "en"
category: "function"
name: "scoutapm_list_instrumented_functions"
title: "List functions scoutapm will instrument."
signature: "array scoutapm_list_instrumented_functions()"
module: "scoutapm"
source_url: "https://www.php.net/manual/en/function.scoutapm-list-instrumented-functions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# List functions scoutapm will instrument.

## Description

```php
array scoutapm_list_instrumented_functions()
```

Returns a list of the functions the extension will instrument.

## Parameters

This function has no parameters.

## Return Values

`scoutapm_list_instrumented_functions()` returns an array containing a list of all functions that the scoutapm extension is able to instrument in the current installation.

## Examples

**Fetch the list of functions scoutapm will instrument**

```php

    
<?php
print_r(scoutapm_list_instrumented_functions());
?>

   
```

The above example will output something similar to:

```text

    
Array
(
    [0] => file_get_contents
    [1] => file_put_contents
    [2] => fopen
    [3] => fread
    [4] => fwrite
    [5] => pdo->exec
    [6] => pdo->query
    [7] => pdo->prepare
    [8] => pdostatement->execute
)

   
```
