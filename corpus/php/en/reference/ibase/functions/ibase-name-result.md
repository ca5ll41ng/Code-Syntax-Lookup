---
id: "en-php-function-function-ibase-name-result"
language: "php"
lang: "en"
category: "function"
name: "ibase_name_result"
title: "Assigns a name to a result set"
signature: "bool ibase_name_result(resource $result, string $name)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-name-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assigns a name to a result set

## Description

```php
bool ibase_name_result(resource $result, string $name)
```

This function assigns a name to a result set. This name can be used later in UPDATE|DELETE ... WHERE CURRENT OF `$name` statements.

## Parameters

- **`$result`** — An InterBase result set.
- **`$name`** — The name to be assigned.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ibase_name_result()` example**

```php


<?php
$result = ibase_query("SELECT field1,field2 FROM table FOR UPDATE");
ibase_name_result($result, "my_cursor");

$updateqry = ibase_prepare("UPDATE table SET field2 = ? WHERE CURRENT OF my_cursor");

for ($i = 0; ibase_fetch_row($result); ++$i) {
    ibase_execute($updateqry, $i);
}
?>

   
```

## See Also

 `ibase_prepare()` `ibase_execute()`
