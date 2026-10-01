---
id: "java-en-function-resultset-cancelrowupdates"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.cancelRowUpdates"
signature: "void cancelRowUpdates() throws SQLException"
title: "ResultSet.cancelRowUpdates"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.cancelRowUpdates

```java
void cancelRowUpdates() throws SQLException
```

Cancels the updates made to the current row in this
 `ResultSet` object.
 This method may be called after calling an
 updater method(s) and before calling
 the method `updateRow` to roll back
 the updates made to a row.  If no updates have been made or
 `updateRow` has already been called, this method has no
 effect.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set; the result set concurrency is `CONCUR_READ_ONLY` or if this method is called when the cursor is on the insert row
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
