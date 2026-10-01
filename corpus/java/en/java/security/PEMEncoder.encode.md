---
id: "java-en-function-pemencoder-encode"
language: "java"
lang: "en"
category: "function"
name: "PEMEncoder.encode"
signature: "public byte[] encode(BinaryEncodable be)"
title: "PEMEncoder.encode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMEncoder.encode

```java
public byte[] encode(BinaryEncodable be)
```

Encodes the specified `BinaryEncodable` and returns a PEM-encoded
 byte array.

**参数**

- **be** — the `BinaryEncodable` to encode

**返回**

- a PEM-encoded byte array

**异常**

- **IllegalArgumentException** — if `be` has no encoding, is an unsupported class, or cannot be used with encryption
- **NullPointerException** — if `be` is `null`
- **CryptoException** — if an error occurs during encryption

**参见**

- #withEncryption(char[])
