---
id: "java-en-function-rowid-getbytes"
language: "java"
lang: "en"
category: "function"
name: "RowId.getBytes"
signature: "byte[] getBytes()"
title: "RowId.getBytes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/RowId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowId.getBytes

```java
byte[] getBytes()
```

Returns an array of bytes representing the value of the SQL `ROWID`
 designated by this `java.sql.RowId` object.

**返回**

- an array of bytes, whose length is determined by the driver supplying the connection, representing the value of the ROWID designated by this java.sql.RowId object.
