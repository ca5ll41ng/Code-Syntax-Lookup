---
id: "en-php-guide-class-mongodb-driver-cursorinterface"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-cursorinterface"
title: "The MongoDB\\Driver\\CursorInterface interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-cursorinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\CursorInterface interface

MongoDB\Driver\CursorInterface

   Introduction  This interface is implemented by `MongoDB\Driver\Cursor` to be used as a parameter, return, or property type in userland classes.      Class Synopsis   `MongoDB\Driver\CursorInterface`    `MongoDB\Driver\CursorInterface`   Iterator          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This interface now extends Iterator.    Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.15.0 | Return types for methods are declared as tentative on PHP 8.0 and newer, triggering deprecation notices in code that implements this interface without declaring the appropriate return types. The #[ReturnTypeWillChange] attribute can be added to silence the deprecation notice. |
