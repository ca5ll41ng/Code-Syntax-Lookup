---
id: "en-php-guide-class-pdo-mysql"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-mysql"
title: "The Pdo\\Mysql class"
module: "pdo_mysql"
source_url: "https://www.php.net/manual/en/class.pdo-mysql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Mysql class

Pdo\Mysql

   Introduction  A `PDO` subclass representing a connection using the MySQL PDO driver.    This driver supports a dedicated SQL query parser for the MySQL dialect. It can handle the following: 
- Single and double-quoted literals with both doubling and backslash as escaping mechanisms
- Backtick literals with doubling as escaping mechanism
- Two-dashes, C-style comments, and Hash-comments.

      Class Synopsis    `Pdo\Mysql`   `extends` `PDO`      `public` `const` `int` `Pdo\Mysql::ATTR_USE_BUFFERED_QUERY`   `public` `const` `int` `Pdo\Mysql::ATTR_LOCAL_INFILE`   `public` `const` `int` `Pdo\Mysql::ATTR_LOCAL_INFILE_DIRECTORY`   `public` `const` `int` `Pdo\Mysql::ATTR_INIT_COMMAND`   `public` `const` `int` `Pdo\Mysql::ATTR_MAX_BUFFER_SIZE`   `public` `const` `int` `Pdo\Mysql::ATTR_READ_DEFAULT_FILE`   `public` `const` `int` `Pdo\Mysql::ATTR_READ_DEFAULT_GROUP`   `public` `const` `int` `Pdo\Mysql::ATTR_COMPRESS`   `public` `const` `int` `Pdo\Mysql::ATTR_DIRECT_QUERY`   `public` `const` `int` `Pdo\Mysql::ATTR_FOUND_ROWS`   `public` `const` `int` `Pdo\Mysql::ATTR_IGNORE_SPACE`   `public` `const` `int` `Pdo\Mysql::ATTR_MULTI_STATEMENTS`   `public` `const` `int` `Pdo\Mysql::ATTR_SERVER_PUBLIC_KEY`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_KEY`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_CERT`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_CA`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_CAPATH`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_CIPHER`   `public` `const` `int` `Pdo\Mysql::ATTR_SSL_VERIFY_SERVER_CERT`           Predefined Constants 
- **`Pdo\Mysql::ATTR_USE_BUFFERED_QUERY`** — By default all statements are executed in buffered mode. If this attribute is set to `false` on a `Pdo\Mysql` object, the MySQL driver will use the unbuffered mode.
  **Setting MySQL unbuffered mode**

  ```php

  <?php
  $pdo = new Pdo\Mysql("mysql:host=localhost;dbname=world", 'my_user', 'my_password');
  $pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);

  $unbufferedResult = $pdo->query("SELECT Name FROM City");
  foreach ($unbufferedResult as $row) {
      echo $row['Name'] . PHP_EOL;
  }
  ?>

         
  ```

- **`Pdo\Mysql::ATTR_LOCAL_INFILE`** — Enable `LOAD LOCAL INFILE`.
  > Can only be used in the `$driver_options` array when constructing a new database handle.

- **`Pdo\Mysql::ATTR_LOCAL_INFILE_DIRECTORY`** — Allows restricting LOCAL DATA loading to files located in this designated directory.

- **`Pdo\Mysql::ATTR_INIT_COMMAND`** — Command to execute when connecting to the MySQL server. Will automatically be re-executed when reconnecting.

- **`Pdo\Mysql::ATTR_READ_DEFAULT_FILE`** — Read options from the named option file instead of from `my.cnf`.
  > This option is not available if mysqlnd is used, because mysqlnd does not read the mysql configuration files.

- **`Pdo\Mysql::ATTR_READ_DEFAULT_GROUP`** — Read options from the named group from `my.cnf` or the file specified with `Pdo\Mysql::ATTR_READ_DEFAULT_FILE`.
  > This option is not available if mysqlnd is used, because mysqlnd does not read the mysql configuration files.

- **`Pdo\Mysql::ATTR_COMPRESS`** — Enable network communication compression.
- **`Pdo\Mysql::ATTR_DIRECT_QUERY`** —  `PDO::ATTR_EMULATE_PREPARES`.
- **`Pdo\Mysql::ATTR_FOUND_ROWS`** — Return the number of found (matched) rows, not the number of changed rows.

- **`Pdo\Mysql::ATTR_IGNORE_SPACE`** — Permit spaces after SQL function names. Makes all SQL functions names reserved words.

- **`Pdo\Mysql::ATTR_MAX_BUFFER_SIZE`** — Maximum buffer size. Defaults to 1 MiB.
  > This constant is not supported when compiled against mysqlnd.

- **`Pdo\Mysql::ATTR_MULTI_STATEMENTS`** — Disables multi query execution in both `PDO::prepare()` and `PDO::query()` when set to `false`.

- **`Pdo\Mysql::ATTR_SERVER_PUBLIC_KEY`** — RSA public key file used with the SHA-256 based authentication.

- **`Pdo\Mysql::ATTR_SSL_KEY`** — The file path to the SSL key.

- **`Pdo\Mysql::ATTR_SSL_CERT`** — The file path to the SSL certificate.

- **`Pdo\Mysql::ATTR_SSL_CA`** — The file path to the SSL certificate authority.

- **`Pdo\Mysql::ATTR_SSL_CAPATH`** — The file path to the directory that contains the trusted SSL CA certificates, which are stored in PEM format.

- **`Pdo\Mysql::ATTR_SSL_CIPHER`** — A list of one or more permissible ciphers to use for SSL encryption, in a format understood by OpenSSL. For example: `DHE-RSA-AES256-SHA:AES128-SHA`

- **`Pdo\Mysql::ATTR_SSL_VERIFY_SERVER_CERT`** — Provides a way to disable verification of the server SSL certificate.
  > This option is available only with mysqlnd.
