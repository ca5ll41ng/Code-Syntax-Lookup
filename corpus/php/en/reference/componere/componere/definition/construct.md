---
id: "en-php-function-componere-definition-construct"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Definition::__construct"
title: "Definition Construction"
signature: "public Componere\\Definition::__construct(string $name)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-definition.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Definition Construction

## Description

```php
public Componere\Definition::__construct(string $name)
```

```php
public Componere\Definition::__construct(string $name, string $parent)
```

```php
public Componere\Definition::__construct(string $name, array $interfaces)
```

```php
public Componere\Definition::__construct(string $name, string $parent, array $interfaces)
```

## Parameters

- **`$name`** — A case insensitive class name
- **`$parent`** — A case insensitive class name
- **`$interfaces`** — An array of case insensitive class names

## Exceptions

> Shall throw `InvalidArgumentException` if an attempt is made to replace an internal class

> Shall throw `InvalidArgumentException` if an attempt is made to replace an interface

> Shall throw `InvalidArgumentException` if an attempt is made to replace a trait

> Shall throw `RuntimeException` if a class in `$interfaces` cannot be found

> Shall throw `RuntimeException` if a class in `$interfaces` is not an interface
