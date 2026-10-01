---
id: "en-php-guide-mongodb-security"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.security"
title: "Security"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.security.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Security

## Request Injection Attacks

If you are passing `$_GET` (or `$_POST`) parameters to your queries, make sure that they are cast to strings first. Users can insert associative arrays in GET and POST requests, which could then become unwanted $-queries.

A fairly innocuous example: suppose you are looking up a user's information with the request *http://www.example.com?username=bob*. Your application creates the query `$q = new \MongoDB\Driver\Query( [ 'username' => $_GET['username'] ])`.

Someone could subvert this by getting *http://www.example.com?username[$ne]=foo*, which PHP will magically turn into an associative array, turning your query into `$q = new \MongoDB\Driver\Query( [ 'username' => [ '$ne' => 'foo' ] ] )`, which will return all users not named "foo" (all of your users, probably).

This is a fairly easy attack to defend against: make sure $_GET and $_POST parameters are the type you expect before you send them to the database. PHP has the `filter_var()` function to assist with this.

Note that this type of attack can be used with any database interaction that locates a document, including updates, upserts, deletes, and findAndModify commands.

See [the main documentation]() for more information about SQL-injection-like issues with MongoDB.

## Script Injection Attacks

If you are using JavaScript, make sure that any variables that cross the PHP- to-JavaScript boundary are passed in the `scope` field of `MongoDB\BSON\Javascript`, not interpolated into the JavaScript string. This can come up when using `$where` clauses in queries, mapReduce and group commands, and any other time you may pass JavaScript into the database.

For example, suppose we have some JavaScript to greet a user in the database logs. We could do:

```php


<?php
$m = new MongoDB\Driver\Manager;

// Don't do this!!!
$username = $_GET['field'];

$cmd = new \MongoDB\Driver\Command( [
    'eval' => "print('Hello, $username!');"
] );

$r = $m->executeCommand( 'dramio', $cmd );
?>

  
```

However, what if a malicious user passes in some JavaScript?

```php


<?php
$m = new MongoDB\Driver\Manager;

// Don't do this!!!
$username = $_GET['field'];
// $username is set to "'); db.users.drop(); print('"

$cmd = new \MongoDB\Driver\Command( [
    'eval' => "print('Hello, $username!');"
] );

$r = $m->executeCommand( 'dramio', $cmd );
?>

  
```

Now MongoDB executes the JavaScript string `"print('Hello, '); db.users.drop(); print('!');"`. This attack is easy to avoid: use `args` to pass variables from PHP to JavaScript:

```php


<?php
$m = new MongoDB\Driver\Manager;

$_GET['field'] = 'derick';
$args = [ $_GET['field'] ];

$cmd = new \MongoDB\Driver\Command( [
    'eval' => "function greet(username) { print('Hello, ' + username + '!'); }",
    'args' => $args,
] );

$r = $m->executeCommand( 'dramio', $cmd );
?>

  
```

This adds an argument to the JavaScript scope, which gets used as argument for the `greet` function. Now if someone tries to send malicious code, MongoDB will harmlessly print `Hello, '); db.dropDatabase(); print('!`.

Using arguments helps to prevent malicious input from being executed by the database. However, you must make sure that your code does not turn around and execute the input anyway! It is best to avoid executing *any* JavaScript on the server in the first place.

You are strongly recommended to stay clear of the [$where clause](reference/operator/query/where/#considerations) with queries, as it impacts performance significantly. Where possible, use either normal query operators, or the [Aggregation Framework](core/aggregation-pipeline).

As alternative to [MapReduce](), which uses JavaScript, consider using the [Aggregation Framework](core/aggregation-pipeline). Unlike Map/Reduce, it uses an idiomatic language to construct queries, without having to write, and use, the slower JavaScript approach that Map/Reduce requires.

The [eval command](reference/command/eval/) has been deprecated since MongoDB 3.0, and should also be avoided.
