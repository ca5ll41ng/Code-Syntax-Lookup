---
id: "java-en-function-connection-getmetadata"
language: "java"
lang: "en"
category: "function"
name: "Connection.getMetaData"
signature: "DatabaseMetaData getMetaData() throws SQLException"
title: "Connection.getMetaData"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getMetaData

```java
DatabaseMetaData getMetaData() throws SQLException
```

Retrieves a `DatabaseMetaData` object that contains
 metadata about the database to which this
 `Connection` object represents a connection.
 The metadata includes information about the database's
 tables, its supported SQL grammar, its stored
 procedures, the capabilities of this connection, and so on.

**返回**

- a `DatabaseMetaData` object for this `Connection` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
