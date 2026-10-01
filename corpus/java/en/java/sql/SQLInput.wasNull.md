---
id: "java-en-function-sqlinput-wasnull"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.wasNull"
signature: "boolean wasNull() throws SQLException"
title: "SQLInput.wasNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.wasNull

```java
boolean wasNull() throws SQLException
```

Retrieves whether the last value read was SQL `NULL`.

**返回**

- `true` if the most recently read SQL value was SQL `NULL`; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
