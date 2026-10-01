---
id: "en-php-function-parallel-channel-construct"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Channel::__construct"
title: "Channel Construction"
signature: "public parallel\\Channel::__construct()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-channel.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Channel Construction

## Description

```php
public parallel\Channel::__construct()
```

Shall make an anonymous unbuffered channel

```php
public parallel\Channel::__construct(int $capacity)
```

Shall make an anonymous buffered channel with the given capacity

## Parameters

- **`$capacity`** — May be `Channel::Infinite` or a positive integer
