---
id: "java-en-function-resultset-close"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.close"
signature: "void close() throws SQLException"
title: "ResultSet.close"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.close

```java
void close() throws SQLException
```

Releases this `ResultSet` object's database and
 JDBC resources immediately instead of waiting for
 this to happen when it is automatically closed.

 

The closing of a `ResultSet` object does **not** close the `Blob`,
 `Clob` or `NClob` objects created by the `ResultSet`. `Blob`,
 `Clob` or `NClob` objects remain valid for at least the duration of the
 transaction in which they are created, unless their `free` method is invoked.

 When a `ResultSet` is closed, any `ResultSetMetaData`
 instances that were created by calling the  `getMetaData`
 method remain accessible.

 

**Note:** A `ResultSet` object
 is automatically closed by the
 `Statement` object that generated it when
 that `Statement` object is closed,
 re-executed, or is used to retrieve the next result from a
 sequence of multiple results.

 Calling the method `close` on a `ResultSet`
 object that is already closed is a no-op.

**异常**

- **SQLException** — if a database access error occurs
