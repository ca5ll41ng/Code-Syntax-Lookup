---
id: "java-en-function-java-sql-sqlnontransientconnectionexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLNonTransientConnectionException"
title: "SQLNonTransientConnectionException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLNonTransientConnectionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLNonTransientConnectionException

The subclass of `SQLException` thrown for the SQLState
 class value '08', or under vendor-specified conditions.  This
 indicates that the connection operation that failed will not succeed if
 the operation is retried without the cause of the failure being corrected.
 

 Please consult your driver vendor documentation for the vendor-specified
 conditions for which this `Exception` may be thrown.

> *Since 1.6*
