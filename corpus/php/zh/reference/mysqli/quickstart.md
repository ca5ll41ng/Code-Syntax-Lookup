---
id: "zh-php-guide-mysqli-quickstart"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.quickstart"
title: "快速入门指南"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.quickstart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 快速入门指南

本快速入门指南将有助于选择和熟悉 PHP MySQL API。

此快速入门概述了 mysqli 扩展。为 API 的所有主要方面提供了代码示例。 Database concepts are explained to the degree needed for presenting concepts specific to MySQL.

要求：熟悉 PHP 编程语言、SQL 语言、MySQL 服务器基础知识。

## 面向过程和面向对象，两种接口

mysqli 扩展具有双重接口。支持面向过程和面向对象，两种编程范式。

从旧的 mysql 扩展迁移的用户可能更喜欢过程接口。过程接口类似于旧的 mysql 扩展。在许多情况下，函数名称仅在前缀上有所不同。一些 mysqli 函数将连接句柄作为第一个参数，而匹配的旧 mysql 接口函数将其作为可选的最后一个参数。

**从旧的 mysql 扩展轻松迁移**

```php


<?php
$mysqli = mysqli_connect("example.com", "user", "password", "database");
$result = mysqli_query($mysqli, "SELECT 'Please do not use the deprecated mysql extension for new development. ' AS _msg FROM DUAL");
$row = mysqli_fetch_assoc($result);
echo $row['_msg'];

$mysql = mysql_connect("example.com", "user", "password");
mysql_select_db("test");
$result = mysql_query("SELECT 'Use the mysqli extension instead.' AS _msg FROM DUAL", $mysql);
$row = mysql_fetch_assoc($result);
echo $row['_msg'];

    
```

以上示例会输出：

```text


Please do not use the deprecated mysql extension for new development. Use the mysqli extension instead.

    
```

*面向对象接口*

除了经典的过程式接口，用户还可以选择使用面向对象接口。文档是使用面向对象的接口组织的。面向对象的接口按用途分组进行展示函数，使其更容易上手。参考部分提供了两种语法变体的示例。

这两个接口之间没有显着的性能差异。用户可以根据个人喜好进行选择。

**面向对象和面向过程接口**

```php


<?php

$mysqli = mysqli_connect("example.com", "user", "password", "database");

$result = mysqli_query($mysqli, "SELECT 'A world full of ' AS _msg FROM DUAL");
$row = mysqli_fetch_assoc($result);
echo $row['_msg'];

$mysqli = new mysqli("example.com", "user", "password", "database");

$result = $mysqli->query("SELECT 'choices to please everybody.' AS _msg FROM DUAL");
$row = $result->fetch_assoc();
echo $row['_msg'];

    
```

以上示例会输出：

```text


A world full of choices to please everybody.

    
```

面向对象的接口用于快速入门，因为参考部分是以这种方式组织的。

*混合风格*

可以随时在样式之间切换。出于代码清晰度和编码风格的原因，这两种风格不建议混合使用。

**糟糕的编码风格**

```php


<?php

$mysqli = new mysqli("example.com", "user", "password", "database");

$result = mysqli_query($mysqli, "SELECT 'Possible but bad style.' AS _msg FROM DUAL");

if ($row = $result->fetch_assoc()) {
    echo $row['_msg'];
}

    
```

以上示例会输出：

```text


Possible but bad style.

    
```

*参见*

`mysqli::__construct()` `mysqli::query()` `mysqli_result::fetch_assoc()` $mysqli::connect_errno $mysqli::connect_error $mysqli::errno $mysqli::error MySQLi 扩展的函数概述

## Connections

The MySQL server supports the use of different transport layers for connections. Connections use TCP/IP, Unix domain sockets or Windows named pipes.

The hostname `localhost` has a special meaning. It is bound to the use of Unix domain sockets. To open a TCP/IP connection to the localhost, `127.0.0.1` must be used instead of the hostname `localhost`.

**Special meaning of localhost**

```php


<?php

$mysqli = new mysqli("localhost", "user", "password", "database");

echo $mysqli->host_info . "\n";

$mysqli = new mysqli("127.0.0.1", "user", "password", "database", 3306);

echo $mysqli->host_info . "\n";

    
```

以上示例会输出：

```text


Localhost via UNIX socket
127.0.0.1 via TCP/IP

    
```

*Connection parameter defaults*

Depending on the connection function used, assorted parameters can be omitted. If a parameter is not provided, then the extension attempts to use the default values that are set in the PHP configuration file.

**Setting defaults**

```ini


mysqli.default_host=192.168.2.27
mysqli.default_user=root
mysqli.default_pw=""
mysqli.default_port=3306
mysqli.default_socket=/tmp/mysql.sock

    
```

The resulting parameter values are then passed to the client library that is used by the extension. If the client library detects empty or unset parameters, then it may default to the library built-in values.

*Built-in connection library defaults*

If the host value is unset or empty, then the client library will default to a Unix socket connection on `localhost`. If socket is unset or empty, and a Unix socket connection is requested, then a connection to the default socket on `/tmp/mysql.sock` is attempted.

On Windows systems, the host name `.` is interpreted by the client library as an attempt to open a Windows named pipe based connection. In this case the socket parameter is interpreted as the pipe name. If not given or empty, then the socket (pipe name) defaults to `\\.\pipe\MySQL`.

If neither a Unix domain socket based not a Windows named pipe based connection is to be established and the port parameter value is unset, the library will default to port `3306`.

The mysqlnd library and the MySQL Client Library (libmysqlclient) implement the same logic for determining defaults.

*Connection options*

Connection options are available to, for example, set init commands which are executed upon connect, or for requesting use of a certain charset. Connection options must be set before a network connection is established.

For setting a connection option, the connect operation has to be performed in three steps: creating a connection handle with `mysqli_init()` or `mysqli::__construct()`, setting the requested options using `mysqli::options()`, and establishing the network connection with `mysqli::real_connect()`.

*Connection pooling*

The mysqli extension supports persistent database connections, which are a special kind of pooled connections. By default, every database connection opened by a script is either explicitly closed by the user during runtime or released automatically at the end of the script. A persistent connection is not. Instead it is put into a pool for later reuse, if a connection to the same server using the same username, password, socket, port and default database is opened. Reuse saves connection overhead.

Every PHP process is using its own mysqli connection pool. Depending on the web server deployment model, a PHP process may serve one or multiple requests. Therefore, a pooled connection may be used by one or more scripts subsequently.

*Persistent connection*

If an unused persistent connection for a given combination of host, username, password, socket, port and default database cannot be found in the connection pool, then mysqli opens a new connection. The use of persistent connections can be enabled and disabled using the PHP directive mysqli.allow_persistent. The total number of connections opened by a script can be limited with mysqli.max_links. The maximum number of persistent connections per PHP process can be restricted with mysqli.max_persistent. Please note that the web server may spawn many PHP processes.

A common complain about persistent connections is that their state is not reset before reuse. For example, open and unfinished transactions are not automatically rolled back. But also, authorization changes which happened in the time between putting the connection into the pool and reusing it are not reflected. This may be seen as an unwanted side-effect. On the contrary, the name `persistent` may be understood as a promise that the state is persisted.

The mysqli extension supports both interpretations of a persistent connection: state persisted, and state reset before reuse. The default is reset. Before a persistent connection is reused, the mysqli extension implicitly calls `mysqli::change_user()` to reset the state. The persistent connection appears to the user as if it was just opened. No artifacts from previous usages are visible.

The `mysqli::change_user()` call is an expensive operation. For best performance, users may want to recompile the extension with the compile flag `MYSQLI_NO_CHANGE_USER_ON_PCONNECT` being set.

It is left to the user to choose between safe behavior and best performance. Both are valid optimization goals. For ease of use, the safe behavior has been made the default at the expense of maximum performance.

*See also*

`mysqli::__construct()` `mysqli_init()` `mysqli::options()` `mysqli::real_connect()` `mysqli::change_user()` $mysqli::host_info MySQLi Configuration Options Persistent Database Connections

## Executing statements

Statements can be executed with the `mysqli::query()`, `mysqli::real_query()` and `mysqli::multi_query()`. The `mysqli::query()` function is the most common, and combines the executing statement with a buffered fetch of its result set, if any, in one call. Calling `mysqli::query()` is identical to calling `mysqli::real_query()` followed by `mysqli::store_result()`.

**Executing queries**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");

    
```

*Buffered result sets*

After statement execution, results can be either retrieved all at once or read row by row from the server. Client-side result set buffering allows the server to free resources associated with the statement's results as early as possible. Generally speaking, clients are slow consuming result sets. Therefore, it is recommended to use buffered result sets. `mysqli::query()` combines statement execution and result set buffering.

PHP applications can navigate freely through buffered results. Navigation is fast because the result sets are held in client memory. Please, keep in mind that it is often easier to scale by client than it is to scale the server.

**Navigation through buffered results**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");
$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");

$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");

echo "Reverse order...\n";
for ($row_no = $result->num_rows - 1; $row_no >= 0; $row_no--) {
    $result->data_seek($row_no);
    $row = $result->fetch_assoc();
    echo " id = " . $row['id'] . "\n";
}

echo "Result set order...\n";
foreach ($result as $row) {
    echo " id = " . $row['id'] . "\n";
}

    
```

以上示例会输出：

```text


Reverse order...
 id = 3
 id = 2
 id = 1
Result set order...
 id = 1
 id = 2
 id = 3

    
```

*Unbuffered result sets*

If client memory is a short resource and freeing server resources as early as possible to keep server load low is not needed, unbuffered results can be used. Scrolling through unbuffered results is not possible before all rows have been read.

**Navigation through unbuffered results**

```php


<?php

$mysqli->real_query("SELECT id FROM test ORDER BY id ASC");
$result = $mysqli->use_result();

echo "Result set order...\n";
foreach ($result as $row) {
    echo " id = " . $row['id'] . "\n";
}

    
```

*Result set values data types*

The `mysqli::query()`, `mysqli::real_query()` and `mysqli::multi_query()` functions are used to execute non-prepared statements. At the level of the MySQL Client Server Protocol, the command `COM_QUERY` and the text protocol are used for statement execution. With the text protocol, the MySQL server converts all data of a result sets into strings before sending. This conversion is done regardless of the SQL result set column data type. The mysql client libraries receive all column values as strings. No further client-side casting is done to convert columns back to their native types. Instead, all values are provided as PHP strings.

**Text protocol returns strings by default**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label CHAR(1))");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'a')");

$result = $mysqli->query("SELECT id, label FROM test WHERE id = 1");
$row = $result->fetch_assoc();

printf("id = %s (%s)\n", $row['id'], gettype($row['id']));
printf("label = %s (%s)\n", $row['label'], gettype($row['label']));

    
```

以上示例会输出：

```text


id = 1 (string)
label = a (string)

    
```

It is possible to convert integer and float columns back to PHP numbers by setting the `MYSQLI_OPT_INT_AND_FLOAT_NATIVE` connection option, if using the mysqlnd library. If set, the mysqlnd library will check the result set meta data column types and convert numeric SQL columns to PHP numbers, if the PHP data type value range allows for it. This way, for example, SQL INT columns are returned as integers.

**Native data types with mysqlnd and connection option**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli();
$mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
$mysqli->real_connect("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label CHAR(1))");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'a')");

$result = $mysqli->query("SELECT id, label FROM test WHERE id = 1");
$row = $result->fetch_assoc();

printf("id = %s (%s)\n", $row['id'], gettype($row['id']));
printf("label = %s (%s)\n", $row['label'], gettype($row['label']));

    
```

以上示例会输出：

```text


id = 1 (integer)
label = a (string)

    
```

*See also*

`mysqli::__construct()` `mysqli::options()` `mysqli::real_connect()` `mysqli::query()` `mysqli::multi_query()` `mysqli::use_result()` `mysqli::store_result()`

## Prepared Statements

The MySQL database supports prepared statements. A prepared statement or a parameterized statement is used to execute the same statement repeatedly with high efficiency and protect against SQL injections.

*Basic workflow*

The prepared statement execution consists of two stages: prepare and execute. At the prepare stage a statement template is sent to the database server. The server performs a syntax check and initializes server internal resources for later use.

The MySQL server supports using anonymous, positional placeholder with `?`.

Prepare is followed by execute. During execute the client binds parameter values and sends them to the server. The server executes the statement with the bound values using the previously created internal resources.

**Prepared statement**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");

/* Prepared statement, stage 1: prepare */
$stmt = $mysqli->prepare("INSERT INTO test(id, label) VALUES (?, ?)");

/* Prepared statement, stage 2: bind and execute */
$id = 1;
$label = 'PHP';
$stmt->bind_param("is", $id, $label); // "is" means that $id is bound as an integer and $label as a string

$stmt->execute();

    
```

*Repeated execution*

A prepared statement can be executed repeatedly. Upon every execution the current value of the bound variable is evaluated and sent to the server. The statement is not parsed again. The statement template is not transferred to the server again.

**INSERT prepared once, executed multiple times**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");

/* Prepared statement, stage 1: prepare */
$stmt = $mysqli->prepare("INSERT INTO test(id, label) VALUES (?, ?)");

/* Prepared statement, stage 2: bind and execute */
$stmt->bind_param("is", $id, $label); // "is" means that $id is bound as an integer and $label as a string

$data = [
    1 => 'PHP',
    2 => 'Java',
    3 => 'C++'
];
foreach ($data as $id => $label) {
    $stmt->execute();
}

$result = $mysqli->query('SELECT id, label FROM test');
var_dump($result->fetch_all(MYSQLI_ASSOC));

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  array(2) {
    ["id"]=>
    string(1) "1"
    ["label"]=>
    string(3) "PHP"
  }
  [1]=>
  array(2) {
    ["id"]=>
    string(1) "2"
    ["label"]=>
    string(4) "Java"
  }
  [2]=>
  array(2) {
    ["id"]=>
    string(1) "3"
    ["label"]=>
    string(3) "C++"
  }
}

    
```

Every prepared statement occupies server resources. Statements should be closed explicitly immediately after use. If not done explicitly, the statement will be closed when the statement handle is freed by PHP.

Using a prepared statement is not always the most efficient way of executing a statement. A prepared statement executed only once causes more client-server round-trips than a non-prepared statement. This is why the `SELECT` is not run as a prepared statement above.

Also, consider the use of the MySQL multi-INSERT SQL syntax for INSERTs. For the example, multi-INSERT requires fewer round-trips between the server and client than the prepared statement shown above.

**Less round trips using multi-INSERT SQL**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");

$values = [1, 2, 3, 4];

$stmt = $mysqli->prepare("INSERT INTO test(id) VALUES (?), (?), (?), (?)");
$stmt->bind_param('iiii', ...$values);
$stmt->execute();

    
```

*Result set values data types*

The MySQL Client Server Protocol defines a different data transfer protocol for prepared statements and non-prepared statements. Prepared statements are using the so called binary protocol. The MySQL server sends result set data "as is" in binary format. Results are not serialized into strings before sending. Client libraries receive binary data and try to convert the values into appropriate PHP data types. For example, results from an SQL `INT` column will be provided as PHP integer variables.

**Native datatypes**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'PHP')");

$stmt = $mysqli->prepare("SELECT id, label FROM test WHERE id = 1");
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

printf("id = %s (%s)\n", $row['id'], gettype($row['id']));
printf("label = %s (%s)\n", $row['label'], gettype($row['label']));

    
```

以上示例会输出：

```text


id = 1 (integer)
label = PHP (string)

    
```

This behavior differs from non-prepared statements. By default, non-prepared statements return all results as strings. This default can be changed using a connection option. If the connection option is used, there are no differences.

*Fetching results using bound variables*

Results from prepared statements can either be retrieved by binding output variables, or by requesting a `mysqli_result` object.

Output variables must be bound after statement execution. One variable must be bound for every column of the statements result set.

**Output variable binding**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'PHP')");

$stmt = $mysqli->prepare("SELECT id, label FROM test WHERE id = 1");
$stmt->execute();

$stmt->bind_result($out_id, $out_label);

while ($stmt->fetch()) {
    printf("id = %s (%s), label = %s (%s)\n", $out_id, gettype($out_id), $out_label, gettype($out_label));
}

    
```

以上示例会输出：

```text


id = 1 (integer), label = PHP (string)

    
```

Prepared statements return unbuffered result sets by default. The results of the statement are not implicitly fetched and transferred from the server to the client for client-side buffering. The result set takes server resources until all results have been fetched by the client. Thus it is recommended to consume results timely. If a client fails to fetch all results or the client closes the statement before having fetched all data, the data has to be fetched implicitly by `mysqli`.

It is also possible to buffer the results of a prepared statement using `mysqli_stmt::store_result()`.

*Fetching results using mysqli_result interface*

Instead of using bound results, results can also be retrieved through the mysqli_result interface. `mysqli_stmt::get_result()` returns a buffered result set.

**Using mysqli_result to fetch results**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'PHP')");

$stmt = $mysqli->prepare("SELECT id, label FROM test WHERE id = 1");
$stmt->execute();

$result = $stmt->get_result();

var_dump($result->fetch_all(MYSQLI_ASSOC));

    
```

以上示例会输出：

```text


array(1) {
  [0]=>
  array(2) {
    ["id"]=>
    int(1)
    ["label"]=>
    string(3) "PHP"
  }
}

    
```

Using the `mysqli_result` interface offers the additional benefit of flexible client-side result set navigation.

**Buffered result set for flexible read out**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Non-prepared statement */
$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT, label TEXT)");
$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'PHP'), (2, 'Java'), (3, 'C++')");

$stmt = $mysqli->prepare("SELECT id, label FROM test");
$stmt->execute();

$result = $stmt->get_result();

for ($row_no = $result->num_rows - 1; $row_no >= 0; $row_no--) {
    $result->data_seek($row_no);
    var_dump($result->fetch_assoc());
}

    
```

以上示例会输出：

```text


array(2) {
  ["id"]=>
  int(3)
  ["label"]=>
  string(3) "C++"
}
array(2) {
  ["id"]=>
  int(2)
  ["label"]=>
  string(4) "Java"
}
array(2) {
  ["id"]=>
  int(1)
  ["label"]=>
  string(3) "PHP"
}

    
```

*Escaping and SQL injection*

Bound variables are sent to the server separately from the query and thus cannot interfere with it. The server uses these values directly at the point of execution, after the statement template is parsed. Bound parameters do not need to be escaped as they are never substituted into the query string directly. A hint must be provided to the server for the type of bound variable, to create an appropriate conversion. See the `mysqli_stmt::bind_param()` function for more information.

Such a separation sometimes considered as the only security feature to prevent SQL injection, but the same degree of security can be achieved with non-prepared statements, if all the values are formatted correctly. It should be noted that correct formatting is not the same as escaping and involves more logic than simple escaping. Thus, prepared statements are simply a more convenient and less error-prone approach to this element of database security.

*Client-side prepared statement emulation*

The API does not include emulation for client-side prepared statement emulation.

*See also*

`mysqli::__construct()` `mysqli::query()` `mysqli::prepare()` `mysqli_stmt::prepare()` `mysqli_stmt::execute()` `mysqli_stmt::bind_param()` `mysqli_stmt::bind_result()`

## Stored Procedures

The MySQL database supports stored procedures. A stored procedure is a subroutine stored in the database catalog. Applications can call and execute the stored procedure. The `CALL` SQL statement is used to execute a stored procedure.

*Parameter*

Stored procedures can have `IN`, `INOUT` and `OUT` parameters, depending on the MySQL version. The mysqli interface has no special notion for the different kinds of parameters.

*IN parameter*

Input parameters are provided with the `CALL` statement. Please, make sure values are escaped correctly.

**Calling a stored procedure**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");

$mysqli->query("DROP PROCEDURE IF EXISTS p");
$mysqli->query("CREATE PROCEDURE p(IN id_val INT) BEGIN INSERT INTO test(id) VALUES(id_val); END;");

$mysqli->query("CALL p(1)");

$result = $mysqli->query("SELECT id FROM test");

var_dump($result->fetch_assoc());

    
```

以上示例会输出：

```text


array(1) {
  ["id"]=>
  string(1) "1"
}

    
```

*INOUT/OUT parameter*

The values of `INOUT`/`OUT` parameters are accessed using session variables.

**Using session variables**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP PROCEDURE IF EXISTS p");
$mysqli->query('CREATE PROCEDURE p(OUT msg VARCHAR(50)) BEGIN SELECT "Hi!" INTO msg; END;');

$mysqli->query("SET @msg = ''");
$mysqli->query("CALL p(@msg)");

$result = $mysqli->query("SELECT @msg as _p_out");

$row = $result->fetch_assoc();
echo $row['_p_out'];

    
```

以上示例会输出：

```text


Hi!

    
```

Application and framework developers may be able to provide a more convenient API using a mix of session variables and databased catalog inspection. However, please note the possible performance impact of a custom solution based on catalog inspection.

*Handling result sets*

Stored procedures can return result sets. Result sets returned from a stored procedure cannot be fetched correctly using `mysqli::query()`. The `mysqli::query()` function combines statement execution and fetching the first result set into a buffered result set, if any. However, there are additional stored procedure result sets hidden from the user which cause `mysqli::query()` to fail returning the user expected result sets.

Result sets returned from a stored procedure are fetched using `mysqli::real_query()` or `mysqli::multi_query()`. Both functions allow fetching any number of result sets returned by a statement, such as `CALL`. Failing to fetch all result sets returned by a stored procedure causes an error.

**Fetching results from stored procedures**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");
$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");

$mysqli->query("DROP PROCEDURE IF EXISTS p");
$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 FROM test; END;');

$mysqli->multi_query("CALL p()");

do {
    if ($result = $mysqli->store_result()) {
        printf("---\n");
        var_dump($result->fetch_all());
        $result->free();
    }
} while ($mysqli->next_result());

    
```

以上示例会输出：

```text


---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    string(1) "1"
  }
  [1]=>
  array(1) {
    [0]=>
    string(1) "2"
  }
  [2]=>
  array(1) {
    [0]=>
    string(1) "3"
  }
}
---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    string(1) "2"
  }
  [1]=>
  array(1) {
    [0]=>
    string(1) "3"
  }
  [2]=>
  array(1) {
    [0]=>
    string(1) "4"
  }
}

    
```

*Use of prepared statements*

No special handling is required when using the prepared statement interface for fetching results from the same stored procedure as above. The prepared statement and non-prepared statement interfaces are similar. Please note, that not every MYSQL server version may support preparing the `CALL` SQL statement.

**Stored Procedures and Prepared Statements**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");
$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");

$mysqli->query("DROP PROCEDURE IF EXISTS p");
$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 FROM test; END;');

$stmt = $mysqli->prepare("CALL p()");

$stmt->execute();

do {
    if ($result = $stmt->get_result()) {
        printf("---\n");
        var_dump($result->fetch_all());
        $result->free();
    }
} while ($stmt->next_result());

    
```

以上示例会输出：

```text


---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    int(1)
  }
  [1]=>
  array(1) {
    [0]=>
    int(2)
  }
  [2]=>
  array(1) {
    [0]=>
    int(3)
  }
}
---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    int(2)
  }
  [1]=>
  array(1) {
    [0]=>
    int(3)
  }
  [2]=>
  array(1) {
    [0]=>
    int(4)
  }
}

    
```

Of course, use of the bind API for fetching is supported as well.

**Stored Procedures and Prepared Statements using bind API**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");
$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");

$mysqli->query("DROP PROCEDURE IF EXISTS p");
$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 FROM test; END;');

$stmt = $mysqli->prepare("CALL p()");

$stmt->execute();

do {
    if ($stmt->store_result()) {
        $stmt->bind_result($id_out);
        while ($stmt->fetch()) {
            echo "id = $id_out\n";
        }
    }
} while ($stmt->next_result());

    
```

以上示例会输出：

```text


id = 1
id = 2
id = 3
id = 2
id = 3
id = 4

    
```

*See also*

`mysqli::query()` `mysqli::multi_query()` `mysqli::next_result()` `mysqli::more_results()`

## Multiple Statements

MySQL optionally allows having multiple statements in one statement string, but it requires special handling.

Multiple statements or multi queries must be executed with `mysqli::multi_query()`. The individual statements of the statement string are separated by semicolon. Then, all result sets returned by the executed statements must be fetched.

The MySQL server allows having statements that do return result sets and statements that do not return result sets in one multiple statement.

**Multiple Statements**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");

$sql = "SELECT COUNT(*) AS _num FROM test;
        INSERT INTO test(id) VALUES (1); 
        SELECT COUNT(*) AS _num FROM test; ";

$mysqli->multi_query($sql);

do {
    if ($result = $mysqli->store_result()) {
        var_dump($result->fetch_all(MYSQLI_ASSOC));
        $result->free();
    }
} while ($mysqli->next_result());

    
```

以上示例会输出：

```text


array(1) {
  [0]=>
  array(1) {
    ["_num"]=>
    string(1) "0"
  }
}
array(1) {
  [0]=>
  array(1) {
    ["_num"]=>
    string(1) "1"
  }
}

    
```

*Security considerations*

The API functions `mysqli::query()` and `mysqli::real_query()` do not set a connection flag necessary for activating multi queries in the server. An extra API call is used for multiple statements to reduce the damage of accidental SQL injection attacks. An attacker may try to add statements such as `; DROP DATABASE mysql` or `; SELECT SLEEP(999)`. If the attacker succeeds in adding SQL to the statement string but `mysqli::multi_query()` is not used, the server will not execute the injected and malicious SQL statement.

**SQL Injection**

```php


<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");
$result = $mysqli->query("SELECT 1; DROP TABLE mysql.user");
?>

    
```

以上示例会输出：

```text


PHP Fatal error:  Uncaught mysqli_sql_exception: You have an error in your SQL syntax; 
check the manual that corresponds to your MySQL server version for the right syntax to 
use near 'DROP TABLE mysql.user' at line 1

    
```

*Prepared statements*

Use of the multiple statement with prepared statements is not supported.

*See also*

`mysqli::query()` `mysqli::multi_query()` `mysqli::next_result()` `mysqli::more_results()`

## API support for transactions

The MySQL server supports transactions depending on the storage engine used. Since MySQL 5.5, the default storage engine is InnoDB. InnoDB has full ACID transaction support.

Transactions can either be controlled using SQL or API calls. It is recommended to use API calls for enabling and disabling the `autocommit` mode and for committing and rolling back transactions.

**Setting `autocommit` mode with SQL and through the API**

```php


<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

/* Recommended: using API to control transactional settings */
$mysqli->autocommit(false);

/* Won't be monitored and recognized by the replication and the load balancing plugin */
$mysqli->query('SET AUTOCOMMIT = 0');

    
```

Optional feature packages, such as the replication and load balancing plugin, can easily monitor API calls. The replication plugin offers transaction aware load balancing, if transactions are controlled with API calls. Transaction aware load balancing is not available if SQL statements are used for setting `autocommit` mode, committing or rolling back a transaction.

**Commit and rollback**

```php


<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");
$mysqli->autocommit(false);

$mysqli->query("INSERT INTO test(id) VALUES (1)");
$mysqli->rollback();

$mysqli->query("INSERT INTO test(id) VALUES (2)");
$mysqli->commit();

    
```

Please note, that the MySQL server cannot roll back all statements. Some statements cause an implicit commit.

*See also*

`mysqli::autocommit()` `mysqli::begin_transaction()` `mysqli::commit()` `mysqli::rollback()`

## Metadata

A MySQL result set contains metadata. The metadata describes the columns found in the result set. All metadata sent by MySQL is accessible through the `mysqli` interface. The extension performs no or negligible changes to the information it receives. Differences between MySQL server versions are not aligned.

Meta data is access through the `mysqli_result` interface.

**Accessing result set meta data**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$result = $mysqli->query("SELECT 1 AS _one, 'Hello' AS _two FROM DUAL");
var_dump($result->fetch_fields());

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  object(stdClass)#3 (13) {
    ["name"]=>
    string(4) "_one"
    ["orgname"]=>
    string(0) ""
    ["table"]=>
    string(0) ""
    ["orgtable"]=>
    string(0) ""
    ["def"]=>
    string(0) ""
    ["db"]=>
    string(0) ""
    ["catalog"]=>
    string(3) "def"
    ["max_length"]=>
    int(1)
    ["length"]=>
    int(1)
    ["charsetnr"]=>
    int(63)
    ["flags"]=>
    int(32897)
    ["type"]=>
    int(8)
    ["decimals"]=>
    int(0)
  }
  [1]=>
  object(stdClass)#4 (13) {
    ["name"]=>
    string(4) "_two"
    ["orgname"]=>
    string(0) ""
    ["table"]=>
    string(0) ""
    ["orgtable"]=>
    string(0) ""
    ["def"]=>
    string(0) ""
    ["db"]=>
    string(0) ""
    ["catalog"]=>
    string(3) "def"
    ["max_length"]=>
    int(5)
    ["length"]=>
    int(5)
    ["charsetnr"]=>
    int(8)
    ["flags"]=>
    int(1)
    ["type"]=>
    int(253)
    ["decimals"]=>
    int(31)
  }
}

    
```

*Prepared statements*

Meta data of result sets created using prepared statements are accessed the same way. A suitable `mysqli_result` handle is returned by `mysqli_stmt::result_metadata()`.

**Prepared statements metadata**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$stmt = $mysqli->prepare("SELECT 1 AS _one, 'Hello' AS _two FROM DUAL");
$stmt->execute();
$result = $stmt->result_metadata();
var_dump($result->fetch_fields());

    
```

*See also*

`mysqli::query()` `mysqli_result::fetch_fields()`
