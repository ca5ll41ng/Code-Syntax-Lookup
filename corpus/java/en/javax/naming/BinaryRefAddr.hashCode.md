---
id: "java-en-function-binaryrefaddr-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BinaryRefAddr.hashCode"
signature: "public int hashCode()"
title: "BinaryRefAddr.hashCode"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/BinaryRefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryRefAddr.hashCode

```java
public int hashCode()
```

Computes the hash code of this address using its address type and contents.
 Two BinaryRefAddrs have the same hash code if they have
 the same address type and the same contents.
 It is also possible for different BinaryRefAddrs to have
 the same hash code.

**返回**

- The hash code of this address as an int.
