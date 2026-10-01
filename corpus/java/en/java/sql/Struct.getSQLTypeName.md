---
id: "java-en-function-struct-getsqltypename"
language: "java"
lang: "en"
category: "function"
name: "Struct.getSQLTypeName"
signature: "String getSQLTypeName() throws SQLException"
title: "Struct.getSQLTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Struct.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Struct.getSQLTypeName

```java
String getSQLTypeName() throws SQLException
```

Retrieves the SQL type name of the SQL structured type
 that this `Struct` object represents.

**返回**

- the fully-qualified type name of the SQL structured type for which this `Struct` object is the generic representation

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
