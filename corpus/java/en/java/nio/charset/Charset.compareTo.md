---
id: "java-en-function-charset-compareto"
language: "java"
lang: "en"
category: "function"
name: "Charset.compareTo"
signature: "public final int compareTo(Charset that)"
title: "Charset.compareTo"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.compareTo

```java
public final int compareTo(Charset that)
```

Compares this charset to another.

 

 Charsets are ordered by their canonical names, without regard to
 case.

**参数**

- **that** — The charset to which this charset is to be compared

**返回**

- A negative integer, zero, or a positive integer as this charset is less than, equal to, or greater than the specified charset
