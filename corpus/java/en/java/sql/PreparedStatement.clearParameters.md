---
id: "java-en-function-preparedstatement-clearparameters"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.clearParameters"
signature: "void clearParameters() throws SQLException"
title: "PreparedStatement.clearParameters"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.clearParameters

```java
void clearParameters() throws SQLException
```

Clears the current parameter values immediately.
 

In general, parameter values remain in force for repeated use of a
 statement. Setting a parameter value automatically clears its
 previous value.  However, in some cases it is useful to immediately
 release the resources used by the current parameter values; this can
 be done by calling the method `clearParameters`.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `PreparedStatement`
