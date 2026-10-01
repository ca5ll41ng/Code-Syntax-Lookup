---
id: "en-php-guide-ref-pdo-mysql"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-mysql"
title: "MySQL PDO Driver (PDO_MYSQL)"
module: "pdo_mysql"
source_url: "https://www.php.net/manual/en/ref.pdo-mysql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MySQL PDO Driver (PDO_MYSQL)

MySQL PDO Driver

  Introduction  PDO_MYSQL is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to MySQL databases.    PDO_MYSQL uses emulated prepares by default.    *MySQL 8*    When running a PHP version before 7.1.16, or PHP 7.2 before 7.2.4, set MySQL 8 Server's default password plugin to *mysql_native_password* or else you will see errors similar to *The server requested authentication method unknown to the client [caching_sha2_password]* even when *caching_sha2_password* is not used.    This is because MySQL 8 defaults to caching_sha2_password, a plugin that is not recognized by the older PHP (mysqlnd) releases. Instead, change it by setting `default_authentication_plugin=mysql_native_password` in `my.cnf`. The *caching_sha2_password* plugin is fully supported as of PHP 7.4.4. For older releases, the mysql_xdevapi extension does support it.   
> Beware: Some MySQL table types (storage engines) do not support transactions. When writing transactional database code using a table type that does not support transactions, MySQL will pretend that a transaction was initiated successfully. In addition, any DDL queries issued will implicitly commit any pending transactions.

 
> The MySQL driver does not properly support `PDO::PARAM_INPUT_OUTPUT` via `PDOStatement::bindParam()`; while such parameters can be used, they are not updated (i.e. the actual output is ignored).

     

  PDO_MYSQL DSN Connecting to MySQL databases   Description  The PDO_MYSQL Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is mysql:.
- **`host`** — The hostname on which the database server resides.
- **`port`** — The port number where the database server is listening.
- **`dbname`** — The name of the database.
- **`user`** — The name of the user for the connection. A user name given as the second argument to the `PDO` constructor takes precedence over one specified in the DSN.
- **`password`** — The password of the user for the connection. A password given as the third argument to the `PDO` constructor takes precedence over one specified in the DSN.
- **`unix_socket`** — The MySQL Unix socket (shouldn't be used with `host` or `port`).
- **`charset`** — The character set. See the character set concepts documentation for more information.

     Examples  
**PDO_MYSQL DSN examples**

The following example shows a PDO_MYSQL DSN for connecting to MySQL databases:

```text

mysql:host=localhost;dbname=testdb

       
```

More complete examples:

```text

mysql:host=localhost;port=3307;dbname=testdb
mysql:unix_socket=/tmp/mysql.sock;dbname=testdb

       
```

     Notes 
> Unix only:
>
> When the host name is set to `"localhost"`, then the connection to the server is made through a domain socket. If PDO_MYSQL is compiled against libmysqlclient then the location of the socket file is at libmysqlclient's compiled in location. If PDO_MYSQL is compiled against mysqlnd a default socket can be set through the pdo_mysql.default_socket setting.
