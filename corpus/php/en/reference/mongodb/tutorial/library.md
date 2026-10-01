---
id: "en-php-guide-mongodb-tutorial-library"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.tutorial.library"
title: "Using the PHP Library for MongoDB (PHPLIB)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.tutorial.library.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Using the PHP Library for MongoDB (PHPLIB)

After the initial extension set-up, we will continue explaining how to get started with the corresponding userland library to write our first project.

## Installing the PHP Library with Composer

The last thing we still need to install to get started on the application itself, is the PHP library.

The library needs to be installed with [Composer](), a package manager for PHP. Instructions for installing Composer on various platforms may be found on its website.

Install the library by running:

```shell


$ composer require mongodb/mongodb

    
```

It will output something akin to:

```text


./composer.json has been created
Loading composer repositories with package information
Updating dependencies (including require-dev)
  - Installing mongodb/mongodb (1.0.0)
    Downloading: 100%

Writing lock file
Generating autoload files

    
```

Composer will create several files: composer.json, composer.lock, and a vendor directory that will contain the library and any other dependencies your project might require.

## Using the PHP Library

In addition to managing your dependencies, Composer will also provide you with an autoloader (for those dependencies' classes). Ensure that it is included at the start of your script or in your application's bootstrap code:

```php


<?php
// This path should point to Composer's autoloader
require 'vendor/autoload.php';

    
```

With this done, you can now use any of the functionality as described in the [library documentation]().

If you have used MongoDB drivers in other languages, the library's API should look familiar. It contains a [Client](/class/MongoDBClient/) class for connecting to MongoDB, a [Database](/class/MongoDBDatabase/) class for database-level operations (e.g. commands, collection management), and a [Collection](/class/MongoDBCollection) class for collection-level operations (e.g. [CRUD]() methods, index management).

As an example, this is how you insert a document into the *beers* collection of the *demo* database:

```php


<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->demo->beers;

$result = $collection->insertOne( [ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ] );

echo "Inserted with Object ID '{$result->getInsertedId()}'";
?>

    
```

Since the inserted document did not contain an _id field, the extension will generate an `MongoDB\BSON\ObjectId` for the server to use as the _id. This value is also made available to the caller via the result object returned by the insertOne method.

After insertion, you can query for the data that you have just inserted. For that, you use the find method, which returns an iterable cursor:

```php


<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->demo->beers;

$result = $collection->find( [ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ] );

foreach ($result as $entry) {
    echo $entry['_id'], ': ', $entry['name'], "\n";
}
?>

    
```

While it may not be apparent in the examples, BSON documents and arrays are unserialized as special classes in the library by default. These classes extend `ArrayObject` for usability and implement the extension's MongoDB\BSON\Serializable and MongoDB\BSON\Unserializable interfaces to ensure that values preserve their type when serialized back into BSON. This avoids a caveat in the legacy mongo extension where arrays might turn into documents, and vice versa. See the `mongodb.persistence` specification for more information on how values are converted between PHP and BSON.
