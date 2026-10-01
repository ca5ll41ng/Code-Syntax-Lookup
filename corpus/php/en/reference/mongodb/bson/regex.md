---
id: "en-php-guide-class-mongodb-bson-regex"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-regex"
title: "The MongoDB\\BSON\\Regex class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-regex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Regex class

MongoDB\BSON\Regex

   Introduction  BSON type for a regular expression pattern and optional [flags](#op._S_options).   
> This BSON type is mainly used when querying the database. Alternatively, the [$regex](reference/operator/query/regex) query operator may be used.

    Class Synopsis   `MongoDB\BSON\Regex`   `final`  `MongoDB\BSON\Regex`   MongoDB\BSON\RegexInterface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\RegexInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
