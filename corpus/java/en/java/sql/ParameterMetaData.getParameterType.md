---
id: "java-en-function-parametermetadata-getparametertype"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getParameterType"
signature: "int getParameterType(int param) throws SQLException"
title: "ParameterMetaData.getParameterType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getParameterType

```java
int getParameterType(int param) throws SQLException
```

Retrieves the designated parameter's SQL type.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- SQL type from `java.sql.Types`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Types

> *Since 1.4*
