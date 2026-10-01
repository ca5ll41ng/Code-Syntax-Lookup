---
id: "java-en-function-parametermetadata-getprecision"
language: "java"
lang: "en"
category: "function"
name: "ParameterMetaData.getPrecision"
signature: "int getPrecision(int param) throws SQLException"
title: "ParameterMetaData.getPrecision"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData.getPrecision

```java
int getPrecision(int param) throws SQLException
```

Retrieves the designated parameter's specified column size.

 

The returned value represents the maximum column size for the given parameter.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. 0 is returned for data types where the
 column size is not applicable.

**参数**

- **param** — the first parameter is 1, the second is 2, ...

**返回**

- precision

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
