---
id: "en-php-function-pdo-pgsql-copyfromfile"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::copyFromFile"
title: "Copy data from file into table"
signature: "public bool Pdo\\Pgsql::copyFromFile(string $tableName, string $filename, string $separator = \"\\t\", string $nullAs = \"\\\\\\\\N\", string|null $fields = null)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.copyfromfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data from file into table

## Description

```php
public bool Pdo\Pgsql::copyFromFile(string $tableName, string $filename, string $separator = "\t", string $nullAs = "\\\\N", string|null $fields = null)
```

Copies data from file specified by `$filename` into table `$tableName` using `$separator` as fields delimiter and `$fields` list

## Parameters

- **`$filename`** — Filename containing the data to import.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If `$filename` cannot be opened for reading, the failure is reported through the connection's error handling (see `PDO::ATTR_ERRMODE`); with `PDO::ERRMODE_EXCEPTION` a PDOException is thrown.

## Examples

**`Pdo\Pgsql::copyFromFile()` example**

The file holds one record per line, with fields joined by `$separator` (a tab by default).

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->exec('CREATE TABLE fruits (id int, name text, qty int)');

file_put_contents('/tmp/fruits.tsv', "1\tapple\t10\n2\tbanana\t20\n");
$db->copyFromFile('fruits', '/tmp/fruits.tsv');

echo $db->query('SELECT count(*) FROM fruits')->fetchColumn(), "\n";
?>

   
```

The above example will output:

```text


2

   
```

## See Also

 `Pdo\Pgsql::copyToFile()` `Pdo\Pgsql::copyFromArray()` `Pdo\Pgsql::copyToArray()`
