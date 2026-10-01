---
id: "java-en-function-ref-getbasetypename"
language: "java"
lang: "en"
category: "function"
name: "Ref.getBaseTypeName"
signature: "String getBaseTypeName() throws SQLException"
title: "Ref.getBaseTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Ref.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ref.getBaseTypeName

```java
String getBaseTypeName() throws SQLException
```

Retrieves the fully-qualified SQL name of the SQL structured type that
 this `Ref` object references.

**返回**

- the fully-qualified SQL name of the referenced SQL structured type

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
