---
id: "java-en-function-sqldata-getsqltypename"
language: "java"
lang: "en"
category: "function"
name: "SQLData.getSQLTypeName"
signature: "String getSQLTypeName() throws SQLException"
title: "SQLData.getSQLTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLData.getSQLTypeName

```java
String getSQLTypeName() throws SQLException
```

Returns the fully-qualified
 name of the SQL user-defined type that this object represents.
 This method is called by the JDBC driver to get the name of the
 UDT instance that is being mapped to this instance of
 `SQLData`.

**返回**

- the type name that was passed to the method `readSQL` when this object was constructed and populated

**异常**

- **SQLException** — if there is a database access error
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
