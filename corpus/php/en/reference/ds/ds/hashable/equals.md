---
id: "en-php-function-ds-hashable-equals"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Hashable::equals"
title: "Determines whether an object is equal to the current instance"
signature: "abstract public bool Ds\\Hashable::equals(object $obj)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-hashable.equals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines whether an object is equal to the current instance

## Description

```php
abstract public bool Ds\Hashable::equals(object $obj)
```

Determines whether another object is equal to the current instance.

This method allows objects to be used as keys in structures such as `Ds\Map` and `Ds\Set`, or any other lookup structure that honors this interface.

> It's guaranteed that `$obj` is an instance of the same class.

> It's important that objects which are equal also have the same hash value. See `Ds\Hashable::hash()`.

## Parameters

- **`$obj`** — The object to compare the current instance to, which is always an instance of the same class.

## Return Values

`true` if equal, `false` otherwise.
