---
id: "en-php-function-swoole-channel-construct"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Channel::__construct"
title: "Construct a Swoole Channel"
signature: "public Swoole\\Channel::__construct(string $size)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-channel.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a Swoole Channel

## Description

```php
public Swoole\Channel::__construct(string $size)
```

Swoole channel is memory data structure works like Chan in Golang, implemented based on shared memory and mutex locks. It can be used as high performance message queue in memory. Construct a swoole channel with a fixed size. The minimum size of a swoole channel is 64KB. Exceptions will be thrown if there is not enough memory.

## Parameters

- **`$size`** — The size of the Swoole channel.
