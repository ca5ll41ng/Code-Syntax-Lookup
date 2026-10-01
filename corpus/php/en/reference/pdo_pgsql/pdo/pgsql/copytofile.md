---
id: "en-php-function-pdo-pgsql-copytofile"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::copyToFile"
title: "Copy data from table into file"
signature: "public bool Pdo\\Pgsql::copyToFile(string $tableName, string $filename, string $separator = \"\\t\", string $nullAs = \"\\\\\\\\N\", string|null $fields = null)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.copytofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data from table into file

## Description

```php
public bool Pdo\Pgsql::copyToFile(string $tableName, string $filename, string $separator = "\t", string $nullAs = "\\\\N", string|null $fields = null)
```

Copies data from table into file specified by `$filename` using `$separator` as fields delimiter and `$fields` list.

## Parameters

- **`$filename`** — Filename to export data.
- **`$fields`** — List of fields to export.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If `$filename` cannot be opened for writing, or cannot be written to, the failure is reported through the connection's error handling (see `PDO::ATTR_ERRMODE`); with `PDO::ERRMODE_EXCEPTION` a PDOException is thrown.

## Examples

**`Pdo\Pgsql::copyToFile()` example**

The table is written to `$filename`, one record per line, with fields joined by `$separator`.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->exec('CREATE TABLE fruits (id int, name text, qty int)');
$db->exec("INSERT INTO fruits VALUES (1, 'apple', 10), (2, 'banana', 20)");

$db->copyToFile('fruits', '/tmp/fruits.tsv');
echo file_get_contents('/tmp/fruits.tsv');
?>

   
```

The above example will output:

```text


1	apple	10
2	banana	20

   
```

## See Also

 `Pdo\Pgsql::copyFromFile()` `Pdo\Pgsql::copyFromArray()` `Pdo\Pgsql::copyToArray()`
