---
id: "java-en-function-parametermetadata-getscale"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getScale"
signature: "int getScale(int param) throws SQLException"
title: "ParameterMetaData.getScale"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getScale

```java
int getScale(int param) throws SQLException
```

Retrieves the designated parameter's number of digits to right of the decimal point.
 0 is returned for data types where the scale is not applicable.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- scale

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
