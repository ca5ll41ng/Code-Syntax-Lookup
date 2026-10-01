---
id: "en-php-function-swoole-server-getclientinfo"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Server::getClientInfo"
title: "Get the connection info by file description."
signature: "public array Swoole\\Server::getClientInfo(int $fd, [int $reactor_id = ...], [bool $ignore_error = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-server.getclientinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the connection info by file description.

## Description

```php
public array Swoole\Server::getClientInfo(int $fd, [int $reactor_id = ...], [bool $ignore_error = ...])
```

## Parameters

- **`$fd`** — File descriptors.
- **`$reactor_id`** — The Reactor thread ID where the connection is made.
- **`$ignore_error`** — Whether to ignore errors, if set to true, connection information will be returned even if the connection is closed.

## Return Values

Returns information about the client connection.
