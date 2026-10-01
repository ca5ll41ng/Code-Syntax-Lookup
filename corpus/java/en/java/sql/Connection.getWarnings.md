---
id: "java-en-function-connection-getwarnings"
language: "java"
lang: "en"
category: "function"
name: "Connection.getWarnings"
signature: "SQLWarning getWarnings() throws SQLException"
title: "Connection.getWarnings"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getWarnings

```java
SQLWarning getWarnings() throws SQLException
```

Retrieves the first warning reported by calls on this
 `Connection` object.  If there is more than one
 warning, subsequent warnings will be chained to the first one
 and can be retrieved by calling the method
 `SQLWarning.getNextWarning` on the warning
 that was retrieved previously.
 

 This method may not be
 called on a closed connection; doing so will cause an
 `SQLException` to be thrown.

 

**Note:** Subsequent warnings will be chained to this
 SQLWarning.

**返回**

- the first `SQLWarning` object or `null` if there are none

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- SQLWarning
