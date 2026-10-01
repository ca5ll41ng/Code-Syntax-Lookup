---
id: "java-en-function-java-sql-sqlrecoverableexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLRecoverableException"
title: "SQLRecoverableException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLRecoverableException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLRecoverableException

The subclass of `SQLException` thrown in situations where a
 previously failed operation might be able to succeed if the application performs
  some recovery steps and retries the entire transaction or in the case of a
 distributed transaction, the transaction branch.  At a minimum,
 the recovery operation must include closing the current connection and getting
 a new connection.

> *Since 1.6*
