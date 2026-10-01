---
id: "en-php-guide-class-arrayobject"
language: "php"
lang: "en"
category: "guide"
name: "class.arrayobject"
title: "The ArrayObject class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.arrayobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ArrayObject class

ArrayObject

   Introduction  This class allows objects to work as arrays.   
> Wrapping objects with this class is fundamentally flawed, and therefore its usage with objects is discouraged.

    Class Synopsis    `ArrayObject`   `implements` IteratorAggregate   ArrayAccess   Serializable   Countable    `public` `const` `int` `ArrayObject::STD_PROP_LIST`   `public` `const` `int` `ArrayObject::ARRAY_AS_PROPS`        Predefined Constants  ArrayObject Flags 
- **`ArrayObject::STD_PROP_LIST`** — Properties of the object have their normal functionality when accessed as list (`var_dump()`, , etc.).
- **`ArrayObject::ARRAY_AS_PROPS`** — Entries can be accessed as properties (read and write). The `ArrayObject` class uses its own logic to access properties, thus no warning or error is raised when trying to read or write dynamic properties.

     Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
