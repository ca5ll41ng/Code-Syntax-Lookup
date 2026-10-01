---
id: "java-en-function-databasemetadata-supportsresultsettype"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsResultSetType"
signature: "boolean supportsResultSetType(int type) throws SQLException"
title: "DatabaseMetaData.supportsResultSetType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsResultSetType

```java
boolean supportsResultSetType(int type) throws SQLException
```

Retrieves whether this database supports the given result set type.

**参数**

- **type** — defined in `java.sql.ResultSet`

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Connection

> *Since 1.2*
