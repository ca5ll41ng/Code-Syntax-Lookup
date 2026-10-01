---
id: "en-php-function-swoole-client-sendto"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Client::sendto"
title: "Send data to the remote UDP address."
signature: "public bool Swoole\\Client::sendto(string $ip, int $port, string $data)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-client.sendto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data to the remote UDP address.

## Description

```php
public bool Swoole\Client::sendto(string $ip, int $port, string $data)
```

The swoole client should be type of SWOOLE_SOCK_UDP or SWOOLE_SOCK_UDP6.

## Parameters

- **`$ip`** — The IP address of remote host, IPv4 or IPv6.
- **`$port`** — The port number of remote host.
- **`$data`** — The data to send which should be less-than 64K.

## Return Values
