---
id: "java-en-function-statement-cancel"
language: "java"
lang: "en"
category: "function"
name: "Statement.cancel"
signature: "void cancel() throws SQLException"
title: "Statement.cancel"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.cancel

```java
void cancel() throws SQLException
```

Cancels this `Statement` object if both the DBMS and
 driver support aborting an SQL statement.
 This method can be used by one thread to cancel a statement that
 is being executed by another thread.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method
