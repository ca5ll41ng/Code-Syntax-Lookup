---
id: "java-en-function-savepoint-getsavepointname"
language: "java"
lang: "en"
category: "function"
name: "Savepoint.getSavepointName"
signature: "String getSavepointName() throws SQLException"
title: "Savepoint.getSavepointName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Savepoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Savepoint.getSavepointName

```java
String getSavepointName() throws SQLException
```

Retrieves the name of the savepoint that this `Savepoint`
 object represents.

**返回**

- the name of this savepoint

**异常**

- **SQLException** — if this is an un-named savepoint

> *Since 1.4*
