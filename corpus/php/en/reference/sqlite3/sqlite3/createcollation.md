---
id: "en-php-function-sqlite3-createcollation"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::createCollation"
title: "Registers a PHP function for use as an SQL collating function"
signature: "public bool SQLite3::createCollation(string $name, callable $callback)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.createcollation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a PHP function for use as an SQL collating function

## Description

```php
public bool SQLite3::createCollation(string $name, callable $callback)
```

Registers a PHP function or user-defined function for use as a collating function within SQL statements.

## Parameters

- **`$name`** — Name of the SQL collating function to be created or redefined
- **`$callback`** — The name of a PHP function or user-defined function to apply as a callback, defining the behavior of the collation. It should accept two values and return as `strcmp()` does, i.e. it should return -1, 1, or 0 if the first string sorts before, sorts after, or is equal to the second. — This function need to be defined as: `int``{collation}()` `mixed``$value1` `mixed``$value2`

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SQLite3::createCollation()` example**

Register the PHP function `strnatcmp()` as a collating sequence in the SQLite3 database.

```php


<?php

$db = new SQLite3(":memory:");
$db->exec("CREATE TABLE test (col1 string)");
$db->exec("INSERT INTO test VALUES ('a1')");
$db->exec("INSERT INTO test VALUES ('a10')");
$db->exec("INSERT INTO test VALUES ('a2')");

$db->createCollation('NATURAL_CMP', 'strnatcmp');

$defaultSort = $db->query("SELECT col1 FROM test ORDER BY col1");
$naturalSort = $db->query("SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP");

echo "default:\n";
while ($row = $defaultSort->fetchArray()){
    echo $row['col1'], "\n";
}

echo "\nnatural:\n";
while ($row = $naturalSort->fetchArray()){
    echo $row['col1'], "\n";
}

$db->close();

?>

    
```

The above example will output:

```text



default:
a1
a10
a2

natural:
a1
a2
a10


    
```

## See Also

 The SQLite collation documentation: []()
