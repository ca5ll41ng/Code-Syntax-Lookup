---
id: "en-php-function-parallel-channel-open"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Channel::open"
title: "Access"
signature: "public Channel parallel\\Channel::open(string $name)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-channel.open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Access

## Description

```php
public Channel parallel\Channel::open(string $name)
```

Shall open the channel with the given name

## Exceptions

> Shall throw `parallel\Channel\Error\Existence` if channel does not exist.
