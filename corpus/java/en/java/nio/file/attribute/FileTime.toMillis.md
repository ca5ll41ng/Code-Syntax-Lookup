---
id: "java-en-function-filetime-tomillis"
language: "java"
lang: "en"
category: "function"
name: "FileTime.toMillis"
signature: "public long toMillis()"
title: "FileTime.toMillis"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.toMillis

```java
public long toMillis()
```

Returns the value in milliseconds.

 

 Conversion from a coarser granularity that would numerically overflow
 saturate to `Long.MIN_VALUE` if negative or `Long.MAX_VALUE`
 if positive.

**返回**

- the value in milliseconds, since the epoch (1970-01-01T00:00:00Z)
