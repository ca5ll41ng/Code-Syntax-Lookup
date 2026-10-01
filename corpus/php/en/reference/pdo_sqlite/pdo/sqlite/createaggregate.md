---
id: "en-php-function-pdo-sqlite-createaggregate"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Sqlite::createAggregate"
title: "Registers an aggregating user-defined function for use in SQL statements"
signature: "public bool Pdo\\Sqlite::createAggregate(string $name, callable $step, callable $finalize, int $numArgs = -1)"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/pdo-sqlite.createaggregate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers an aggregating user-defined function for use in SQL statements

## Description

```php
public bool Pdo\Sqlite::createAggregate(string $name, callable $step, callable $finalize, int $numArgs = -1)
```

This method is similar to `Pdo\Sqlite::createFunction()` except that it registers functions that can be used to calculate a result aggregated across all the rows of a query.

The key difference between this method and `Pdo\Sqlite::createFunction()` is that two functions are required to manage the aggregate.

> By using this method it is possible to override native SQL functions.

## Parameters

- **`$name`** — The name of the function used in SQL statements.
- **`$step`** — Callback function called for each row of the result set. The callback should accumulate the result and store it in the aggregation context. — This function need to be defined as: `mixed``{step}()` `mixed``$context` `int``$rownumber` `mixed``$value` `mixed``$values` - **`$context`** — `null` for the first row; on subsequent rows it will have the value that was previously returned from the step function; you should use this to maintain the aggregate state. - **`$rownumber`** — The current row number. - **`$value`** — The first argument passed to the aggregate. - **`$values`** — Further arguments passed to the aggregate. The return value of this function will be used as the `$context` argument in the next call of the step or finalize functions.
- **`$finalize`** — Callback function to aggregate the "stepped" data from each row. Once all the rows have been processed, this function will be called, and it should then take the data from the aggregation context and return the result. This callback function should return a type understood by SQLite (i.e. scalar type). — This function need to be defined as: `mixed``{fini}()` `mixed``$context` `int``$rowcount` - **`$context`** — Holds the return value from the very last call to the step function. - **`$rowcount`** — Holds the number of rows over which the aggregate was performed. The return value of this function will be used as the return value for the aggregate.
- **`$numArgs`** — Hint to the SQLite parser if the callback function accepts a predetermined number of arguments.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`Pdo\Sqlite::createAggregate()` example**

In this example we will create a custom aggregate function named `max_length` that can be used in SQL queries.

In this example, we are creating an aggregating function, named `max_length`, that will calculate the length of the longest string in one of the columns of the table. For each row, the `max_len_step` function is called and passed a `$context` parameter. The context parameter is just like any other PHP variable and be set to hold an `array` or even an `object`. In this example, we are using it to hold the maximum length we have seen so far; if the `$string` has a length longer than the current maximum, we update the context to hold this new maximum length.

After all the rows have been processed, SQLite calls the `max_len_finalize` function to determine the aggregate result. It is possible to perform some kind of calculation based on the data in `$context`. In this basic example the result was calculated as the query progressed, thus so the context value can be directly returned.

```php


<?php
$data = [
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
];
$db = new Pdo\Sqlite('sqlite::memory:');
$db->exec("CREATE TABLE strings(a)");
$insert = $db->prepare('INSERT INTO strings VALUES (?)');
foreach ($data as $str) {
    $insert->execute(array($str));
}
$insert = null;

function max_len_step($context, $row_number, $string)
{
    if (strlen($string) > $context) {
        $context = strlen($string);
    }
    return $context;
}

function max_len_finalize($context, $row_count)
{
    return $context === null ? 0 : $context;
}

$db->createAggregate('max_len', 'max_len_step', 'max_len_finalize');

var_dump($db->query('SELECT max_len(a) from strings')->fetchAll());

?>

   
```

 TODO <simpara xmlns="http://docbook.org/ns/docbook">The above example will output:</simpara> <screen> <![CDATA[ Code example ]]> </screen> 

> It is NOT recommended for you to store a copy of the values in the context and then process them at the end, as you would cause SQLite to use a lot of memory to process the query - just think of how much memory you would need if a million rows were stored in memory, each containing a string 32 bytes in length.

## See Also

 `Pdo\Sqlite::createFunction()` `Pdo\Sqlite::createCollation()` `sqlite_create_function()` `sqlite_create_aggregate()`
