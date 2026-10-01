---
id: "en-php-function-componere-patch-construct"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Patch::__construct"
title: "Patch Construction"
signature: "public Componere\\Patch::__construct(object $instance)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-patch.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch Construction

## Description

```php
public Componere\Patch::__construct(object $instance)
```

```php
public Componere\Patch::__construct(object $instance, array $interfaces)
```

## Parameters

- **`$instance`** — The target for this Patch
- **`$interfaces`** — A case insensitive array of class names

## Exceptions

> Shall throw `RuntimeException` if a class in `$interfaces` cannot be found

> Shall throw `RuntimeException` if a class in `$interfaces` is not an interface
