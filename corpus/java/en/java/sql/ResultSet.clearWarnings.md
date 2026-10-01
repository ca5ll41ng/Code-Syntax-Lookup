---
id: "java-en-function-resultset-clearwarnings"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.clearWarnings"
signature: "void clearWarnings() throws SQLException"
title: "ResultSet.clearWarnings"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.clearWarnings

```java
void clearWarnings() throws SQLException
```

Clears all warnings reported on this `ResultSet` object.
 After this method is called, the method `getWarnings`
 returns `null` until a new warning is
 reported for this `ResultSet` object.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
