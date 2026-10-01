---
id: "java-en-function-java-sql-sqltransactionrollbackexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLTransactionRollbackException"
title: "SQLTransactionRollbackException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLTransactionRollbackException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLTransactionRollbackException

The subclass of `SQLException` thrown when the SQLState class value
 is '40', or under vendor-specified conditions. This indicates that the
 current statement was automatically rolled back by the database because
 of deadlock or other transaction serialization failures.
 

 Please consult your driver vendor documentation for the vendor-specified
 conditions for which this `Exception` may be thrown.

> *Since 1.6*
