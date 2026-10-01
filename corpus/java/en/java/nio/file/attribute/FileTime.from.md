---
id: "java-en-function-filetime-from"
language: "java"
lang: "en"
category: "function"
name: "FileTime.from"
signature: "public static FileTime from(long value, TimeUnit unit)"
title: "FileTime.from"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.from

```java
public static FileTime from(long value, TimeUnit unit)
```

Returns a `FileTime` representing a value at the given unit of
 granularity.

**参数**

- **value** — the value since the epoch (1970-01-01T00:00:00Z); can be negative
- **unit** — the unit of granularity to interpret the value

**返回**

- a `FileTime` representing the given value
