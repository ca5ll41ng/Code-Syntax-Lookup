---
id: "java-en-function-pemencoder-encodetostring"
language: "java"
lang: "en"
category: "function"
name: "PEMEncoder.encodeToString"
signature: "public String encodeToString(BinaryEncodable be)"
title: "PEMEncoder.encodeToString"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMEncoder.encodeToString

```java
public String encodeToString(BinaryEncodable be)
```

Encodes the specified `BinaryEncodable` and returns a PEM-encoded
 string.

**参数**

- **be** — the `BinaryEncodable` to encode

**返回**

- a `String` containing the PEM-encoded data

**异常**

- **IllegalArgumentException** — if `be` has no encoding, is an unsupported class, or cannot be used with encryption
- **NullPointerException** — if `be` is `null`
- **CryptoException** — if an error occurs during encryption

**参见**

- #withEncryption(char[])
