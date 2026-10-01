---
id: "en-php-guide-class-mongodb-bson-unserializable"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-unserializable"
title: "The MongoDB\\BSON\\Unserializable interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-unserializable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Unserializable interface

MongoDB\BSON\Unserializable

   Introduction  Classes that implement this interface may be specified in a type map for unserializing BSON arrays and documents (both root and embedded).         `MongoDB\BSON\Unserializable`    `MongoDB\BSON\Unserializable`          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.15.0 | Return types for methods are declared as tentative on PHP 8.0 and newer, triggering deprecation notices in code that implements this interface without declaring the appropriate return types. The #[ReturnTypeWillChange] attribute can be added to silence the deprecation notice. |
