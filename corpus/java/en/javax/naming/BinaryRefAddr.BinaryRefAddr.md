---
id: "java-en-function-binaryrefaddr-binaryrefaddr"
language: "java"
lang: "en"
category: "function"
name: "BinaryRefAddr.BinaryRefAddr"
signature: "public BinaryRefAddr(String addrType, byte[] src)"
title: "BinaryRefAddr.BinaryRefAddr"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/BinaryRefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryRefAddr.BinaryRefAddr

```java
public BinaryRefAddr(String addrType, byte[] src)
```

Constructs a new instance of BinaryRefAddr using its address type and a byte
 array for contents.

**参数**

- **addrType** — A non-null string describing the type of the address.
- **src** — The non-null contents of the address as a byte array. The contents of src is copied into the new BinaryRefAddr.
