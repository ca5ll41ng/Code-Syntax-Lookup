---
id: "en-php-function-pdo-pgsql-copytoarray"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::copyToArray"
title: "Copy data from database table into PHP array"
signature: "public array|false Pdo\\Pgsql::copyToArray(string $tableName, string $separator = \"\\t\", string $nullAs = \"\\\\\\\\N\", string|null $fields = null)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.copytoarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data from database table into PHP array

## Description

```php
public array|false Pdo\Pgsql::copyToArray(string $tableName, string $separator = "\t", string $nullAs = "\\\\N", string|null $fields = null)
```

Copies data from `$tableName` into array using `$separator` as fields delimiter and `$fields` list

## Parameters

- **`$fields`** — List of fields to export.

## Return Values

Returns an array of rows, or `false` on failure.

## Examples

**`Pdo\Pgsql::copyToArray()` example**

Each returned element is one record, with fields joined by `$separator` and a trailing newline.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->exec('CREATE TABLE fruits (id int, name text, qty int)');
$db->exec("INSERT INTO fruits VALUES (1, 'apple', 10), (2, 'banana', 20)");

$rows = $db->copyToArray('fruits');
var_export($rows);
?>

   
```

The above example will output:

```text


array (
  0 => '1	apple	10
',
  1 => '2	banana	20
',
)

   
```

## See Also

 `Pdo\Pgsql::copyFromArray()` `Pdo\Pgsql::copyFromFile()` `Pdo\Pgsql::copyToFile()`
