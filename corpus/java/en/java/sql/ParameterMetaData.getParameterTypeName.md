---
id: "java-en-function-parametermetadata-getparametertypename"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getParameterTypeName"
signature: "String getParameterTypeName(int param) throws SQLException"
title: "ParameterMetaData.getParameterTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getParameterTypeName

```java
String getParameterTypeName(int param) throws SQLException
```

Retrieves the designated parameter's database-specific type name.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- type the name used by the database. If the parameter type is a user-defined type, then a fully-qualified type name is returned.

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
