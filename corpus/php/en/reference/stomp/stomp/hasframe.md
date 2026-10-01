---
id: "en-php-function-stomp-hasframe"
language: "php"
lang: "en"
category: "function"
name: "Stomp::hasFrame"
aliases: ["stomp_has_frame"]
title: "Indicates whether or not there is a frame ready to read"
signature: "public bool Stomp::hasFrame()"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.hasframe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates whether or not there is a frame ready to read

## Description

Object-oriented style (method):

```php
public bool Stomp::hasFrame()
```

Procedural style:

```php
bool stomp_has_frame(resource $link)
```

Indicates whether or not there is a frame ready to read.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.

## Return Values

Returns `true` if a frame is ready to read, or `false` otherwise.
