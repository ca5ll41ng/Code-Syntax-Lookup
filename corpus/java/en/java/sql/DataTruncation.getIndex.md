---
id: "java-en-function-datatruncation-getindex"
language: "java"
lang: "en"
category: "function"
name: "DataTruncation.getIndex"
signature: "public int getIndex()"
title: "DataTruncation.getIndex"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DataTruncation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataTruncation.getIndex

```java
public int getIndex()
```

Retrieves the index of the column or parameter that was truncated.

 

This may be -1 if the column or parameter index is unknown, in
 which case the `parameter` and `read` fields should be ignored.

**返回**

- the index of the truncated parameter or column value
