---
id: "java-en-function-cryptopermission-tostring"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermission.toString"
signature: "public String toString()"
title: "CryptoPermission.toString"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermission.toString

```java
public String toString()
```

Returns a string describing this `CryptoPermission` object.
 The convention is to specify the class name, the algorithm name,
 the maximum allowable key size, and the name of the exemption mechanism,
 in the following
 format: '("ClassName" "algorithm" "keysize" "exemption_mechanism")'.

**返回**

- information about this `CryptoPermission` object.
