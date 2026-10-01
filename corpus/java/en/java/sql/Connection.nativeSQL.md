---
id: "java-en-function-connection-nativesql"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0]}
name: "Connection.nativeSQL"
signature: "String nativeSQL(String sql) throws SQLException"
title: "Connection.nativeSQL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.nativeSQL

```java
String nativeSQL(String sql) throws SQLException
```

Converts the given SQL statement into the system's native SQL grammar.
 A driver may convert the JDBC SQL grammar into its system's
 native SQL grammar prior to sending it. This method returns the
 native form of the statement that the driver would have sent.

**参数**

- **sql** — an SQL statement that may contain one or more '?' parameter placeholders

**返回**

- the native form of this statement

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
