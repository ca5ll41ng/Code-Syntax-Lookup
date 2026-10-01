---
id: "en-php-function-swoole-client-connect"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Client::connect"
title: "Connect to the remote TCP or UDP port."
signature: "public bool Swoole\\Client::connect(string $host, [int $port = ...], [int $timeout = ...], [int $flag = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-client.connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connect to the remote TCP or UDP port.

## Description

```php
public bool Swoole\Client::connect(string $host, [int $port = ...], [int $timeout = ...], [int $flag = ...])
```

## Parameters

- **`$host`** — The host name of the remote address.
- **`$port`** — The port number of the remote address.
- **`$timeout`** — The timeout(second) of connect/send/recv, the default value is 0.1s
- **`$flag`** — If the type of client is UDP, the $flag means if to enable the configuration udp_connect. If the configuration udp_connect is enabled, the client will only receive the data from specified ip:port. If the type of client is TCP and the $flag is set to 1, it must use swoole_client_select to check the connection status before send/recv.

## Return Values

Whether the connection is established.
