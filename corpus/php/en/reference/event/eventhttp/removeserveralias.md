---
id: "en-php-function-eventhttp-removeserveralias"
language: "php"
lang: "en"
category: "function"
name: "EventHttp::removeServerAlias"
title: "Removes server alias"
signature: "public bool EventHttp::removeServerAlias(string $alias)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttp.removeserveralias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes server alias

## Description

```php
public bool EventHttp::removeServerAlias(string $alias)
```

Removes server alias added with `EventHttp::addServerAlias()`

## Parameters

- **`$alias`** — The alias to remove.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventHttp::addServerAlias()`
