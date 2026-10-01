---
id: "java-en-function-messagedigest-getalgorithm"
language: "java"
lang: "en"
category: "function"
name: "MessageDigest.getAlgorithm"
signature: "public final String getAlgorithm()"
title: "MessageDigest.getAlgorithm"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigest.getAlgorithm

```java
public final String getAlgorithm()
```

Returns a string that identifies the algorithm, independent of
 implementation details. The name should be a standard
 Java Security name (such as "SHA-256").
 See the MessageDigest section in the 
 Java Security Standard Algorithm Names Specification
 for information about standard algorithm names.

**返回**

- the name of the algorithm
