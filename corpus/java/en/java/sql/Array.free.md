---
id: "java-en-function-array-free"
language: "java"
lang: "en"
category: "function"
name: "Array.free"
signature: "void free() throws SQLException"
title: "Array.free"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.free

```java
void free() throws SQLException
```

Closes and releases the resources held by this `Array` object.
 

 If the `Array` object is already closed, then invoking this method
 has no effect.

**异常**

- **SQLException** — if an error occurs releasing the Array's resources
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #close()

> *Since 1.6*
