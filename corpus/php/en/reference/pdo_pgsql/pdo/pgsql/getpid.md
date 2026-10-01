---
id: "en-php-function-pdo-pgsql-getpid"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::getPid"
title: "Get the PID of the backend process handling this connection"
signature: "public int Pdo\\Pgsql::getPid()"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.getpid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the PID of the backend process handling this connection

## Description

```php
public int Pdo\Pgsql::getPid()
```

Returns the PID of the backend process handling this connection. Note that the PID belongs to a process executing on the database server host, not the local host.

## Parameters

This function has no parameters.

## Return Values

Returns the PID as an `int`.

## Examples

**`Pdo\Pgsql::getPid()` example**

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
echo $db->getPid();
?>

   
```

The above example will output something similar to:

```text


12345

   
```

## See Also

 `pg_get_pid()`
