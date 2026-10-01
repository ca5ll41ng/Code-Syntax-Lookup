---
id: "en-php-guide-book-uodbc"
language: "php"
lang: "en"
category: "guide"
name: "book.uodbc"
title: "ODBC (Unified)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/book.uodbc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ODBC (Unified)

ODBC

 {{{ preface 

 Introduction  In addition to normal ODBC support, the Unified ODBC functions in PHP allow you to access several databases that have borrowed the semantics of the ODBC API to implement their own API. Instead of maintaining multiple database drivers that were all nearly identical, these drivers have been unified into a single set of ODBC functions.    The following databases are supported by the Unified ODBC functions: [Adabas D](), [IBM DB2](), [iODBC](), [Solid](), and [Sybase SQL Anywhere]().   
> With the exception of iODBC, there is no ODBC involved when connecting to the above databases. The functions that you use to speak natively to them just happen to share the same names and syntax as the ODBC functions. However, building PHP with iODBC support enables you to use any ODBC-compliant drivers with your PHP applications. More information on iODBC, is available at [www.iodbc.org]() with the alternative unixODBC available at [www.unixodbc.org]().

 

 }}}
