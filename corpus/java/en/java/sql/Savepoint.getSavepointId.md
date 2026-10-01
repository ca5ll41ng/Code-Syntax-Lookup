---
id: "java-en-function-savepoint-getsavepointid"
language: "java"
lang: "en"
category: "function"
name: "Savepoint.getSavepointId"
signature: "int getSavepointId() throws SQLException"
title: "Savepoint.getSavepointId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Savepoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Savepoint.getSavepointId

```java
int getSavepointId() throws SQLException
```

Retrieves the generated ID for the savepoint that this
 `Savepoint` object represents.

**返回**

- the numeric ID of this savepoint

**异常**

- **SQLException** — if this is a named savepoint

> *Since 1.4*
