---
id: "java-en-function-java-sql-sqltransientconnectionexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLTransientConnectionException"
title: "SQLTransientConnectionException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLTransientConnectionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLTransientConnectionException

The subclass of `SQLException` for the SQLState class
 value '08', or under vendor-specified conditions.  This indicates
 that the connection operation that failed might be able to succeed if
 the operation is retried without any application-level changes.
 

 Please consult your driver vendor documentation for the vendor-specified
 conditions for which this `Exception` may be thrown.

> *Since 1.6*
