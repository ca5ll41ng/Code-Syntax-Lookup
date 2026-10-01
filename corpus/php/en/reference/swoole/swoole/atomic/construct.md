---
id: "en-php-function-swoole-atomic-construct"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Atomic::__construct"
title: "Construct a swoole atomic object."
signature: "public Swoole\\Atomic::__construct([int $value = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-atomic.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a swoole atomic object.

## Description

```php
public Swoole\Atomic::__construct([int $value = ...])
```

Swoole atomic object is an integer variable allows any processor to atomically test and modify. It is implemented based on CPU atomic instructions. The Swoole atomic variables have to defined before swoole_server->start.

Compare-and-swap (CAS) is an atomic instruction used in multithreading to achieve synchronization. It compares the content of a memory location with a given value and, only if they are the same, modifies the content of that memory location to a new given value.

## Parameters

- **`$value`** — The value of the atomic object.
