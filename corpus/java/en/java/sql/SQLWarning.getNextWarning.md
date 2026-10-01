---
id: "java-en-function-sqlwarning-getnextwarning"
language: "java"
lang: "en"
category: "function"
name: "SQLWarning.getNextWarning"
signature: "public SQLWarning getNextWarning()"
title: "SQLWarning.getNextWarning"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLWarning.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLWarning.getNextWarning

```java
public SQLWarning getNextWarning()
```

Retrieves the warning chained to this `SQLWarning` object by
 `setNextWarning`.

**返回**

- the next `SQLException` in the chain; `null` if none

**参见**

- #setNextWarning
