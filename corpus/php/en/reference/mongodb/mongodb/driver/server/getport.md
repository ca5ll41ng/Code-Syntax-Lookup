---
id: "en-php-function-mongodb-driver-server-getport"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getPort"
title: "Returns the port on which this server is listening"
signature: "final public int MongoDB\\Driver\\Server::getPort()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.getport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the port on which this server is listening

## Description

```php
final public int MongoDB\Driver\Server::getPort()
```

Returns the port on which this server is listening.

## Parameters

This function has no parameters.

## Return Values

Returns the port on which this server is listening.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Server::getPort()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017/");
$server = $manager->selectServer();

var_dump($server->getPort());

?>

   
```

The above example will output:

```text


int(27017)

   
```

## See Also

 `MongoDB\Driver\Server::getInfo()` `MongoDB\Driver\ServerDescription::getPort()`
