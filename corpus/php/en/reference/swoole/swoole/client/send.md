---
id: "en-php-function-swoole-client-send"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Client::send"
title: "Send data to the remote TCP socket."
signature: "public int Swoole\\Client::send(string $data, [string $flag = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-client.send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data to the remote TCP socket.

## Description

```php
public int Swoole\Client::send(string $data, [string $flag = ...])
```

## Parameters

- **`$data`** — The data to send which can be string or binary
- **`$flag`**

## Return Values

If the client sends data successfully, it returns the length of data sent. Or it returns false and sets $swoole_client->errCode. For sync client, there is no limit for the data to send. For async client, The limit for the data to send is socket_buffer_size.
