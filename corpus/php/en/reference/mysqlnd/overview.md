---
id: "en-php-guide-mysqlnd-overview"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.overview"
title: "Overview"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.overview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Overview

*What it is not*

Although MySQL Native Driver is written as a PHP extension, it is important to note that it does not provide a new API to the PHP programmer. The programmer APIs for MySQL database connectivity are provided by the MySQL extension, `mysqli` and PDO MYSQL. These extensions can now use the services of MySQL Native Driver to communicate with the MySQL Server. Therefore, you should not think of MySQL Native Driver as an API.

*Why use it?*

Using the MySQL Native Driver offers a number of advantages over using the MySQL Client Library.

The older MySQL Client Library was written by MySQL AB (now Oracle Corporation) and so was released under the MySQL license. This ultimately led to MySQL support being disabled by default in PHP. However, the MySQL Native Driver has been developed as part of the PHP project, and is therefore released under the PHP license. This removes licensing issues that have been problematic in the past.

Also, in the past, you needed to build the MySQL database extensions against a copy of the MySQL Client Library. This typically meant you needed to have MySQL installed on a machine where you were building the PHP source code. Also, when your PHP application was running, the MySQL database extensions would call down to the MySQL Client library file at run time, so the file needed to be installed on your system. With MySQL Native Driver that is no longer the case as it is included as part of the standard distribution. So you do not need MySQL installed in order to build PHP or run PHP database applications.

Because MySQL Native Driver is written as a PHP extension, it is tightly coupled to the workings of PHP. This leads to gains in efficiency, especially when it comes to memory usage, as the driver uses the PHP memory management system. It also supports the PHP memory limit. Using MySQL Native Driver leads to comparable or better performance than using MySQL Client Library, it always ensures the most efficient use of memory. One example of the memory efficiency is the fact that when using the MySQL Client Library, each row is stored in memory twice, whereas with the MySQL Native Driver each row is only stored once in memory.

> Reporting memory usage
>
> Because MySQL Native Driver uses the PHP memory management system, its memory usage can be tracked with `memory_get_usage()`. This is not possible with libmysqlclient because it uses the C function malloc() instead.

*Special features*

MySQL Native Driver also provides some special features not available when the MySQL database extensions use MySQL Client Library. These special features are listed below:

- Improved persistent connections
- The special function `mysqli_fetch_all()`
- Performance statistics calls: `mysqli_get_client_stats()`, `mysqli_get_connection_stats()`

The performance statistics facility can prove to be very useful in identifying performance bottlenecks.

MySQL Native Driver also allows for persistent connections when used with the `mysqli` extension.

*SSL Support*

MySQL Native Driver supports SSL.

*Compressed Protocol Support*

MySQL Native Driver supports the compressed client server protocol. Extension `ext/mysqli`, if configured to use MySQL Native Driver, can also take advantage of this feature. Note that `PDO_MYSQL` does *NOT* support compression when used together with mysqlnd.

*Named Pipes Support*

Named pipes can be used to connect on Windows environments.
