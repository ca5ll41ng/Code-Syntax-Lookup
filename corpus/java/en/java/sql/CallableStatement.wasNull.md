---
id: "java-en-function-callablestatement-wasnull"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.wasNull"
signature: "boolean wasNull() throws SQLException"
title: "CallableStatement.wasNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.wasNull

```java
boolean wasNull() throws SQLException
```

Retrieves whether the last OUT parameter read had the value of
 SQL `NULL`.  Note that this method should be called only after
 calling a getter method; otherwise, there is no value to use in
 determining whether it is `null` or not.

**返回**

- `true` if the last parameter read was SQL `NULL`; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `CallableStatement`
