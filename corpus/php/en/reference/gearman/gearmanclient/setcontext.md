---
id: "en-php-function-gearmanclient-setcontext"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setContext"
title: "Set application context"
signature: "public bool GearmanClient::setContext(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setcontext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set application context

## Description

```php
public bool GearmanClient::setContext(string $data)
```

Sets an arbitrary string to provide application context that can later be retrieved by `GearmanClient::context()`.

## Parameters

- **`$data`** — Arbitrary context data

## Return Values

Always returns `true`.

## See Also

 `GearmanClient::context()`
