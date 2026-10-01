---
id: "en-php-guide-class-domentity"
language: "php"
lang: "en"
category: "guide"
name: "class.domentity"
title: "The DOMEntity class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMEntity class

DOMEntity

   Introduction  This interface represents a known entity, either parsed or unparsed, in an XML document.      Class Synopsis    `DOMEntity`   `extends` `DOMNode`      `public` `readonly` `string|null` `publicId`   `public` `readonly` `string|null` `systemId`   `public` `readonly` `string|null` `notationName`   `public` `readonly` `string|null` `actualEncoding`   `public` `readonly` `string|null` `encoding`   `public` `readonly` `string|null` `version`           Properties 
- **`publicId`** — The public identifier associated with the entity if specified, and `null` otherwise.
- **`systemId`** — The system identifier associated with the entity if specified, and `null` otherwise. This may be an absolute URI or not.
- **`notationName`** — For unparsed entities, the name of the notation for the entity. For parsed entities, this is `null`.
- **`actualEncoding`** — *Deprecated as of PHP 8.4.0*. This has always been equal to `null`.
- **`encoding`** — *Deprecated as of PHP 8.4.0*. This has always been equal to `null`.
- **`version`** — *Deprecated as of PHP 8.4.0*. This has always been equal to `null`.

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | `actualEncoding`, `encoding`, and `version` are formally deprecated now because they have always been equal to `null`. |
