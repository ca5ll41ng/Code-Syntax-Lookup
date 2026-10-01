---
id: "java-en-function-sqlxml-free"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.free"
signature: "void free() throws SQLException"
title: "SQLXML.free"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.free

```java
void free() throws SQLException
```

Closes and releases the resources held by this `SQLXML` object.
 

 If the `SQLXML` object is already closed, then invoking this method
 has no effect.

**异常**

- **SQLException** — if there is an error freeing the XML value.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #close()

> *Since 1.6*
