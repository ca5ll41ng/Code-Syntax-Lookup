---
id: "en-php-function-sqlite3-openblob"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::openBlob"
title: "Opens a stream resource to read a BLOB"
signature: "public resource|false SQLite3::openBlob(string $table, string $column, int $rowid, string $database = \"main\", int $flags = SQLITE3_OPEN_READONLY)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.openblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens a stream resource to read a BLOB

## Description

```php
public resource|false SQLite3::openBlob(string $table, string $column, int $rowid, string $database = "main", int $flags = SQLITE3_OPEN_READONLY)
```

Opens a stream resource to read or write a BLOB, which would be selected by:

SELECT `$column` FROM `$database`.`$table` WHERE rowid = `$rowid`

> It is not possible to change the size of a BLOB by writing to the stream. Instead, an UPDATE statement has to be executed, possibly using SQLite's zeroblob() function to set the desired BLOB size.

## Parameters

- **`$table`** — The table name.
- **`$column`** — The column name.
- **`$rowid`** — The row ID.
- **`$database`** — The symbolic name of the DB
- **`$flags`** — Either `SQLITE3_OPEN_READONLY` or `SQLITE3_OPEN_READWRITE` to open the stream for reading only, or for reading and writing, respectively.

## Return Values

Returns a stream resource, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.2.0 | The `$flags` parameter has been added, allowing to write BLOBs; formerly only reading was supported. |

## Examples

**`SQLite3::openBlob()` example**

```php


<?php
$conn = new SQLite3(':memory:');
$conn->exec('CREATE TABLE test (text text)');
$conn->exec("INSERT INTO test VALUES ('Lorem ipsum')");
$stream = $conn->openBlob('test', 'text', 1);
echo stream_get_contents($stream);
fclose($stream); // mandatory, otherwise the next line would fail
$conn->close();
?>

    
```

The above example will output:

```text


Lorem ipsum

    
```

**Incrementally writing a BLOB**

```php


<?php
$conn = new SQLite3(':memory:');
$conn->exec('CREATE TABLE test (text text)');
$conn->exec("INSERT INTO test VALUES (zeroblob(36))");
$stream = $conn->openBlob('test', 'text', 1, 'main', SQLITE3_OPEN_READWRITE);
for ($i = 0; $i < 3; $i++) {
    fwrite($stream,  "Lorem ipsum\n");
}
fclose($stream);
echo $conn->querySingle("SELECT text FROM test");
$conn->close();
?>

    
```

The above example will output:

```text


Lorem ipsum
Lorem ipsum
Lorem ipsum

    
```
