---
id: "en-php-function-pdo-pgsql-escapeidentifier"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::escapeIdentifier"
title: "Escapes a string for use as an SQL identifier"
signature: "public string Pdo\\Pgsql::escapeIdentifier(string $input)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.escapeidentifier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escapes a string for use as an SQL identifier

## Description

```php
public string Pdo\Pgsql::escapeIdentifier(string $input)
```

Escapes a string for use as an SQL identifier, such as a table, column, or function name. This is useful when a user-supplied identifier might contain special characters that would otherwise not be interpreted as part of the identifier by the SQL parser, or when the identifier might contain upper case characters whose case should be preserved.

## Parameters

- **`$input`** — A `string` containing text to be escaped.

## Return Values

A `string` containing the escaped data.

## Examples

**`Pdo\Pgsql::escapeIdentifier()` example**

```php


<?php
$pdo = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);

$unescapedTableName = 'UnescapedTableName';
$pdo->exec("CREATE TABLE $unescapedTableName ()");

$escapedTableName = $pdo->escapeIdentifier('EscapedTableName');
$pdo->exec("CREATE TABLE $escapedTableName ()");

$statement = $pdo->query(
  "SELECT relname FROM pg_stat_user_tables WHERE relname ilike '%tablename'"
);

var_export($statement->fetchAll(PDO::FETCH_COLUMN, 0));

$tableNameWithSymbols = 'Table-Name-With-Symbols';
$pdo->exec("CREATE TABLE $tableNameWithSymbols ()");
?>

   
```

The above example will output something similar to:

```text


array (
  0 => 'unescapedtablename',
  1 => 'EscapedTableName',
)
Fatal error: Uncaught PDOException: SQLSTATE[42601]: Syntax error: 7 ERROR:  syntax error at or near "Table"
LINE 1: CREATE TABLE Table-Name-With-Symbols ()

   
```

## See Also

 `PDO::quote()`
