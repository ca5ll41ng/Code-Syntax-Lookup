---
id: "en-php-function-function-ibase-execute"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[1]}
name: "ibase_execute"
title: "Execute a previously prepared query"
signature: "resource ibase_execute(resource $query, mixed $values)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a previously prepared query

## Description

```php
resource ibase_execute(resource $query, mixed $values)
```

Execute a query prepared by `ibase_prepare()`.

This is a lot more effective than using `ibase_query()` if you are repeating a same kind of query several times with only some parameters changing.

## Parameters

- **`$query`** — An InterBase query prepared by `ibase_prepare()`.
- **`$values`**

## Return Values

If the query raises an error, returns `false`. If it is successful and there is a (possibly empty) result set (such as with a SELECT query), returns a result identifier. If the query was successful and there were no results, returns `true`.

> This function returns the number of rows affected by the query (if > 0 and applicable to the statement type). A query that succeeded, but did not affect any rows (e.g. an UPDATE of a non-existent record) will return `true`.

## Examples

**`ibase_execute()` example**

```php


<?php

$dbh = ibase_connect($host, $username, $password);

$updates = array(
    1 => 'Eric',
    5 => 'Filip',
    7 => 'Larry'
);

$query = ibase_prepare($dbh, "UPDATE FOO SET BAR = ? WHERE BAZ = ?");

foreach ($updates as $baz => $bar) {
    ibase_execute($query, $bar, $baz);
}

?>

   
```

## See Also

 `ibase_query()`
