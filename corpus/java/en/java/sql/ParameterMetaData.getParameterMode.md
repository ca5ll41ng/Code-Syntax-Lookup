---
id: "java-en-function-parametermetadata-getparametermode"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getParameterMode"
signature: "int getParameterMode(int param) throws SQLException"
title: "ParameterMetaData.getParameterMode"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getParameterMode

```java
int getParameterMode(int param) throws SQLException
```

Retrieves the designated parameter's mode.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- mode of the parameter; one of `ParameterMetaData.parameterModeIn`, `ParameterMetaData.parameterModeOut`, or `ParameterMetaData.parameterModeInOut` `ParameterMetaData.parameterModeUnknown`.

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
