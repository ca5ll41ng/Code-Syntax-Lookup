---
id: "en-php-function-swoole-channel-pop"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Channel::pop"
title: "Read and pop data from swoole channel."
signature: "public mixed Swoole\\Channel::pop()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-channel.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read and pop data from swoole channel.

## Description

```php
public mixed Swoole\Channel::pop()
```

## Parameters

This function has no parameters.

## Return Values

If the channel is empty, the function will return false, or return the unserialized data.
