---
id: "java-en-function-resultset-isclosed"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.isClosed"
signature: "boolean isClosed() throws SQLException"
title: "ResultSet.isClosed"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.isClosed

```java
boolean isClosed() throws SQLException
```

Retrieves whether this `ResultSet` object has been closed. A `ResultSet` is closed if the
 method close has been called on it, or if it is automatically closed.

**返回**

- true if this `ResultSet` object is closed; false if it is still open

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
