---
id: "java-en-function-array-getbasetype"
language: "java"
lang: "en"
category: "function"
name: "Array.getBaseType"
signature: "int getBaseType() throws SQLException"
title: "Array.getBaseType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getBaseType

```java
int getBaseType() throws SQLException
```

Retrieves the JDBC type of the elements in the array designated
 by this `Array` object.

**返回**

- a constant from the class `java.sql.Types` that is the type code for the elements in the array designated by this `Array` object

**异常**

- **SQLException** — if an error occurs while attempting to access the base type
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
