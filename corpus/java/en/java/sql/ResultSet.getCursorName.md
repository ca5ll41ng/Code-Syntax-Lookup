---
id: "java-en-function-resultset-getcursorname"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getCursorName"
signature: "String getCursorName() throws SQLException"
title: "ResultSet.getCursorName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getCursorName

```java
String getCursorName() throws SQLException
```

Retrieves the name of the SQL cursor used by this `ResultSet`
 object.

 

In SQL, a result table is retrieved through a cursor that is
 named. The current row of a result set can be updated or deleted
 using a positioned update/delete statement that references the
 cursor name. To insure that the cursor has the proper isolation
 level to support update, the cursor's `SELECT` statement
 should be of the form `SELECT FOR UPDATE`. If
 `FOR UPDATE` is omitted, the positioned updates may fail.

 

The JDBC API supports this SQL feature by providing the name of the
 SQL cursor used by a `ResultSet` object.
 The current row of a `ResultSet` object
 is also the current row of this SQL cursor.

**返回**

- the SQL name for this `ResultSet` object's cursor

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method
