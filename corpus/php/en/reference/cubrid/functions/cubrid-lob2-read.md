---
id: "en-php-function-function-cubrid-lob2-read"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_read"
title: "Read from BLOB/CLOB data"
signature: "string cubrid_lob2_read(resource $lob_identifier, int $len)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read from BLOB/CLOB data

## Description

```php
string cubrid_lob2_read(resource $lob_identifier, int $len)
```

The `cubrid_lob2_read()` function reads `$len` bytes from the LOB data and returns the bytes read.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.
- **`$len`** — Length from buffer you want to read from the lob data.

## Return Values

Returns the contents as a string, `false` when there is no more data, or `null` on failure.

## Examples

**`cubrid_lob2_read()` example 1**

```php


<?php
// test_lob (id INT, contents CLOB)

$conn = cubrid_connect("localhost", 33000, "demodb", "public", "");

$req = cubrid_execute($conn, "select * from test_lob");

$row = cubrid_fetch_row($req, CUBRID_LOB);

print "position now is " . cubrid_lob2_tell($row[1]) . "\n";

cubrid_lob2_seek($row[1], 10, CUBRID_CURSOR_FIRST);

print "\nposition after moving farword is " . cubrid_lob2_tell($row[1]) . "\n";

$data = cubrid_lob2_read($row[1], 12);

print "\nposition after reading is " . cubrid_lob2_tell($row[1]) . "\n";

print $data . "\n";

cubrid_lob2_seek($row[1], 5, CUBRID_CURSOR_CURRENT);

print "\nposition after moving again is " . cubrid_lob2_tell($row[1]) . "\n";

$data = cubrid_lob2_read($row[1], 20);
print $data . "\n";

cubrid_disconnect($conn);
?>

   
```

**`cubrid_lob2_read()` example 2**

```php


<?php
// test_lob (id INT, contents CLOB)

$conn = cubrid_connect("localhost", 33000, "demodb", "dba", "");

$req = cubrid_execute($conn, "select * from test_lob");

$row = cubrid_fetch_row($req, CUBRID_LOB);

while (true) {
    if ($data = cubrid_lob2_read($row[1], 1024)) {
        print $data . "\n";
    }
    elseif ($data === false) {
        print "There is no more data\n";
        break;
    }
    else {
        print "There must some errors\n";
        break;
    }
}

cubrid_disconnect($conn);
?>

   
```

## See Also

 `cubrid_lob2_write()` `cubrid_lob2_seek()` `cubrid_lob2_seek64()` `cubrid_lob2_tell()` `cubrid_lob2_tell64()` `cubrid_lob2_size()` `cubrid_lob2_size64()`
