---
id: "java-en-function-clob-free"
language: "java"
lang: "en"
category: "function"
name: "Clob.free"
signature: "void free() throws SQLException"
title: "Clob.free"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.free

```java
void free() throws SQLException
```

Closes and releases the resources held by this `Clob` object.
 

 If the `Clob` object is already closed, then invoking this method
 has no effect.

**异常**

- **SQLException** — if an error occurs releasing the Clob's resources
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #close()

> *Since 1.6*
