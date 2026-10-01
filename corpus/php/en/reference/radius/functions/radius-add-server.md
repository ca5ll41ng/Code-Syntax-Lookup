---
id: "en-php-function-function-radius-add-server"
language: "php"
lang: "en"
category: "function"
name: "radius_add_server"
title: "Adds a server"
signature: "bool radius_add_server(resource $radius_handle, string $hostname, int $port, string $secret, int $timeout, int $max_tries)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-add-server.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a server

## Description

```php
bool radius_add_server(resource $radius_handle, string $hostname, int $port, string $secret, int $timeout, int $max_tries)
```

`radius_add_server()` may be called multiple times, and it may be used together with `radius_config()`. At most 10 servers may be specified. When multiple servers are given, they are tried in round-robin fashion until a valid response is received, or until each server's `$max_tries` limit has been reached.

## Parameters

- **`$radius_handle`**
- **`$hostname`** — The `$hostname` parameter specifies the server host, either as a fully qualified domain name or as a dotted-quad IP address in text form.
- **`$port`** — The `$port` specifies the UDP port to contact on the server. If port is given as 0, the library looks up the radius/udp or radacct/udp service in the network services database, and uses the port found there. If no entry is found, the library uses the standard Radius ports, 1812 for authentication and 1813 for accounting.
- **`$secret`** — The shared secret for the server host is passed to the `$secret` parameter. The Radius protocol ignores all but the leading 128 bytes of the shared secret.
- **`$timeout`** — The timeout for receiving replies from the server is passed to the `$timeout` parameter, in units of seconds.
- **`$max_tries`** — The maximum number of repeated requests to make before giving up is passed into the `$max_tries`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`radius_add_server()` example**

```php


<?php
if (!radius_add_server($res, 'radius.example.com', 1812, 'testing123', 3, 3)) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br>";
    exit;
}
?>

   
```

## See Also

 `radius_config()`
