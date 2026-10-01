---
id: "java-en-function-parametermetadata-getparameterclassname"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getParameterClassName"
signature: "String getParameterClassName(int param) throws SQLException"
title: "ParameterMetaData.getParameterClassName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getParameterClassName

```java
String getParameterClassName(int param) throws SQLException
```

Retrieves the fully-qualified name of the Java class whose instances
 should be passed to the method `PreparedStatement.setObject`.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- the fully-qualified name of the class in the Java programming language that would be used by the method `PreparedStatement.setObject` to set the value in the specified parameter. This is the class name used for custom mapping.

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
