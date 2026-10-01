---
id: "en-php-function-mongodb-driver-server-gethost"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getHost"
title: "Returns the hostname of this server"
signature: "final public string MongoDB\\Driver\\Server::getHost()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.gethost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the hostname of this server

## Description

```php
final public string MongoDB\Driver\Server::getHost()
```

Returns the hostname of this server.

## Parameters

This function has no parameters.

## Return Values

Returns the hostname of this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Server::getHost()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017/");
$server = $manager->selectServer();

var_dump($server->getHost());

?>

   
```

The above example will output:

```text


string(9) "localhost"

   
```

## See Also

 `MongoDB\Driver\Server::getInfo()` `MongoDB\Driver\ServerDescription::getHost()`
