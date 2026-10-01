---
id: "java-en-function-filetime-to"
language: "java"
lang: "en"
category: "function"
name: "FileTime.to"
signature: "public long to(TimeUnit unit)"
title: "FileTime.to"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.to

```java
public long to(TimeUnit unit)
```

Returns the value at the given unit of granularity.

 

 Conversion from a coarser granularity that would numerically overflow
 saturate to `Long.MIN_VALUE` if negative or `Long.MAX_VALUE`
 if positive.

**参数**

- **unit** — the unit of granularity for the return value

**返回**

- value in the given unit of granularity, since the epoch since the epoch (1970-01-01T00:00:00Z); can be negative
