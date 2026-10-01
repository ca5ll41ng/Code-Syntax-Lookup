---
id: "java-en-function-resultset-refreshrow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.refreshRow"
signature: "void refreshRow() throws SQLException"
title: "ResultSet.refreshRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.refreshRow

```java
void refreshRow() throws SQLException
```

Refreshes the current row with its most recent value in
 the database.  This method cannot be called when
 the cursor is on the insert row.

 

The `refreshRow` method provides a way for an
 application to
 explicitly tell the JDBC driver to refetch a row(s) from the
 database.  An application may want to call `refreshRow` when
 caching or prefetching is being done by the JDBC driver to
 fetch the latest value of a row from the database.  The JDBC driver
 may actually refresh multiple rows at once if the fetch size is
 greater than one.

 

 All values are refetched subject to the transaction isolation
 level and cursor sensitivity.  If `refreshRow` is called after
 calling an updater method, but before calling
 the method `updateRow`, then the
 updates made to the row are lost.  Calling the method
 `refreshRow` frequently will likely slow performance.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set; the result set type is `TYPE_FORWARD_ONLY` or if this method is called when the cursor is on the insert row
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method or this method is not supported for the specified result set type and result set concurrency.

> *Since 1.2*
