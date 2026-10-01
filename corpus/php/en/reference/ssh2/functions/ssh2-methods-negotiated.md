---
id: "en-php-function-function-ssh2-methods-negotiated"
language: "php"
lang: "en"
category: "function"
name: "ssh2_methods_negotiated"
title: "Return list of negotiated methods"
signature: "array ssh2_methods_negotiated(resource $session)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-methods-negotiated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return list of negotiated methods

## Description

```php
array ssh2_methods_negotiated(resource $session)
```

Returns list of negotiated methods.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.

## Return Values

## Examples

**Determining what methods were negotiated**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
$methods = ssh2_methods_negotiated($connection);

echo "Encryption keys were negotiated using: {$methods['kex']}\n";
echo "Server identified using an {$methods['hostkey']} with ";
echo "fingerprint: " . ssh2_fingerprint($connection) . "\n";

echo "Client to Server packets will use methods:\n";
echo "\tCrypt: {$methods['client_to_server']['crypt']}\n";
echo "\tComp: {$methods['client_to_server']['comp']}\n";
echo "\tMAC: {$methods['client_to_server']['mac']}\n";

echo "Server to Client packets will use methods:\n";
echo "\tCrypt: {$methods['server_to_client']['crypt']}\n";
echo "\tComp: {$methods['server_to_client']['comp']}\n";
echo "\tMAC: {$methods['server_to_client']['mac']}\n";

?>

   
```

## See Also

 `ssh2_connect()`
