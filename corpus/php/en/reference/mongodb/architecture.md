---
id: "en-php-guide-mongodb-architecture"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.architecture"
title: "Explains the driver architecture, and special features"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.architecture.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Explains the driver architecture, and special features

Driver Architecture and Internals

## Architecture Overview

Architecture

This article explains how all the different components of the PHP driver fit together, from base system libraries, through the extension, and to the PHP libraries on top.

At the top of this stack sits a [PHP library](), which is distributed as a [Composer package](mongodb/mongodb). This library provides an API consistent with other MongoDB [drivers]() and implements various cross-driver [specifications](). While the extension can be used directly, the library has minimal overhead and should be a common dependency for most applications built with MongoDB.

Sitting below that library is a PHP extension, which is distributed through [PECL](mongodb). The extension forms the glue between PHP and our system libraries ([libmongoc](), [libbson](), and [libmongocrypt]()). Its public API provides only the most essential functionality: Connection management BSON encoding and decoding Object document serialization (to support ODM libraries) Executing commands, queries, and write operations Handling cursors for command and query results

| Project | GitHub | JIRA |
| --- | --- | --- |
| PHP Library | [mongodb/mongo-php-library]() | [PHPLIB]() |
| PHP Extension | [mongodb/mongo-php-driver]() | [PHPC]() |

## Connection handling and persistence

Connections

> On Unix platforms, the extension is sensitive to scripts that use the fork() system call without also calling exec(). Users are advised not to re-use `MongoDB\Driver\Manager` instances in a forked child process.

## Connection and topology persistence (PHP version since 1.2.0)

All versions of the extension since 1.2.0 persist the [libmongoc]() client object in the PHP worker process, which allows it to re-use database connections, authentication states, *and* topology information across multiple requests.

When `MongoDB\Driver\Manager::__construct()` is invoked, a hash is created from its arguments (i.e. URI string and array options). The extension will attempt to find a previously persisted [libmongoc]() client object for that hash. If an existing client cannot be found for the hash, a new client will be created and persisted for future use. This behavior can be disabled via the `"disableClientPersistence"` driver option.

Each client contains its own database connections and a view of the server topology (e.g. standalone, replica set, shard cluster). By persisting the client between PHP requests, the extension is able to re-use established database connections and remove the need for [discovering the server topology]() on each request.

Consider the following example:

```php


<?php

$managers = [
    new MongoDB\Driver\Manager('mongodb://127.0.0.1'),
    new MongoDB\Driver\Manager('mongodb://127.0.0.1'),
    new MongoDB\Driver\Manager('mongodb://127.0.0.1:27017'),
    new MongoDB\Driver\Manager('mongodb://rs1.example.com,rs2.example.com/', ['replicaSet' => 'myReplicaSet']),
];

foreach ($managers as $manager) {
    $manager->executeCommand('test', new MongoDB\Driver\Command(['ping' => 1]));
}

?>

   
```

The first two Manager objects will share the same [libmongoc]() client since their constructor arguments are identical. The third and fourth objects will each use their own client. In total, three clients will be created and the PHP worker executing this script will open two connections to `127.0.0.1` and one connection to each of `rs1.example.com` and `rs2.example.com`. If the extension discovers additional members of the replica set after issuing `hello` commands, it will open additional connections to those servers as well.

If the same worker executes the script again in a second request, the three clients will be re-used and no new connections will be made. Depending on how long ago the previous request was served, the extension may need to issue additional `hello` commands to update its view of the topologies.

## Socket persistence (PHP versions before 1.2.0)

Versions of the extension before 1.2.0 utilize PHP's Streams API for database connections, using an API within [libmongoc]() to designate custom handlers for socket communication; however, a new libmongoc client is created for each `MongoDB\Driver\Manager`. As a result, the extension persists individual database connections but not authentication state or topology information. This means that the extension needs to issue commands at the start of each request to authenticate and [discover the server topology]().

Database connections are persisted by a hash derived from the server's host, port, and the URI string used to construct the `MongoDB\Driver\Manager`. The constructor's array options are not included in this hash.

> Versions of the extension >= 1.1.8 and < 1.2.0 do not persist sockets for SSL connections. See [PHPC-720](-720) for additional information.

Despite its shortcomings with persisting SSL connections when and topology information, this version of the extension supports all SSL context options since it uses PHP's Streams API.

## Serialization and deserialization of PHP variables into MongoDB

Persisting Data

This document discusses how compound structures (i.e. documents, arrays, and objects) are converted between BSON and PHP values.

## Serialization to BSON

## Arrays

If an array is a *packed array* — i.e. empty array or the keys start at 0 and are sequential without gaps: *BSON array*.

If the array is not packed — i.e. having associative (string) keys, the keys don't start at 0, or when there are gaps:: *BSON object*

A top-level (root) document, *always* serializes as a BSON document.

## Examples

These serialize as a BSON array:

```text


[ 8, 5, 2, 3 ] => [ 8, 5, 2, 3 ]
[ 0 => 4, 1 => 9 ] => [ 4, 9 ]

     
```

These serialize as a BSON document:

```text


[ 0 => 1, 2 => 8, 3 => 12 ] => { "0" : 1, "2" : 8, "3" : 12 }
[ "foo" => 42 ] => { "foo" : 42 }
[ 1 => 9, 0 => 10 ] => { "1" : 9, "0" : 10 }

     
```

Note that the five examples are *extracts* of a full document, and represent only *one* value inside a document.

## Objects

If an object is of the `stdClass` class, serialize as a *BSON document*.

If an object is a supported class that implements MongoDB\BSON\Type, then use the BSON serialization logic for that specific type. MongoDB\BSON\Type instances (excluding MongoDB\BSON\Serializable may only be serialized as a document field value. Attempting to serialize such an object as a root document will throw a `MongoDB\Driver\Exception\UnexpectedValueException`

If an object is of an unknown class implementing the MongoDB\BSON\Type interface, then throw a `MongoDB\Driver\Exception\UnexpectedValueException`

If an object is of any other class, without implementing any special interface, serialize as a *BSON document*. Keep only *public* properties, and ignore *protected* and *private* properties.

If an object is of a class that implements the MongoDB\BSON\Serializable interface, call `MongoDB\BSON\Serializable::bsonSerialize()` and use the returned array or `stdClass` to serialize as a BSON document or array. The BSON type will be determined by the following:

1. Root documents must be serialized as a BSON document.
2. MongoDB\BSON\Persistable objects must be serialized as a BSON document.
3. If `MongoDB\BSON\Serializable::bsonSerialize()` returns a packed array, serialize as a BSON array.
4. If `MongoDB\BSON\Serializable::bsonSerialize()` returns a non-packed array or `stdClass`, serialize as a BSON document.
5. If `MongoDB\BSON\Serializable::bsonSerialize()` did not return an array or `stdClass`, throw an `MongoDB\Driver\Exception\UnexpectedValueException` exception.

If an object is of a class that implements the MongoDB\BSON\Persistable interface (which implies MongoDB\BSON\Serializable), obtain the properties in a similar way as in the previous paragraphs, but *also* add an additional property __pclass as a Binary value, with subtype `0x80` and data bearing the fully qualified class name of the object that is being serialized.

The __pclass property is added to the array or object returned by `MongoDB\BSON\Serializable::bsonSerialize()`, which means it will overwrite any __pclass key/property in the `MongoDB\BSON\Serializable::bsonSerialize()` return value. If you want to avoid this behaviour and set your own __pclass value, you must *not* implement MongoDB\BSON\Persistable and should instead implement MongoDB\BSON\Serializable directly.

## Examples

```php


<?php

class stdClass
{
    public $foo = 42;
} // => {"foo": 42}

class MyClass
{
    public $foo = 42;
    protected $prot = 'wine';
    private $fpr = 'cheese';
} // => {"foo": 42}

class AnotherClass1 implements MongoDB\BSON\Serializable
{
    public $foo = 42;
    protected $prot = 'wine';
    private $fpr = 'cheese';

    public function bsonSerialize(): array
    {
        return ['foo' => $this->foo, 'prot' => $this->prot];
    }
} // => {"foo": 42, "prot": "wine"}

class AnotherClass2 implements MongoDB\BSON\Serializable
{
    public $foo = 42;

    public function bsonSerialize(): self
    {
        return $this;
    }
} // => MongoDB\Driver\Exception\UnexpectedValueException("bsonSerialize() did not return an array or stdClass")

class AnotherClass3 implements MongoDB\BSON\Serializable
{
    private $elements = ['foo', 'bar'];

    public function bsonSerialize(): array
    {
        return $this->elements;
    }
} // => {"0": "foo", "1": "bar"}

/**
 * Nesting Serializable classes
 */

class AnotherClass4 implements MongoDB\BSON\Serializable
{
    private $elements = [0 => 'foo', 2 => 'bar'];

    public function bsonSerialize(): array
    {
        return $this->elements;
    }
} // => {"0": "foo", "2": "bar"}

class ContainerClass1 implements MongoDB\BSON\Serializable
{
    public $things;

    public function __construct()
    {
        $this->things = new AnotherClass4();
    }

    function bsonSerialize(): array
    {
        return ['things' => $this->things];
    }
} // => {"things": {"0": "foo", "2": "bar"}}


class AnotherClass5 implements MongoDB\BSON\Serializable
{
    private $elements = [0 => 'foo', 2 => 'bar'];

    public function bsonSerialize(): array
    {
        return array_values($this->elements);
    }
} // => {"0": "foo", "1": "bar"} as a root class
  //    ["foo", "bar"] as a nested value

class ContainerClass2 implements MongoDB\BSON\Serializable
{
    public $things;

    public function __construct()
    {
        $this->things = new AnotherClass5();
    }

    public function bsonSerialize(): array
    {
        return ['things' => $this->things];
    }
} // => {"things": ["foo", "bar"]}


class AnotherClass6 implements MongoDB\BSON\Serializable
{
    private $elements = ['foo', 'bar'];

    function bsonSerialize(): object
    {
        return (object) $this->elements;
    }
} // => {"0": "foo", "1": "bar"}

class ContainerClass3 implements MongoDB\BSON\Serializable
{
    public $things;

    public function __construct()
    {
        $this->things = new AnotherClass6();
    }

    public function bsonSerialize(): array
    {
        return ['things' => $this->things];
    }
} // => {"things": {"0": "foo", "1": "bar"}}

class UpperClass implements MongoDB\BSON\Persistable
{
    public $foo = 42;
    protected $prot = 'wine';
    private $fpr = 'cheese';

    private $data;

    public function bsonUnserialize(array $data): void
    {
        $this->data = $data;
    }

    public function bsonSerialize(): array
    {
        return ['foo' => $this->foo, 'prot' => $this->prot];
    }
} // => {"foo": 42, "prot": "wine", "__pclass": {"$type": "80", "$binary": "VXBwZXJDbGFzcw=="}}

?>

     
```

## Deserialization from BSON

> BSON documents can technically contain duplicate keys because documents are stored as a list of key-value pairs; however, applications should refrain from generating documents with duplicate keys as server and driver behavior may be undefined. Since PHP objects and arrays cannot have duplicate keys, data could also be lost when decoding a BSON document with duplicate keys.

The legacy mongo extension deserialized both BSON documents and arrays as PHP arrays. While PHP arrays are convenient to work with, this behavior was problematic because different BSON types could deserialize to the same PHP value (e.g. `{"0": "foo"}` and `["foo"]`) and make it impossible to infer the original BSON type. By default, the mongodb extension addresses this concern by ensuring that BSON arrays and documents are converted to PHP arrays and objects, respectively.

For compound types, there are three data types:

- **root** — refers to the top-level BSON document *only*
- **document** — refers to embedded BSON documents *only*
- **array** — refers to a BSON array

Besides the three collective types, it is also possible to configure specific fields in your document to map to the data types mentioned below. As an example, the following type map allows you to map each embedded document within an `"addresses"` array to an `Address` class *and* each `"city"` field within those embedded address documents to a `City` class:

```text


[
    'fieldPaths' => [
        'addresses.$' => 'MyProject\Address',
        'addresses.$.city' => 'MyProject\City',
    ],
]

    
```

Each of those three data types, as well as the field specific mappings, can be mapped against different PHP types. The possible mapping values are:

- ***not set* or `NULL` (default)** — - A BSON array will be deserialized as a PHP `array`. - A BSON document (root or embedded) without a __pclass property A __pclass property is only deemed to exist if there exists a property with that name, and it is a Binary value, and the sub-type of the Binary value is 0x80. If any of these three conditions is not met, the __pclass property does not exist and should be treated as any other normal property. becomes a PHP `stdClass` object, with each BSON document key set as a public `stdClass` property. - A BSON document (root or embedded) with a __pclass property becomes a PHP object of the class name as defined by the __pclass property. If the named class implements the MongoDB\BSON\Persistable interface, then the properties of the BSON document, including the __pclass property, are sent as an associative array to the `MongoDB\BSON\Unserializable::bsonUnserialize()` function to initialise the object's properties. If the named class does not exist or does not implement the MongoDB\BSON\Persistable interface, `stdClass` will be used and each BSON document key (including __pclass) will be set as a public `stdClass` property. The __pclass functionality relies on the property being part of a retrieved MongoDB document. If you use a projection when querying for documents, you need to include the __pclass field in the projection for this functionality to work.
- **`"array"`** — Turns a BSON array or BSON document into a PHP array. There will be no special treatment of a __pclass property , but it may be set as an element in the returned array if it was present in the BSON document.
- **`"object"` or `"stdClass"`** — Turns a BSON array or BSON document into a `stdClass` object. There will be no special treatment of a __pclass property , but it may be set as a public property in the returned object if it was present in the BSON document.
- **`"bson"`** — Turns a BSON array into a `MongoDB\BSON\PackedArray` and a BSON document into a `MongoDB\BSON\Document`, regardless of whether the BSON document has a __pclass property .
  > The `bson` value is only available for the three root types, not in the field specific mappings.


- **any other string** — Defines the class name that the BSON array or BSON object should be deserialized as. For BSON objects that include __pclass properties, that class will take priority. — If the named class does not exist, is not concrete (i.e. it is abstract or an interface), or does not implement MongoDB\BSON\Unserializable then an `MongoDB\Driver\Exception\InvalidArgumentException` exception is thrown. — If the BSON object has a __pclass property and that class exists and implements MongoDB\BSON\Persistable it will supersede the class provided in the type map. — The properties of the BSON document, *including* the __pclass property if it exists, will be sent as an associative array to the `MongoDB\BSON\Unserializable::bsonUnserialize()` function to initialise the object's properties.

## TypeMaps

TypeMaps can be set through the `MongoDB\Driver\Cursor::setTypeMap()` method on a `MongoDB\Driver\Cursor` object, or the `$typeMap` argument of `MongoDB\BSON\toPHP()`, `MongoDB\BSON\Document::toPHP()`, and `MongoDB\BSON\PackedArray::toPHP()`. Each of the three classes (*root*, *document*, and *array*) can be individually set, in addition to the field specific types.

If the value in the map is `NULL`, it means the same as the *default* value for that item.

## Examples

These examples use the following classes:

- **MyClass** — which does *not* implement any interface
- **YourClass** — which implements MongoDB\BSON\Unserializable
- **OurClass** — which implements MongoDB\BSON\Persistable
- **TheirClass** — which extends OurClass

The `MongoDB\BSON\Unserializable::bsonUnserialize()` method of YourClass, OurClass, TheirClass iterate over the array and set the properties without modifications. It *also* sets the `$unserialized` property to `true`:

```php


<?php

function bsonUnserialize( array $map )
{
    foreach ( $map as $k => $value )
    {
        $this->$k = $value;
    }
    $this->unserialized = true;
}

      
```

```text


/* typemap: [] (all defaults) */
{ "foo": "yes", "bar" : false }
  -> stdClass { $foo => 'yes', $bar => false }

{ "foo": "no", "array" : [ 5, 6 ] }
  -> stdClass { $foo => 'no', $array => [ 5, 6 ] }

{ "foo": "no", "obj" : { "embedded" : 3.14 } }
  -> stdClass { $foo => 'no', $obj => stdClass { $embedded => 3.14 } }

{ "foo": "yes", "__pclass": "MyClass" }
  -> stdClass { $foo => 'yes', $__pclass => 'MyClass' }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "MyClass" } }
  -> stdClass { $foo => 'yes', $__pclass => Binary(0x80, 'MyClass') }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "YourClass") }
  -> stdClass { $foo => 'yes', $__pclass => Binary(0x80, 'YourClass') }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "OurClass") }
  -> OurClass { $foo => 'yes', $__pclass => Binary(0x80, 'OurClass'), $unserialized => true }

{ "foo": "yes", "__pclass": { "$type" : "44", "$binary" : "YourClass") }
  -> stdClass { $foo => 'yes', $__pclass => Binary(0x44, 'YourClass') }

      
```

```text


/* typemap: [ "root" => "MissingClass" ] */
{ "foo": "yes" }
  -> MongoDB\Driver\Exception\InvalidArgumentException("MissingClass does not exist")

/* typemap: [ "root" => "MyClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
  -> MongoDB\Driver\Exception\InvalidArgumentException("MyClass does not implement Unserializable interface")

/* typemap: [ "root" => "MongoDB\BSON\Unserializable" ] */
{ "foo": "yes" }
  -> MongoDB\Driver\Exception\InvalidArgumentException("Unserializable is not a concrete class")

/* typemap: [ "root" => "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MongoDB\BSON\Unserializable" } }
  -> YourClass { $foo => "yes", $__pclass => Binary(0x80, "MongoDB\BSON\Unserializable"), $unserialized => true }

/* typemap: [ "root" => "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
  -> YourClass { $foo => "yes", $__pclass => Binary(0x80, "MyClass"), $unserialized => true }

/* typemap: [ "root" => "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "OurClass" } }
  -> OurClass { $foo => "yes", $__pclass => Binary(0x80, "OurClass"), $unserialized => true }

/* typemap: [ "root" => "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "TheirClass" } }
  -> TheirClass { $foo => "yes", $__pclass => Binary(0x80, "TheirClass"), $unserialized => true }

/* typemap: [ "root" => "OurClass" ] */
{ foo: "yes", "__pclass" : { "$type": "80", "$binary": "TheirClass" } }
  -> TheirClass { $foo => "yes", $__pclass => Binary(0x80, "TheirClass"), $unserialized => true }

      
```

```text


/* typemap: [ 'root' => 'YourClass' ] */
{ foo: "yes", "__pclass" : { "$type": "80", "$binary": "YourClass" } }
  -> YourClass { $foo => 'yes', $__pclass => Binary(0x80, 'YourClass'), $unserialized => true }

      
```

```text


/* typemap: [ 'root' => 'array', 'document' => 'array' ] */
{ "foo": "yes", "bar" : false }
  -> [ "foo" => "yes", "bar" => false ]

{ "foo": "no", "array" : [ 5, 6 ] }
  -> [ "foo" => "no", "array" => [ 5, 6 ] ]

{ "foo": "no", "obj" : { "embedded" : 3.14 } }
  -> [ "foo" => "no", "obj" => [ "embedded => 3.14 ] ]

{ "foo": "yes", "__pclass": "MyClass" }
  -> [ "foo" => "yes", "__pclass" => "MyClass" ]

{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
  -> [ "foo" => "yes", "__pclass" => Binary(0x80, "MyClass") ]

{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "OurClass" } }
  -> [ "foo" => "yes", "__pclass" => Binary(0x80, "OurClass") ]

      
```

```text


/* typemap: [ 'root' => 'object', 'document' => 'object' ] */
{ "foo": "yes", "__pclass": { "$type": "80", "$binary": "MyClass" } }
  -> stdClass { $foo => "yes", "__pclass" => Binary(0x80, "MyClass") }

      
```
