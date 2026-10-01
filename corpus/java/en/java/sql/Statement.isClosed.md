---
id: "java-en-function-statement-isclosed"
language: "java"
lang: "en"
category: "function"
name: "Statement.isClosed"
signature: "boolean isClosed() throws SQLException"
title: "Statement.isClosed"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.isClosed

```java
boolean isClosed() throws SQLException
```

Retrieves whether this `Statement` object has been closed. A `Statement` is closed if the
 method close has been called on it, or if it is automatically closed.

**返回**

- true if this `Statement` object is closed; false if it is still open

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
