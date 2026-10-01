---
id: "java-en-function-blob-close"
language: "java"
lang: "en"
category: "function"
name: "Blob.close"
signature: "default void close() throws SQLException"
title: "Blob.close"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.close

```java
default void close() throws SQLException
```

Closes and releases the resources held by this `Blob` object.
 

 If the `Blob` object is already closed, then invoking this method
 has no effect.

**异常**

- **SQLException** — if an error occurs releasing the Blob's resources
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #free()

> *Since 26*
