---
id: "en-php-function-function-cubrid-ping"
language: "php"
lang: "en"
category: "function"
name: "cubrid_ping"
title: "Ping a server connection or reconnect if there is no connection"
signature: "bool cubrid_ping([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ping a server connection or reconnect if there is no connection

## Description

```php
bool cubrid_ping([resource $conn_identifier = ...])
```

Checks whether or not the connection to the server is working.

## Parameters

- **`$conn_identifier`** — The CUBRID connection identifier. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` is assumed.

## Return Values

Returns `true` if the connection to the CUBRID server is working, otherwise `false`.

## Examples

**`cubrid_ping()` example**

```php


<?php
set_time_limit(0);

$conn = cubrid_connect('localhost', 33000, 'demodb');

/* Assuming this query will take a long time */
$sql = "select * from athlete";
$result = cubrid_query($sql);
if (!$result) {
    echo 'Query #1 failed, exiting.';
    exit;
}

/* Make sure the connection is still alive, if not, try to reconnect */
if (!cubrid_ping($conn)) {
    echo 'Lost connection, exiting after query #1';
    exit;
}
cubrid_free_result($result);

/* So the connection is still alive, let's run another query */
$sql2 = "select * from code";
$result2 = cubrid_query($sql2);
?>

   
```
