---
id: "en-php-guide-ref-pgsql"
language: "php"
lang: "en"
category: "guide"
name: "ref.pgsql"
title: "PostgreSQL "
module: "pgsql"
source_url: "https://www.php.net/manual/en/ref.pgsql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PostgreSQL 

Notes 
> Not all functions are supported by all builds. It depends on your libpq (The PostgreSQL C client library) version and how libpq is compiled. If PHP PostgreSQL extensions are missing, then it is because your libpq version does not support them.

 
> Most PostgreSQL functions accept `$connection` as the optional first parameter. If it is not provided, the last opened connection is used. If it doesn't exist, functions return `false`.

 
> PostgreSQL automatically folds all identifiers (e.g. table/column names) to lower-case values at object creation time and at query time. To force the use of mixed or upper case identifiers, you must escape the identifier using double quotes ("").

 
> PostgreSQL does not have special commands for fetching database schema information (eg. all the tables in the current database). Instead, there is a standard schema named `information_schema` containing system views with all the necessary information, in an easily queryable form. See the [PostgreSQL Documentation]() for full details.
