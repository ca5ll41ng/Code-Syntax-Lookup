---
id: "java-en-function-statement-iscloseoncompletion"
language: "java"
lang: "en"
category: "function"
name: "Statement.isCloseOnCompletion"
signature: "public boolean isCloseOnCompletion() throws SQLException"
title: "Statement.isCloseOnCompletion"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.isCloseOnCompletion

```java
public boolean isCloseOnCompletion() throws SQLException
```

Returns a value indicating whether this `Statement` will be
 closed when all its dependent result sets are closed.

**返回**

- `true` if the `Statement` will be closed when all of its dependent result sets are closed; `false` otherwise

**异常**

- **SQLException** — if this method is called on a closed `Statement`

> *Since 1.7*
