---
id: "en-php-guide-oci8-examples"
language: "php"
lang: "en"
category: "guide"
name: "oci8.examples"
title: "Examples"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

These examples connect as the `HR` user, which is the sample "Human Resources" schema supplied with the Oracle database. The account may need to be unlocked and the password reset before you can use it.

The examples connect to the `XE` database on your machine. Change the connect string to your database before running the examples.

**Basic query**

This shows querying and displaying results. Statements in OCI8 use a prepare-execute-fetch sequence of steps.

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Prepare the statement
$stid = oci_parse($conn, 'SELECT * FROM departments');
if (!$stid) {
    $e = oci_error($conn);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Perform the logic of the query
$r = oci_execute($stid);
if (!$r) {
    $e = oci_error($stid);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Fetch the results of the query
print "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    print "<tr>\n";
    foreach ($row as $item) {
        print "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
    }
    print "</tr>\n";
}
print "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?>

  
```

**Inserting with bind variables**

Bind variables improve performance by allowing reuse of execution contexts and caches. Bind variables improve security by preventing some kinds of SQL Injection problems.

```php


<?php

// Before running, create the table:
//   CREATE TABLE MYTABLE (mid NUMBER, myd VARCHAR2(20));

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'INSERT INTO MYTABLE (mid, myd) VALUES(:myid, :mydata)');

$id = 60;
$data = 'Some data';

oci_bind_by_name($stid, ':myid', $id);
oci_bind_by_name($stid, ':mydata', $data);

$r = oci_execute($stid);  // executes and commits

if ($r) {
    print "One row inserted";
}

oci_free_statement($stid);
oci_close($conn);

?>

  
```

**Binding in the WHERE clause of a query**

This shows a single scalar bind.

```php


<?php

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$sql = 'SELECT last_name FROM employees WHERE department_id = :didbv ORDER BY last_name';
$stid = oci_parse($conn, $sql);
$didbv = 60;
oci_bind_by_name($stid, ':didbv', $didbv);
oci_execute($stid);
while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {
    echo $row['LAST_NAME'] ."<br>\n";
}

// Output is
//    Austin
//    Ernst
//    Hunold
//    Lorentz
//    Pataballa

oci_free_statement($stid);
oci_close($conn);

?>

  
```

**Inserting and fetching a CLOB**

For large data use binary long object (BLOB) or character long object (CLOB) types. This example uses CLOB.

```php


<?php

// Before running, create the table:
//     CREATE TABLE MYTABLE (mykey NUMBER, myclob CLOB);

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$mykey = 12343;  // arbitrary key for this example;

$sql = "INSERT INTO mytable (mykey, myclob)
        VALUES (:mykey, EMPTY_CLOB())
        RETURNING myclob INTO :myclob";

$stid = oci_parse($conn, $sql);
$clob = oci_new_descriptor($conn, OCI_D_LOB);
oci_bind_by_name($stid, ":mykey", $mykey, 5);
oci_bind_by_name($stid, ":myclob", $clob, -1, OCI_B_CLOB);
oci_execute($stid, OCI_NO_AUTO_COMMIT);
$clob->save("A very long string");

oci_commit($conn);

// Fetching CLOB data

$query = 'SELECT myclob FROM mytable WHERE mykey = :mykey';

$stid = oci_parse ($conn, $query);
oci_bind_by_name($stid, ":mykey", $mykey, 5);
oci_execute($stid);

print '<table border="1">';
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_LOBS)) {
    print '<tr><td>'.$row['MYCLOB'].'</td></tr>';
    // In a loop, freeing the large variable before the 2nd fetch reduces PHP's peak memory usage
    unset($row);  
}
print '</table>';

?>

  
```

**Using a PL/SQL stored function**

You must bind a variable for the return value and optionally for any PL/SQL function arguments.

```php


<?php

/*
  Before running the PHP program, create a stored function in
  SQL*Plus or SQL Developer:

  CREATE OR REPLACE FUNCTION myfunc(p IN NUMBER) RETURN NUMBER AS
  BEGIN
      RETURN p * 3;
  END;

*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$p = 8;

$stid = oci_parse($conn, 'begin :r := myfunc(:p); end;');
oci_bind_by_name($stid, ':p', $p);
oci_bind_by_name($stid, ':r', $r, 40);

oci_execute($stid);

print "$r\n";   // prints 24

oci_free_statement($stid);
oci_close($conn);

?>

  
```

**Using a PL/SQL stored procedure**

With stored procedures, you should bind variables for any arguments.

```php


<?php

/*
  Before running the PHP program, create a stored procedure in
  SQL*Plus or SQL Developer:

  CREATE OR REPLACE PROCEDURE myproc(p1 IN NUMBER, p2 OUT NUMBER) AS
  BEGIN
      p2 := p1 * 2;
  END;

*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$p1 = 8;

$stid = oci_parse($conn, 'begin myproc(:p1, :p2); end;');
oci_bind_by_name($stid, ':p1', $p1);
oci_bind_by_name($stid, ':p2', $p2, 40);

oci_execute($stid);

print "$p2\n";   // prints 16

oci_free_statement($stid);
oci_close($conn);

?>

  
```

**Calling a PL/SQL function that returns a `REF CURSOR`**

Each returned value from the query is a `REF CURSOR` that can be fetched from.

```php


<?php
/*
  Create the PL/SQL stored function as:

  CREATE OR REPLACE FUNCTION myfunc(p1 IN NUMBER) RETURN SYS_REFCURSOR AS
      rc SYS_REFCURSOR;
  BEGIN
      OPEN rc FOR SELECT city FROM locations WHERE ROWNUM < p1;
      RETURN rc;
  END;
*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'SELECT myfunc(5) AS mfrc FROM dual');
oci_execute($stid);

echo "<table border='1'>\n";
while (($row = oci_fetch_array($stid, OCI_ASSOC))) {
    echo "<tr>\n";
    $rc = $row['MFRC'];
    oci_execute($rc);  // returned column value from the query is a ref cursor
    while (($rc_row = oci_fetch_array($rc, OCI_ASSOC))) {   
        echo "    <td>" . $rc_row['CITY'] . "</td>\n";
    }
    oci_free_statement($rc);
    echo "</tr>\n";
}
echo "</table>\n";

// Output is:
//   Beijing
//   Bern
//   Bombay
//   Geneva

oci_free_statement($stid);
oci_close($conn);

?>

  
```
