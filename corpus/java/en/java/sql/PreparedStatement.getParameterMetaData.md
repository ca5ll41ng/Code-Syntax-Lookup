---
id: "java-en-function-preparedstatement-getparametermetadata"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.getParameterMetaData"
signature: "ParameterMetaData getParameterMetaData() throws SQLException"
title: "PreparedStatement.getParameterMetaData"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.getParameterMetaData

```java
ParameterMetaData getParameterMetaData() throws SQLException
```

Retrieves the number, types and properties of this
 `PreparedStatement` object's parameters.

**返回**

- a `ParameterMetaData` object that contains information about the number, types and properties for each parameter marker of this `PreparedStatement` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `PreparedStatement`

**参见**

- ParameterMetaData

> *Since 1.4*
