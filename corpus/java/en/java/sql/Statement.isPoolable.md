---
id: "java-en-function-statement-ispoolable"
language: "java"
lang: "en"
category: "function"
name: "Statement.isPoolable"
signature: "boolean isPoolable() throws SQLException"
title: "Statement.isPoolable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.isPoolable

```java
boolean isPoolable() throws SQLException
```

Returns a  value indicating whether the `Statement`
 is poolable or not.

**返回**

- `true` if the `Statement` is poolable; `false` otherwise

**异常**

- **SQLException** — if this method is called on a closed `Statement`

**参见**

- java.sql.Statement#setPoolable(boolean) setPoolable(boolean)

> *Since 1.6*
