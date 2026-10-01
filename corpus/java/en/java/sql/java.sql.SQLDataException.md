---
id: "java-en-function-java-sql-sqldataexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLDataException"
title: "SQLDataException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLDataException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLDataException

The subclass of `SQLException` thrown when the SQLState class value
 is '22', or under vendor-specified conditions.  This indicates
 various data errors, including but not limited to data conversion errors,
 division by 0, and invalid arguments to functions.
 

 Please consult your driver vendor documentation for the vendor-specified
 conditions for which this `Exception` may be thrown.

> *Since 1.6*
