---
id: "java-en-function-databasemetadata-supportsmixedcasequotedidentifiers"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsMixedCaseQuotedIdentifiers"
signature: "boolean supportsMixedCaseQuotedIdentifiers() throws SQLException"
title: "DatabaseMetaData.supportsMixedCaseQuotedIdentifiers"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsMixedCaseQuotedIdentifiers

```java
boolean supportsMixedCaseQuotedIdentifiers() throws SQLException
```

Retrieves whether this database treats mixed case quoted SQL identifiers as
 case sensitive and as a result stores them in mixed case.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
