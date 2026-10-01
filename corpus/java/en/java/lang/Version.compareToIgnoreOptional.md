---
id: "java-en-function-version-comparetoignoreoptional"
language: "java"
lang: "en"
category: "function"
name: "Version.compareToIgnoreOptional"
signature: "public int compareToIgnoreOptional(Version obj)"
title: "Version.compareToIgnoreOptional"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.compareToIgnoreOptional

```java
public int compareToIgnoreOptional(Version obj)
```

Compares this version to another disregarding optional build
 information.

 

 Two versions are compared by examining the version string as
 described in `compareTo` with the exception that the
 optional build information is always ignored. 

 

 This method provides ordering which is consistent with
 `equalsIgnoreOptional()`.

**参数**

- **obj** — The object to be compared

**返回**

- A negative integer, zero, or a positive integer if this `Version` is less than, equal to, or greater than the given `Version`

**异常**

- **NullPointerException** — If the given object is `null`
