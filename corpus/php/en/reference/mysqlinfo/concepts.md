---
id: "en-php-guide-mysqlinfo-concepts"
language: "php"
lang: "en"
category: "guide"
name: "mysqlinfo.concepts"
title: "Concepts"
module: "mysqlinfo"
source_url: "https://www.php.net/manual/en/mysqlinfo.concepts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Concepts

These concepts are specific to the MySQL drivers for PHP.

## Buffered and Unbuffered queries

Queries are using the buffered mode by default. This means that query results are immediately transferred from the MySQL Server to PHP and then are kept in the memory of the PHP process. This allows additional operations like counting the number of rows, and moving (seeking) the current result pointer. It also allows issuing further queries on the same connection while working on the result set. The downside of the buffered mode is that larger result sets might require quite a lot memory. The memory will be kept occupied till all references to the result set are unset or the result set was explicitly freed, which will automatically happen during request end at the latest. The terminology "store result" is also used for buffered mode, as the whole result set is stored at once.

> When using libmysqlclient as library PHP's memory limit won't count the memory used for result sets unless the data is fetched into PHP variables. With mysqlnd the memory accounted for will include the full result set.

Unbuffered MySQL queries execute the query and then wait for the data from the MySQL server to be fetched. This uses less memory on the PHP-side, but can increase the load on the server. Unless the full result set was fetched from the server no further queries can be sent over the same connection. Unbuffered queries can also be referred to as "use result". Once all rows in the result set are fetched, the result set is gone and it cannot be iterated again.

Following these characteristics, unbuffered queries should be used only when a large result set is expected that will be processed sequentially. Unbuffered queries contain a number of pitfalls that makes it more difficult to use them, e.g. the number of rows in the result set is unknown until the last row is fetched. Buffered queries are the easier and more flexible way to process result sets.

 @TODO - Add list of issues people run into with unbuffered queries - Add list of specific use cases for when unbuffered queries are useful - Question: Unbuffered queries still require all rows to be returned or resource free before executing another? Applies to all extensions? - Show "free_result" functions / unset usage with buffered queries 8double-check with Andrey on mysqlnd optimizations 

Because buffered queries are the default, the examples below will demonstrate how to execute unbuffered queries with each API.

**Unbuffered query example: mysqli**

```php


<?php
$mysqli  = new mysqli("localhost", "my_user", "my_password", "world");
$unbufferedResult = $mysqli->query("SELECT Name FROM City", MYSQLI_USE_RESULT);

foreach ($unbufferedResult as $row) {
    echo $row['Name'] . PHP_EOL;
}
?>

   
```

**Unbuffered query example: pdo_mysql**

```php


<?php
$pdo = new PDO("mysql:host=localhost;dbname=world", 'my_user', 'my_password');
$pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);

$unbufferedResult = $pdo->query("SELECT Name FROM City");
foreach ($unbufferedResult as $row) {
    echo $row['Name'] . PHP_EOL;
}
?>

   
```

## Character sets

Ideally a proper character set will be set at the server level, and doing this is described within the [Character Set Configuration]() section of the MySQL Server manual. Alternatively, each MySQL API offers a method to set the character set at runtime.

> The character set and character escaping
>
> The character set should be understood and defined, as it has an affect on every action, and includes security implications. For example, the escaping mechanism (e.g., `mysqli_real_escape_string()` for mysqli and `PDO::quote()` for PDO_MySQL) will adhere to this setting. It is important to realize that these functions will not use the character set that is defined with a query, so for example the following will not have an effect on them:

**Problems with setting the character set with SQL**

```php


<?php

$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

// Will NOT affect $mysqli->real_escape_string();
$mysqli->query("SET NAMES utf8mb4");

// Will NOT affect $mysqli->real_escape_string();
$mysqli->query("SET CHARACTER SET utf8mb4");

// But, this will affect $mysqli->real_escape_string();
$mysqli->set_charset('utf8mb4');

// But, this will NOT affect it (UTF-8 vs utf8mb4) -- don't use dashes here
$mysqli->set_charset('UTF-8');
?>

   
```

Below are examples that demonstrate how to properly alter the character set at runtime using each API.

> Possible UTF-8 confusion
>
> Because character set names in MySQL do not contain dashes, the string "utf8" is valid in MySQL to set the character set to UTF-8 (up to 3 byte UTF-8 Unicode Encoding). The string "UTF-8" is not valid, as using "UTF-8" will fail to change the character set and will throw an error.

**Setting the character set example: mysqli**

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

echo 'Initial character set: ' . $mysqli->character_set_name() . "\n";

if (!$mysqli->set_charset('utf8mb4')) {
    printf("Error loading character set utf8mb4: %s\n", $mysqli->error);
    exit;
}

echo 'Your current character set is: ' . $mysqli->character_set_name() . "\n";
?>

   
```

**Setting the character set example: pdo_mysql**

```php


<?php
$pdo = new PDO("mysql:host=localhost;dbname=world;charset=utf8mb4", 'my_user', 'my_pass');
?>

   
```
