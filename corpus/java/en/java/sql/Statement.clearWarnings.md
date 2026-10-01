---
id: "java-en-function-statement-clearwarnings"
language: "java"
lang: "en"
category: "function"
name: "Statement.clearWarnings"
signature: "void clearWarnings() throws SQLException"
title: "Statement.clearWarnings"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.clearWarnings

```java
void clearWarnings() throws SQLException
```

Clears all the warnings reported on this `Statement`
 object. After a call to this method,
 the method `getWarnings` will return
 `null` until a new warning is reported for this
 `Statement` object.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`
