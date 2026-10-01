---
id: "en-php-function-pdo-pgsql-copyfromarray"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::copyFromArray"
title: "Copy data from a PHP array into a table"
signature: "public bool Pdo\\Pgsql::copyFromArray(string $tableName, array|Traversable $rows, string $separator = \"\\t\", string $nullAs = \"\\\\\\\\N\", string|null $fields = null)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.copyfromarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data from a PHP array into a table

## Description

```php
public bool Pdo\Pgsql::copyFromArray(string $tableName, array|Traversable $rows, string $separator = "\t", string $nullAs = "\\\\N", string|null $fields = null)
```

Copies data from `$rows` array to table `$tableName` using `$separator` as fields delimiter and `$fields` list.

## Parameters

- **`$tableName`** — String containing table name.
- **`$rows`** — An indexed `array` (or `Traversable`) of `string`s with fields separated by `$separator`.
- **`$separator`** — Delimiter used to separate fields in an entry of the `$rows` array.
- **`$nullAs`** — How to interpret SQL `NULL` values.
- **`$fields`** — List of fields to insert.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$rows` now also accepts a `Traversable`; previously only an `array` was accepted. |

## Examples

**`Pdo\Pgsql::copyFromArray()` example**

Each element of `$rows` is one record whose fields are joined by `$separator` (a tab by default).

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->exec('CREATE TABLE fruits (id int, name text, qty int)');

$rows = [
    "1\tapple\t10",
    "2\tbanana\t20",
    "3\tcherry\t30",
];
$db->copyFromArray('fruits', $rows);

foreach ($db->query('SELECT * FROM fruits ORDER BY id') as $row) {
    echo "{$row['id']} {$row['name']} {$row['qty']}\n";
}
?>

   
```

The above example will output:

```text


1 apple 10
2 banana 20
3 cherry 30

   
```

## See Also

 `Pdo\Pgsql::copyToArray()` `Pdo\Pgsql::copyFromFile()` `Pdo\Pgsql::copyToFile()`
