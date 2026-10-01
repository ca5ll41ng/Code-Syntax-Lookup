---
id: "en-php-function-function-db2-autocommit"
language: "php"
lang: "en"
category: "function"
name: "db2_autocommit"
title: "Returns or sets the AUTOCOMMIT state for a database connection"
signature: "int|bool db2_autocommit(resource $connection, [int $value = ...])"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-autocommit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns or sets the AUTOCOMMIT state for a database connection

## Description

```php
int|bool db2_autocommit(resource $connection, [int $value = ...])
```

Sets or gets the AUTOCOMMIT behavior of the specified connection resource.

## Parameters

- **`$connection`** — A valid database connection resource variable as returned from `db2_connect()` or `db2_pconnect()`.
- **`$value`** — One of the following constants: - **`DB2_AUTOCOMMIT_OFF`** — Turns AUTOCOMMIT off. - **`DB2_AUTOCOMMIT_ON`** — Turns AUTOCOMMIT on.

## Return Values

When `db2_autocommit()` receives only the `$connection` parameter, it returns the current state of AUTOCOMMIT for the requested connection as an integer value. A value of `DB2_AUTOCOMMIT_OFF` indicates that AUTOCOMMIT is off, while a value of `DB2_AUTOCOMMIT_ON` indicates that AUTOCOMMIT is on.

When `db2_autocommit()` receives both the `$connection` parameter and `$autocommit` parameter, it attempts to set the AUTOCOMMIT state of the requested connection to the corresponding state. Returns `true` on success or `false` on failure.

## Examples

**Retrieving the AUTOCOMMIT value for a connection**

In the following example, a connection which has been created with AUTOCOMMIT turned off is tested with the `db2_autocommit()` function.

```php


<?php
$options = array('autocommit' => DB2_AUTOCOMMIT_OFF);
$conn = db2_connect($database, $user, $password, $options);
$ac = db2_autocommit($conn);
if ($ac == DB2_AUTOCOMMIT_OFF) {
    print "$ac -- AUTOCOMMIT is off.";
} else {
    print "$ac -- AUTOCOMMIT is on.";
}
?>

    
```

The above example will output:

```text


0 -- AUTOCOMMIT is off.

    
```

**Setting the AUTOCOMMIT value for a connection**

In the following example, a connection which was initially created with AUTOCOMMIT turned off has its behavior changed to turn AUTOCOMMIT on.

```php


<?php
$options = array('autocommit' => DB2_AUTOCOMMIT_OFF);
$conn = db2_connect($database, $user, $password, $options);

// Turn AUTOCOMMIT on
$rc = db2_autocommit($conn, DB2_AUTOCOMMIT_ON);
if ($rc) {
    print "Turning AUTOCOMMIT on succeeded.\n";
}

// Check AUTOCOMMIT state
$ac = db2_autocommit($conn);
if ($ac == DB2_AUTOCOMMIT_OFF) {
    print "$ac -- AUTOCOMMIT is off.";
} else {
    print "$ac -- AUTOCOMMIT is on.";
}
?>

    
```

The above example will output:

```text


Turning AUTOCOMMIT on succeeded.
1 -- AUTOCOMMIT is on.

    
```

## See Also

 `db2_connect()` `db2_pconnect()`
