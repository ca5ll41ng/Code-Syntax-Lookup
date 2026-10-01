---
id: "java-en-function-pathstatus-hashcode"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.hashCode"
signature: "public int hashCode()"
title: "PathStatus.hashCode"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.hashCode

```java
public int hashCode()
```

Computes a hash code for this abstract pathname.  Because equality of
 abstract pathnames is inherently system-dependent, so is the computation
 of their hash codes.  On UNIX systems, the hash code of an abstract
 pathname is equal to the exclusive or of the hash code
 of its pathname string and the decimal value
 `1234321`.  On Microsoft Windows systems, the hash
 code is equal to the exclusive or of the hash code of
 its pathname string converted to lower case and the decimal
 value `1234321`.  Locale is not taken into account on
 lowercasing the pathname string.

**返回**

- A hash code for this abstract pathname
