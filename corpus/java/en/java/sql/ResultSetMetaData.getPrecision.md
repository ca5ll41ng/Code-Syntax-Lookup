---
id: "java-en-function-resultsetmetadata-getprecision"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getPrecision"
signature: "int getPrecision(int column) throws SQLException"
title: "ResultSetMetaData.getPrecision"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getPrecision

```java
int getPrecision(int column) throws SQLException
```

Get the designated column's specified column size.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. 0 is returned for data types where the
 column size is not applicable.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- precision

**异常**

- **SQLException** — if a database access error occurs
