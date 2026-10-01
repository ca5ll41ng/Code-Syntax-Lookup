---
id: "en-php-function-stomp-destruct"
language: "php"
lang: "en"
category: "function"
name: "Stomp::__destruct"
aliases: ["stomp_close"]
title: "Closes stomp connection"
signature: "public Stomp::__destruct()"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.destruct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes stomp connection

## Description

Object-oriented style (destructor):

```php
public Stomp::__destruct()
```

Procedural style:

```php
bool stomp_close(resource $link)
```

Closes a previously opened connection.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

See `stomp_connect()`.
