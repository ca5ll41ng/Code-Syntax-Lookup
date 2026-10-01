---
id: "en-php-guide-class-mongodb-bson-javascript"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-javascript"
title: "The MongoDB\\BSON\\Javascript class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-javascript.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Javascript class

MongoDB\BSON\Javascript

   Introduction  BSON type for Javascript code. An optional scope document may be specified that maps identifiers to values and defines the scope in which the code should be evaluated by the server.   
> This BSON type is mainly used when executing database commands that take a Javascript function as a parameter, such as [mapReduce](reference/command/mapReduce/).

    Class Synopsis   `MongoDB\BSON\Javascript`   `final`  `MongoDB\BSON\Javascript`   MongoDB\BSON\JavascriptInterface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\JavascriptInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
