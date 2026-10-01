---
id: "java-en-function-parametermetadata-isnullable"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.isNullable"
signature: "int isNullable(int param) throws SQLException"
title: "ParameterMetaData.isNullable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.isNullable

```java
int isNullable(int param) throws SQLException
```

Retrieves whether null values are allowed in the designated parameter.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- the nullability status of the given parameter; one of `ParameterMetaData.parameterNoNulls`, `ParameterMetaData.parameterNullable`, or `ParameterMetaData.parameterNullableUnknown`

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
