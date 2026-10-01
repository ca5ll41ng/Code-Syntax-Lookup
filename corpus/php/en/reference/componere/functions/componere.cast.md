---
id: "en-php-function-componere-cast"
language: "php"
lang: "en"
category: "function"
name: "Componere\\cast"
title: "Casting"
signature: "object Componere\\cast(string $type, object $object)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere.cast.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Casting

## Description

```php
object Componere\cast(string $type, object $object)
```

## Parameters

- **`$type`** — A user defined type
- **`$object`** — An object with a user defined type compatible with Type

## Return Values

An `object` of type Type, cast from `$object`

## Errors/Exceptions

> Shall throw `InvalidArgumentException` if the type of `$object` is or is derived from an internal class

> Shall throw `InvalidArgumentException` if Type is an interface

> Shall throw `InvalidArgumentException` if Type is a trait

> Shall throw `InvalidArgumentException` if Type is an abstract

> Shall throw `InvalidArgumentException` if Type is not compatible with the type of `$object`

## See Also

 `componere.cast_by_ref`
