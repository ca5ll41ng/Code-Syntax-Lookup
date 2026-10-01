---
id: "en-php-function-pdo-pgsql-getnotify"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::getNotify"
title: "Get asynchronous notification"
signature: "public array|false Pdo\\Pgsql::getNotify(int $fetchMode = PDO::FETCH_DEFAULT, int $timeoutMilliseconds = 0)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.getnotify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get asynchronous notification

## Description

```php
public array|false Pdo\Pgsql::getNotify(int $fetchMode = PDO::FETCH_DEFAULT, int $timeoutMilliseconds = 0)
```

Returns a result set representing a pending asynchronous notification.

## Parameters

- **`$fetchMode`** — The format the result set should be returned as, one of the following constants: `PDO::FETCH_DEFAULT` `PDO::FETCH_BOTH` `PDO::FETCH_ASSOC` `PDO::FETCH_NUM`
- **`$timeoutMilliseconds`** — The length of time to wait for a response, in milliseconds.

## Return Values

If a notification is pending, returns a single row, otherwise returns `false`. The row has a `message` field (the channel name) and a `pid` field (the process ID of the notifying backend). If the notification carries a non-empty payload, the row also has a `payload` field. With `PDO::FETCH_NUM`, these fields are at indexes `0`, `1`, and `2`.

## Errors/Exceptions

A ValueError is thrown if `$fetchMode` is not one of the valid `PDO::FETCH_{*}` constants.

A ValueError is thrown if `$timeoutMilliseconds` is less than `0`.

A `E_WARNING` is raised when `$timeoutMilliseconds` is greater than the value that can be contained in a signed 32-bit integer, in which case it will be the maximum value of a signed 32-bit integer.

## Examples

**`Pdo\Pgsql::getNotify()` example**

Subscribe to a channel with `LISTEN`, then read the next pending notification with a one-second timeout.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec('LISTEN messages');
$db->exec("NOTIFY messages, 'hello'");

$notification = $db->getNotify(PDO::FETCH_ASSOC, 1000);
var_export($notification);
?>

   
```

The above example will output something similar to:

```text


array (
  'message' => 'messages',
  'pid' => 1928,
  'payload' => 'hello',
)

   
```

## See Also

 `PDO::query()` `PDOStatement::fetch()` `PDOStatement::fetchAll()`
