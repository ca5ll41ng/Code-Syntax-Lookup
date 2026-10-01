---
id: "en-php-guide-class-mongodb-bson-serializable"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-serializable"
title: "The MongoDB\\BSON\\Serializable interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-serializable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Serializable interface

MongoDB\BSON\Serializable

   Introduction  Classes that implement this interface may return data to be serialized as a BSON array or document in lieu of the object's public properties.         `MongoDB\BSON\Serializable`    `MongoDB\BSON\Serializable`   MongoDB\BSON\Type          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.15.0 | Return types for methods are declared as tentative on PHP 8.0 and newer, triggering deprecation notices in code that implements this interface without declaring the appropriate return types. The #[ReturnTypeWillChange] attribute can be added to silence the deprecation notice. |
