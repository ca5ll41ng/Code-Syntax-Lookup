---
id: "en-php-function-componere-patch-derive"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Patch::derive"
title: "Patch Derivation"
signature: "public Patch Componere\\Patch::derive(object $instance)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-patch.derive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch Derivation

## Description

```php
public Patch Componere\Patch::derive(object $instance)
```

Shall derive a `Patch` for the given `$instance`

## Parameters

- **`$instance`** — The target for the derived Patch

## Return Values

`Patch` for `$instance` derived from the current `Patch`

## Exceptions

> Shall throw `InvalidArgumentException` if `$instance` is not compatible
