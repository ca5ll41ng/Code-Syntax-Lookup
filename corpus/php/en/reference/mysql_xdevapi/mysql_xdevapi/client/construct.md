---
id: "en-php-function-mysql-xdevapi-client-construct"
language: "php"
lang: "en"
category: "function"
name: "Client::__construct"
title: "Client constructor"
signature: "private mysql_xdevapi\\Client::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-client.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Client constructor

## Description

```php
private mysql_xdevapi\Client::__construct()
```

Construct a client object.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\Client::__construct()` example**

```php


<?php
$pooling_options = '{
  "enabled": true,
    "maxSize": 10,
    "maxIdleTime": 3600,
    "queueTimeOut": 1000
}';
$client = mysql_xdevapi\getClient($connection_uri, $pooling_options);
$session = $client->getSession();

   
```
