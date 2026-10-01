---
id: "en-php-function-swoole-channel-push"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Channel::push"
title: "Write and push data into Swoole channel."
signature: "public bool Swoole\\Channel::push(string $data)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-channel.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write and push data into Swoole channel.

## Description

```php
public bool Swoole\Channel::push(string $data)
```

Data can be any non-empty PHP variable, the variable will be serialized if it is not string type.

If size of the data is more than 8KB, swoole channel will use temp files storage.

The function will return true if the write operation is succeeded, or return false if there is not enough space.

## Parameters

- **`$data`** — The data to push into the Swoole channel.

## Return Values

Whether the data is pushed into the Swoole channel.
