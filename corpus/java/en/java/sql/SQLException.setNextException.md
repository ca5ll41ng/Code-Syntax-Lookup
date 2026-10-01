---
id: "java-en-function-sqlexception-setnextexception"
language: "java"
lang: "en"
category: "function"
name: "SQLException.setNextException"
signature: "public void setNextException(SQLException ex)"
title: "SQLException.setNextException"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLException.setNextException

```java
public void setNextException(SQLException ex)
```

Adds an `SQLException` object to the end of the chain.

**参数**

- **ex** — the new exception that will be added to the end of the `SQLException` chain

**参见**

- #getNextException
