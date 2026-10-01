---
id: "en-php-function-gearmanclient-addoptions"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addOptions"
title: "Add client options"
signature: "public bool GearmanClient::addOptions(int $option)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add client options

## Description

```php
public bool GearmanClient::addOptions(int $option)
```

Adds one or more options to those already set.

## Parameters

- **`$option`** — The options to add. One of the following constants, or a combination of them using the bitwise OR operator (|): `GEARMAN_CLIENT_GENERATE_UNIQUE`, `GEARMAN_CLIENT_NON_BLOCKING`, `GEARMAN_CLIENT_UNBUFFERED_RESULT` or `GEARMAN_CLIENT_FREE_TASKS`.

## Return Values

Always returns `true`.
