---
id: "java-en-function-rowset-clearparameters"
language: "java"
lang: "en"
category: "function"
name: "RowSet.clearParameters"
signature: "void clearParameters() throws SQLException"
title: "RowSet.clearParameters"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.clearParameters

```java
void clearParameters() throws SQLException
```

Clears the parameters set for this `RowSet` object's command.
 

In general, parameter values remain in force for repeated use of a
 `RowSet` object. Setting a parameter value automatically clears its
 previous value.  However, in some cases it is useful to immediately
 release the resources used by the current parameter values, which can
 be done by calling the method `clearParameters`.

**异常**

- **SQLException** — if a database access error occurs
