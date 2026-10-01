---
id: "en-php-function-parallel-channel-make"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Channel::make"
title: "Access"
signature: "public Channel parallel\\Channel::make(string $name)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-channel.make.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Access

## Description

```php
public Channel parallel\Channel::make(string $name)
```

Shall make an unbuffered channel with the given name

```php
public Channel parallel\Channel::make(string $name, int $capacity)
```

Shall make a buffered channel with the given name and capacity

## Parameters

- **`$name`** — The name of the channel.
- **`$capacity`** — May be `Channel::Infinite` or a positive integer

## Exceptions

> Shall throw `parallel\Channel\Error\Existence` if channel already exists.
