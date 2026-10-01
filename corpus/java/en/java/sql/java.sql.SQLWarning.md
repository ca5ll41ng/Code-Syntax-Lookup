---
id: "java-en-function-java-sql-sqlwarning"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLWarning"
title: "SQLWarning"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLWarning.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLWarning

An exception that provides information on  database access
 warnings. Warnings are silently chained to the object whose method
 caused it to be reported.
 

 Warnings may be retrieved from `Connection`, `Statement`,
 and `ResultSet` objects.  Trying to retrieve a warning on a
 connection after it has been closed will cause an exception to be thrown.
 Similarly, trying to retrieve a warning on a statement after it has been
 closed or on a result set after it has been closed will cause
 an exception to be thrown. Note that closing a statement also
 closes a result set that it might have produced.

**参见**

- Connection#getWarnings
- Statement#getWarnings
- ResultSet#getWarnings

> *Since 1.1*
