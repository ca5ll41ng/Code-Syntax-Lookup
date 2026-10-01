---
id: "en-php-guide-class-mongodb-bson-persistable"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-persistable"
title: "The MongoDB\\BSON\\Persistable interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-persistable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Persistable interface

MongoDB\BSON\Persistable

   Introduction  Classes may implement this interface to take advantage of automatic ODM (object document mapping) behavior in the extension. During serialization, the extension will inject a __pclass property containing the PHP class name into the data returned by `MongoDB\BSON\Serializable::bsonSerialize()`. During unserialization, the same __pclass property will then be used to infer the PHP class (independent of any type map configuration) to be constructed before `MongoDB\BSON\Unserializable::bsonUnserialize()` is invoked. See `mongodb.persistence` for additional information.   
> Even if `MongoDB\BSON\Serializable::bsonSerialize()` would return a sequential array, injection of the __pclass property will cause the object to be serialized as a BSON document.

       `MongoDB\BSON\Persistable`    `MongoDB\BSON\Persistable`   MongoDB\BSON\Unserializable   MongoDB\BSON\Serializable
