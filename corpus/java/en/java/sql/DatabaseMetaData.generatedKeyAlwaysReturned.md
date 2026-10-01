---
id: "java-en-function-databasemetadata-generatedkeyalwaysreturned"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.generatedKeyAlwaysReturned"
signature: "boolean generatedKeyAlwaysReturned() throws SQLException"
title: "DatabaseMetaData.generatedKeyAlwaysReturned"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.generatedKeyAlwaysReturned

```java
boolean generatedKeyAlwaysReturned() throws SQLException
```

Retrieves whether a generated key will always be returned if the column
 name(s) or index(es) specified for the auto generated key column(s)
 are valid and the statement succeeds.  The key that is returned may or
 may not be based on the column(s) for the auto generated key.
 Consult your JDBC driver documentation for additional details.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.7*
