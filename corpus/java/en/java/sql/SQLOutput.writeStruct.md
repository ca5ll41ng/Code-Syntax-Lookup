---
id: "java-en-function-sqloutput-writestruct"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeStruct"
signature: "void writeStruct(Struct x) throws SQLException"
title: "SQLOutput.writeStruct"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeStruct

```java
void writeStruct(Struct x) throws SQLException
```

Writes an SQL structured type value to the stream.

**参数**

- **x** — a `Struct` object representing data of an SQL structured type

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
