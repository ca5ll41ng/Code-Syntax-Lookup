---
id: "java-en-function-statement-getwarnings"
language: "java"
lang: "en"
category: "function"
name: "Statement.getWarnings"
signature: "SQLWarning getWarnings() throws SQLException"
title: "Statement.getWarnings"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getWarnings

```java
SQLWarning getWarnings() throws SQLException
```

Retrieves the first warning reported by calls on this `Statement` object.
 Subsequent `Statement` object warnings will be chained to this
 `SQLWarning` object.

 

The warning chain is automatically cleared each time
 a statement is (re)executed. This method may not be called on a closed
 `Statement` object; doing so will cause an `SQLException`
 to be thrown.

 

**Note:** If you are processing a `ResultSet` object, any
 warnings associated with reads on that `ResultSet` object
 will be chained on it rather than on the `Statement`
 object that produced it.

**返回**

- the first `SQLWarning` object or `null` if there are no warnings

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`
