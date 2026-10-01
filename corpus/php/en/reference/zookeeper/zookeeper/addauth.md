---
id: "en-php-function-zookeeper-addauth"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::addAuth"
title: "Specify application credentials"
signature: "public bool Zookeeper::addAuth(string $scheme, string $cert, callable $completion_cb = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.addauth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specify application credentials

## Description

```php
public bool Zookeeper::addAuth(string $scheme, string $cert, callable $completion_cb = null)
```

The application calls this function to specify its credentials for purposes of authentication. The server will use the security provider specified by the scheme parameter to authenticate the client connection. If the authentication request has failed: - the server connection is dropped. - the watcher is called with the ZOO_AUTH_FAILED_STATE value as the state parameter.

## Parameters

- **`$scheme`** — The id of authentication scheme. Natively supported: "digest" password-based authentication
- **`$cert`** — Application credentials. The actual value depends on the scheme.
- **`$completion_cb`** — The routine to invoke when the request completes. One of the following result codes may be passed into the completion callback: - ZOK operation completed successfully - ZAUTHFAILED authentication failed

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::addAuth()` example**

Add auth before requesting node value.

```php


<?php
$zookeeper = new Zookeeper('localhost:2181');
$path = '/path/to/node';
$value = 'nodevalue';
$zookeeper->set($path, $value);

$zookeeper->addAuth('digest', 'user0:passwd0');
$r = $zookeeper->get($path);
if ($r)
  echo $r;
else
  echo 'ERR';
?>

   
```

The above example will output:

```text


nodevalue

   
```

## See Also

 `Zookeeper::create()` `Zookeeper::setAcl()` `Zookeeper::getAcl()` ZooKeeper States `ZookeeperException`
