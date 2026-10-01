---
id: "java-en-function-parametermetadata-issigned"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.isSigned"
signature: "boolean isSigned(int param) throws SQLException"
title: "ParameterMetaData.isSigned"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.isSigned

```java
boolean isSigned(int param) throws SQLException
```

Retrieves whether values for the designated parameter can be signed numbers.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
