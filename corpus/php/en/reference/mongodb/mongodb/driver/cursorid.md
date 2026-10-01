---
id: "en-php-guide-class-mongodb-driver-cursorid"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-cursorid"
title: "The MongoDB\\Driver\\CursorId class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-cursorid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\CursorId class

MongoDB\Driver\CursorId

   Introduction  The `MongoDB\Driver\CursorID` class is a value object that represents a cursor ID. Instances of this class are returned by `MongoDB\Driver\Cursor::getId()`.   
> This class has been *DEPRECATED* as of extension version 1.20.0 and was removed in 2.0. Applications have to update their usage of `MongoDB\Driver\Cursor::getId()` to return `MongoDB\BSON\Int64` instead.

    Class Synopsis   `MongoDB\Driver\CursorId`   `final`  `MongoDB\Driver\CursorId`   Serializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class was removed. |
| PECL mongodb 1.20.0 | This class has been deprecated and will be removed in version 2.0. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.7.0 | Implements Serializable. |
