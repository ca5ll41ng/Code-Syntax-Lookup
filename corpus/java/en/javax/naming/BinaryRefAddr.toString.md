---
id: "java-en-function-binaryrefaddr-tostring"
language: "java"
lang: "en"
category: "function"
name: "BinaryRefAddr.toString"
signature: "public String toString()"
title: "BinaryRefAddr.toString"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/BinaryRefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryRefAddr.toString

```java
public String toString()
```

Generates the string representation of this address.
 The string consists of the address's type and contents with labels.
 The first 32 bytes of contents are displayed (in hexadecimal).
 If there are more than 32 bytes, "..." is used to indicate more.
 This string is meant to used for debugging purposes and not
 meant to be interpreted programmatically.

**返回**

- The non-null string representation of this address.
