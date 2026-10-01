---
id: "java-en-function-filetime-compareto"
language: "java"
lang: "en"
category: "function"
name: "FileTime.compareTo"
signature: "public int compareTo(FileTime other)"
title: "FileTime.compareTo"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.compareTo

```java
public int compareTo(FileTime other)
```

Compares the value of two `FileTime` objects for order.

**参数**

- **other** — the other `FileTime` to be compared

**返回**

- `0` if this `FileTime` is equal to `other`, a value less than 0 if this `FileTime` represents a time that is before `other`, and a value greater than 0 if this `FileTime` represents a time that is after `other`
