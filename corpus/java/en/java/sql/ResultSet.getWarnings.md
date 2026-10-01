---
id: "java-en-function-resultset-getwarnings"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getWarnings"
signature: "SQLWarning getWarnings() throws SQLException"
title: "ResultSet.getWarnings"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getWarnings

```java
SQLWarning getWarnings() throws SQLException
```

Retrieves the first warning reported by calls on this
 `ResultSet` object.
 Subsequent warnings on this `ResultSet` object
 will be chained to the `SQLWarning` object that
 this method returns.

 

The warning chain is automatically cleared each time a new
 row is read.  This method may not be called on a `ResultSet`
 object that has been closed; doing so will cause an
 `SQLException` to be thrown.
 

 **Note:** This warning chain only covers warnings caused
 by `ResultSet` methods.  Any warning caused by
 `Statement` methods
 (such as reading OUT parameters) will be chained on the
 `Statement` object.

**返回**

- the first `SQLWarning` object reported or `null` if there are none

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
