---
id: "java-en-function-datatruncation-getdatasize"
language: "java"
lang: "en"
category: "function"
name: "DataTruncation.getDataSize"
signature: "public int getDataSize()"
title: "DataTruncation.getDataSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DataTruncation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataTruncation.getDataSize

```java
public int getDataSize()
```

Gets the number of bytes of data that should have been transferred.
 This number may be approximate if data conversions were being
 performed.  The value may be `-1` if the size is unknown.

**返回**

- the number of bytes of data that should have been transferred
