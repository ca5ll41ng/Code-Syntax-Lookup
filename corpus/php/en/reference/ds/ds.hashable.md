---
id: "en-php-guide-class-ds-hashable"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-hashable"
title: "The Hashable interface"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-hashable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Hashable interface

Ds\Hashable

  Introduction  Hashable is an interface which allows objects to be used as keys. It’s an alternative to `spl_object_hash()`, which determines an object’s hash based on its handle: this means that two objects that are considered equal by an implicit definition would not be treated as equal because they are not the same instance.    `hash()` is used to return a scalar value to be used as the object's hash value, which determines where it goes in the hash table. While this value does not have to be unique, objects which are equal must have the same hash value.    `equals()` is used to determine if two objects are equal. It's guaranteed that the comparing object will be an instance of the same class as the subject.       Ds\Hashable
