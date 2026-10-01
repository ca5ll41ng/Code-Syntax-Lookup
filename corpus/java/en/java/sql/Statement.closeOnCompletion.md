---
id: "java-en-function-statement-closeoncompletion"
language: "java"
lang: "en"
category: "function"
name: "Statement.closeOnCompletion"
signature: "public void closeOnCompletion() throws SQLException"
title: "Statement.closeOnCompletion"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.closeOnCompletion

```java
public void closeOnCompletion() throws SQLException
```

Specifies that this `Statement` will be closed when all its
 dependent result sets are closed. If execution of the `Statement`
 does not produce any result sets, this method has no effect.
 

 **Note:** Multiple calls to `closeOnCompletion` do
 not toggle the effect on this `Statement`. However, a call to
 `closeOnCompletion` does effect both the subsequent execution of
 statements, and statements that currently have open, dependent,
 result sets.

**异常**

- **SQLException** — if this method is called on a closed `Statement`

> *Since 1.7*
