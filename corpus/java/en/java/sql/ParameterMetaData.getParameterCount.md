---
id: "java-en-function-parametermetadata-getparametercount"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getParameterCount"
signature: "int getParameterCount() throws SQLException"
title: "ParameterMetaData.getParameterCount"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getParameterCount

```java
int getParameterCount() throws SQLException
```

Retrieves the number of parameters in the `PreparedStatement`
 object for which this `ParameterMetaData` object contains
 information.

**返回**

- the number of parameters

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
