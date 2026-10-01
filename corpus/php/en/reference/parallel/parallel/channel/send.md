---
id: "en-php-function-parallel-channel-send"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Channel::send"
title: "Sharing"
signature: "public void parallel\\Channel::send(mixed $value)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-channel.send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sharing

## Description

```php
public void parallel\Channel::send(mixed $value)
```

Shall send the given value on this channel

## Exceptions

> Shall throw `parallel\Channel\Error\Closed` if channel is closed.

> Shall throw `parallel\Channel\Error\IllegalValue` if value is illegal.
