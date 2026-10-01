---
id: "en-php-function-function-oci-set-edition"
language: "php"
lang: "en"
category: "function"
name: "oci_set_edition"
title: "Sets the database edition"
signature: "bool oci_set_edition(string $edition)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-edition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the database edition

## Description

```php
bool oci_set_edition(string $edition)
```

Sets the database "edition" of objects to be used by a subsequent connections.

Oracle Editions allow concurrent versions of applications to run using the same schema and object names. This is useful for upgrading live systems.

Call `oci_set_edition()` before calling `oci_connect()`, `oci_pconnect()` or `oci_new_connect()`.

If an edition is set that is not valid in the database, connection will fail even if `oci_set_edition()` returns success.

When using persistent connections, if a connection with the requested edition setting already exists, it is reused. Otherwise, a different persistent connection is created

## Parameters

- **`$edition`** — Oracle Database edition name previously created with the SQL "`CREATE EDITION`" command.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Two scripts can use different versions of myfunc() at the same time**

```php


<?php

// File 1

echo "Version 1 of application\n";

oci_set_edition('ORA$BASE');
$c = oci_connect('hr', 'welcome', 'localhost/XE');

$s = oci_parse($c, "begin :r := myfunc(); end;");
oci_bind_by_name($s, ":r", $r, 20);
oci_execute($s);
echo "The result is $r\n";

?>

```

```php


<?php

// File 2

echo "Version 2 of application\n";

oci_set_edition('E1');
$c = oci_connect('hr', 'welcome', 'localhost/XE');

$s = oci_parse($c, "begin :r := myfunc(); end;");
oci_bind_by_name($s, ":r", $r, 20);
oci_execute($s);
echo "The result is $r\n";

?>

    
```

## Notes

> Oracle version requirement
>
> This function is available from Oracle 11*g*R2 onwards.

> Persistent connections
>
> To avoid inconsistencies and unexpected errors, do not use ALTER SESSION SET EDITION to change the edition on persistent connections.

> DRCP Connection Pooling
>
> To avoid inconsistencies and unexpected errors when using editions and DRCP with Oracle 11.2.0.1, keep a one-to-one correspondence between the oci8.connection_class and the edition name used by applications. Each pooled server of a given connection class should only be used with one edition. This restriction has been removed with Oracle 11.2.0.2.
