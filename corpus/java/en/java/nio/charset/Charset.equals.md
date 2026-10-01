---
id: "java-en-function-charset-equals"
language: "java"
lang: "en"
category: "function"
name: "Charset.equals"
signature: "public final boolean equals(Object ob)"
title: "Charset.equals"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.equals

```java
public final boolean equals(Object ob)
```

Tells whether or not this object is equal to another.

 

 Two charsets are equal if, and only if, they have the same canonical
 names.  A charset is never equal to any other type of object.

**返回**

- `true` if, and only if, this charset is equal to the given object
