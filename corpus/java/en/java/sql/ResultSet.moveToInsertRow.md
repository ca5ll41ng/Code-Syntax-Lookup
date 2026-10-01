---
id: "java-en-function-resultset-movetoinsertrow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.moveToInsertRow"
signature: "void moveToInsertRow() throws SQLException"
title: "ResultSet.moveToInsertRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.moveToInsertRow

```java
void moveToInsertRow() throws SQLException
```

Moves the cursor to the insert row.  The current cursor position is
 remembered while the cursor is positioned on the insert row.

 The insert row is a special row associated with an updatable
 result set.  It is essentially a buffer where a new row may
 be constructed by calling the updater methods prior to
 inserting the row into the result set.

 Only the updater, getter,
 and `insertRow` methods may be
 called when the cursor is on the insert row.  All of the columns in
 a result set must be given a value each time this method is
 called before calling `insertRow`.
 An updater method must be called before a
 getter method can be called on a column value.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set concurrency is `CONCUR_READ_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
