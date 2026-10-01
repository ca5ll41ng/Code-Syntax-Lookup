---
id: "java-en-function-sqlexception-getnextexception"
language: "java"
lang: "en"
category: "function"
name: "SQLException.getNextException"
signature: "public SQLException getNextException()"
title: "SQLException.getNextException"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLException.getNextException

```java
public SQLException getNextException()
```

Retrieves the exception chained to this
 `SQLException` object by setNextException(SQLException ex).

**返回**

- the next `SQLException` object in the chain; `null` if there are none

**参见**

- #setNextException
