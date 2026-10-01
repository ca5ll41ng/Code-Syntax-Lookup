---
id: "java-en-function-deskeyspec-isparityadjusted"
language: "java"
lang: "en"
category: "function"
name: "DESKeySpec.isParityAdjusted"
signature: "public static boolean isParityAdjusted(byte[] key, int offset) throws InvalidKeyException"
title: "DESKeySpec.isParityAdjusted"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/DESKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DESKeySpec.isParityAdjusted

```java
public static boolean isParityAdjusted(byte[] key, int offset) throws InvalidKeyException
```

Checks if the given DES key material, starting at offset
 inclusive, is parity-adjusted.

**参数**

- **key** — the buffer with the DES key material.
- **offset** — the offset in key, where the DES key material starts.

**返回**

- true if the given DES key material is parity-adjusted, false otherwise.

**异常**

- **InvalidKeyException** — if the given key material is null, or starting at offset inclusive, is shorter than 8 bytes.
- **ArrayIndexOutOfBoundsException** — if offset is negative.
