---
id: "en-php-function-sqlite3-createaggregate"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::createAggregate"
title: "Registers a PHP function for use as an SQL aggregate function"
signature: "public bool SQLite3::createAggregate(string $name, callable $stepCallback, callable $finalCallback, int $argCount = -1)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.createaggregate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a PHP function for use as an SQL aggregate function

## Description

```php
public bool SQLite3::createAggregate(string $name, callable $stepCallback, callable $finalCallback, int $argCount = -1)
```

Registers a PHP function or user-defined function for use as an SQL aggregate function for use within SQL statements.

## Parameters

- **`$name`** — Name of the SQL aggregate to be created or redefined.
- **`$stepCallback`** — Callback function called for each row of the result set. Your PHP function should accumulate the result and store it in the aggregation context. — This function need to be defined as: `mixed``{step}()` `mixed``$context` `int``$rownumber` `mixed``$value` `mixed``$values` - **`$context`** — `null` for the first row; on subsequent rows it will have the value that was previously returned from the step function; you should use this to maintain the aggregate state. - **`$rownumber`** — The current row number. - **`$value`** — The first argument passed to the aggregate. - **`$values`** — Further arguments passed to the aggregate. The return value of this function will be used as the `$context` argument in the next call of the step or finalize functions.
- **`$finalCallback`** — Callback function to aggregate the "stepped" data from each row. Once all the rows have been processed, this function will be called and it should then take the data from the aggregation context and return the result. This callback function should return a type understood by SQLite (i.e. scalar type). — This function need to be defined as: `mixed``{fini}()` `mixed``$context` `int``$rownumber` - **`$context`** — Holds the return value from the very last call to the step function. - **`$rownumber`** — Always `0`. The return value of this function will be used as the return value for the aggregate.
- **`$argCount`** — The number of arguments that the SQL aggregate takes. If this parameter is negative, then the SQL aggregate may take any number of arguments.

## Return Values

Returns `true` upon successful creation of the aggregate, or `false` on failure.

## Examples

**max_length aggregation function example**

```php


<?php
$data = array(
   'one',
   'two',
   'three',
   'four',
   'five',
   'six',
   'seven',
   'eight',
   'nine',
   'ten',
   );
$db = new SQLite3(':memory:');
$db->exec("CREATE TABLE strings(a)");
$insert = $db->prepare('INSERT INTO strings VALUES (?)');
foreach ($data as $str) {
    $insert->bindValue(1, $str);
    $insert->execute();
}
$insert = null;

function max_len_step($context, $rownumber, $string)
{
    if (strlen($string) > $context) {
        $context = strlen($string);
    }
    return $context;
}

function max_len_finalize($context, $rownumber)
{
    return $context === null ? 0 : $context;
}

$db->createAggregate('max_len', 'max_len_step', 'max_len_finalize');

var_dump($db->querySingle('SELECT max_len(a) from strings'));
?>

    
```

The above example will output:

```php


int(5)

    
```

In this example, we are creating an aggregating function that will calculate the length of the longest string in one of the columns of the table. For each row, the `max_len_step` function is called and passed a `$context` parameter. The context parameter is just like any other PHP variable and be set to hold an array or even an object value. In this example, we are simply using it to hold the maximum length we have seen so far; if the `$string` has a length longer than the current maximum, we update the context to hold this new maximum length.

After all of the rows have been processed, SQLite calls the `max_len_finalize` function to determine the aggregate result. Here, we could perform some kind of calculation based on the data found in the `$context`. In our simple example though, we have been calculating the result as the query progressed, so we simply need to return the context value.

> It is NOT recommended for you to store a copy of the values in the context and then process them at the end, as you would cause SQLite to use a lot of memory to process the query - just think of how much memory you would need if a million rows were stored in memory, each containing a string 32 bytes in length.

> You can use `SQLite3::createAggregate()` to override SQLite native SQL functions.
