---
id: "en-php-function-parallel-channel-recv"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Channel::recv"
title: "Sharing"
signature: "public mixed parallel\\Channel::recv()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-channel.recv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sharing

## Description

```php
public mixed parallel\Channel::recv()
```

Shall recv a value from this channel

## Exceptions

> Shall throw `parallel\Channel\Error\Closed` if channel is closed.
