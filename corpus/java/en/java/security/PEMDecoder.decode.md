---
id: "java-en-function-pemdecoder-decode"
language: "java"
lang: "en"
category: "function"
name: "PEMDecoder.decode"
signature: "public BinaryEncodable decode(String str)"
title: "PEMDecoder.decode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMDecoder.decode

```java
public BinaryEncodable decode(String str)
```

Decodes and returns a `BinaryEncodable` from the given `String`.

 

 This method reads the `String` until PEM data is found
 or the end of the `String` is reached. If no PEM data is found,
 an `IllegalArgumentException` is thrown.

 

 A `BinaryEncodable` is returned that best represents the
 decoded content. If the PEM type is not supported, a `PEM` object is
 returned containing the type identifier, Base64-encoded data, and any
 leading data preceding the PEM header. For `BinaryEncodable` types
 other than `PEM`, leading data is ignored.

 

 The input is interpreted as
 `UTF_8 UTF-8`.

**参数**

- **str** — a `String` containing PEM data

**返回**

- a `BinaryEncodable`

**异常**

- **IllegalArgumentException** — if decoding fails or no PEM data is found
- **NullPointerException** — if `str` is `null`
- **CryptoException** — if an error occurs during decryption
