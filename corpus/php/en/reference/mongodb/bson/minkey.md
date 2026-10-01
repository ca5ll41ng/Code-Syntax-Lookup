---
id: "en-php-guide-class-mongodb-bson-minkey"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-minkey"
title: "The MongoDB\\BSON\\MinKey class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-minkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\MinKey class

MongoDB\BSON\MinKey

   Introduction  Special BSON type which compares lower than all other possible BSON element values.   
> This is an internal MongoDB type used for indexing and sharding.

    Class Synopsis   `MongoDB\BSON\MinKey`   `final`  `MongoDB\BSON\MinKey`   MongoDB\BSON\MinKeyInterface   MongoDB\BSON\Type   JsonSerializable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\MinKeyInterface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
