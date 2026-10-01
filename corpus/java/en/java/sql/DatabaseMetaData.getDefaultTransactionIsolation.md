---
id: "java-en-function-databasemetadata-getdefaulttransactionisolation"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getDefaultTransactionIsolation"
signature: "int getDefaultTransactionIsolation() throws SQLException"
title: "DatabaseMetaData.getDefaultTransactionIsolation"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getDefaultTransactionIsolation

```java
int getDefaultTransactionIsolation() throws SQLException
```

Retrieves this database's default transaction isolation level.  The
 possible values are defined in `java.sql.Connection`.

**返回**

- the default isolation level

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Connection
