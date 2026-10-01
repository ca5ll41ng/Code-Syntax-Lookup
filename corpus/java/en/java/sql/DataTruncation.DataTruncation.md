---
id: "java-en-function-datatruncation-datatruncation"
language: "java"
lang: "en"
category: "function"
name: "DataTruncation.DataTruncation"
signature: "public DataTruncation(int index, boolean parameter, boolean read, int dataSize, int transferSize)"
title: "DataTruncation.DataTruncation"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DataTruncation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataTruncation.DataTruncation

```java
public DataTruncation(int index, boolean parameter, boolean read, int dataSize, int transferSize)
```

Creates a `DataTruncation` object
 with the SQLState initialized
 to 01004 when `read` is set to `true` and 22001
 when `read` is set to `false`,
 the reason set to "Data truncation", the
 vendor code set to 0, and
 the other fields set to the given values.
 The `cause` is not initialized, and may subsequently be
 initialized by a call to the
 `initCause` method.

**参数**

- **index** — The index of the parameter or column value
- **parameter** — true if a parameter value was truncated
- **read** — true if a read was truncated
- **dataSize** — the original size of the data
- **transferSize** — the size after truncation
