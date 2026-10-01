---
id: "en-php-guide-set-mysqlinfo"
language: "php"
lang: "en"
category: "guide"
name: "set.mysqlinfo"
title: "MySQL Drivers and Plugins"
module: "mysqlinfo"
source_url: "https://www.php.net/manual/en/set.mysqlinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MySQL Drivers and Plugins

MySQL

 Overview of the MySQL PHP drivers  Introduction  There are several PHP APIs for accessing the MySQL database. Users can choose between the mysqli or PDO_MySQL extensions.    This guide explains the terminology used to describe each API, information about choosing which API to use, and also information to help choose which MySQL library to use with the API.     Terminology overview  This section provides an introduction to the options available to you when developing a PHP application that needs to interact with a MySQL database.    *What is an API?*    An Application Programming Interface, or API, defines the classes, methods, functions and variables that your application will need to call in order to carry out its desired task. In the case of PHP applications that need to communicate with databases the necessary APIs are usually exposed via PHP extensions.    APIs can be procedural or object-oriented. With a procedural API you call functions to carry out tasks, with the object-oriented API you instantiate classes and then call methods on the resulting objects. Of the two, the latter is usually the preferred interface, as it is more modern and leads to better organized code.    When writing PHP applications that need to connect to the MySQL server there are several API options available. This document discusses what is available and how to select the best solution for your application.    *What is a Connector?*    In the MySQL documentation, the term *connector* refers to a piece of software that allows your application to connect to the MySQL database server. MySQL provides connectors for a variety of languages, including PHP.    If your PHP application needs to communicate with a database server you will need to write PHP code to perform such activities as connecting to the database server, querying the database and other database-related functions. Software is required to provide the API that your PHP application will use, and also handle the communication between your application and the database server, possibly using other intermediate libraries where necessary. This software is known generically as a connector, as it allows your application to *connect* to a database server.    *What is a Driver?*    A driver is a piece of software designed to communicate with a specific type of database server. The driver may also call a library, such as the MySQL Client Library or the MySQL Native Driver. These libraries implement the low-level protocol used to communicate with the MySQL database server.    By way of an example, the PHP Data Objects (PDO) database abstraction layer may use one of several database-specific drivers. One of the drivers it has available is the PDO MYSQL driver, which allows it to interface with the MySQL server.    Sometimes people use the terms connector and driver interchangeably, which can be confusing. In the MySQL-related documentation the term driver is reserved for software that provides the database-specific part of a connector package.    *What is an Extension?*    In the PHP documentation, you will come across another term - *extension*. The PHP code consists of a core, with optional extensions to the core functionality. PHP's MySQL-related extension, `mysqli`, is implemented using the PHP extension framework.    An extension typically exposes an API to the PHP programmer, to allow its facilities to be used programmatically. However, some extensions which use the PHP extension framework do not expose an API to the PHP programmer.    The PDO MySQL driver extension, for example, does not expose an API to the PHP programmer, but provides an interface to the PDO layer above it.    The terms API and extension should not be taken to mean the same thing, as an extension may not necessarily expose an API to the programmer.     Choosing an API  PHP offers different APIs to connect to MySQL. Below we show the APIs provided by the mysqli and PDO extensions. Each code snippet creates a connection to a MySQL server running on "example.com" using the username "user" and the password "password". And a query is run to greet the user.   
**Comparing the MySQL APIs**

```php

<?php
// mysqli
$mysqli = new mysqli("example.com", "user", "password", "database");
$result = $mysqli->query("SELECT 'Hello, dear MySQL user!' AS _message FROM DUAL");
$row = $result->fetch_assoc();
echo htmlentities($row['_message']);

// PDO
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT 'Hello, dear MySQL user!' AS _message FROM DUAL");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['_message']);

    
```

 
**Comparing prepared statements**

```php

<?php
// mysqli
$mysqli = new mysqli("example.com", "user", "password", "database");
$statement = $mysqli->prepare("SELECT District FROM City WHERE Name=?");
$statement->execute(["Amersfoort"]);
$result = $statement->get_result();
$row = $result->fetch_assoc();
echo htmlentities($row['District']);

// PDO
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->prepare("SELECT District FROM City WHERE Name=?");
$statement->execute(["Amersfoort"]);
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['District']);

    
```

  *Feature comparison*    The overall performance of both extensions is considered to be about the same. Although the performance of the extension contributes only a fraction of the total run time of a PHP web request. Often, the impact is as low as 0.1%.   
|  | ext/mysqli | PDO_MySQL |
| --- | --- | --- |
| PHP version introduced | 5.0 | 5.1 |
| Included with PHP 7.x and 8.x | Yes | Yes |
| Development status | Active | Active |
| Lifecycle | Active | Active |
| Recommended for new projects | Yes | Yes |
| OOP Interface | Yes | Yes |
| Procedural Interface | Yes | No |
| API supports non-blocking, asynchronous queries with mysqlnd | Yes | No |
| Persistent Connections | Yes | Yes |
| API supports Charsets | Yes | Yes |
| API supports server-side Prepared Statements | Yes | Yes |
| API supports client-side Prepared Statements | No | Yes |
| API supports Stored Procedures | Yes | Yes |
| API supports Multiple Statements | Yes | Most |
| API supports Transactions | Yes | Yes |
| Transactions can be controlled with SQL | Yes | Yes |
| Supports all MySQL 5.1+ functionality | Yes | Most |

   Choosing a library  The mysqli and PDO_MySQL PHP extensions are lightweight wrappers on top of a C client library. The extensions can either use the mysqlnd library or the `libmysqlclient` library. Choosing a library is a compile time decision.    The mysqlnd library is part of the PHP distribution. It offers features like lazy connections and query caching, features that are not available with libmysqlclient, so using the built-in mysqlnd library is highly recommended. See the mysqlnd documentation for additional details, and a listing of features and functionality that it offers.   
**Configure commands for using mysqlnd or libmysqlclient**

```shell

// Recommended, compiles with mysqlnd
$ ./configure --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd

// Alternatively recommended, compiles with mysqlnd
$ ./configure --with-mysqli --with-pdo-mysql

// Not recommended, compiles with libmysqlclient
$ ./configure --with-mysqli=/path/to/mysql_config --with-pdo-mysql=/path/to/mysql_config

    
```

  *Library feature comparison*    It is recommended to use the mysqlnd library instead of the MySQL Client Server library (libmysqlclient). Both libraries are supported and constantly being improved.   
|  | MySQL native driver (mysqlnd) | MySQL client server library (`libmysqlclient`) |
| --- | --- | --- |
| Part of the PHP distribution | Yes | No |
| PHP version introduced | 5.3.0 | N/A |
| License | PHP License 3.01 | Dual-License |
| Development status | Active | Active |
| Lifecycle | No end announced | No end announced |
| Compile default (for all MySQL extensions) | Yes | No |
| Compression protocol support | Yes | Yes |
| SSL support | Yes | Yes |
| Named pipe support | Yes | Yes |
| Non-blocking, asynchronous queries | Yes | No |
| Performance statistics | Yes | No |
| LOAD LOCAL INFILE respects the open_basedir directive | Yes | No |
| Uses PHP's native memory management system (e.g., follows PHP memory limits) | Yes | No |
| Return numeric column as double (COM_QUERY) | Yes | No |
| Return numeric column as string (COM_QUERY) | Yes | Yes |
| Plugin API | Yes | Limited |
| Automatic reconnect | No | Optional |
