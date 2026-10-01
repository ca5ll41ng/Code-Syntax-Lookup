---
id: "en-php-function-parallel-events-addchannel"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::addChannel"
title: "Targets"
signature: "public void parallel\\Events::addChannel(parallel\\Channel $channel)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.addchannel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Targets

## Description

```php
public void parallel\Events::addChannel(parallel\Channel $channel)
```

Shall watch for events on the given `$channel`

## Exceptions

> Shall throw `parallel\Events\Error\Existence` if channel was already added.
