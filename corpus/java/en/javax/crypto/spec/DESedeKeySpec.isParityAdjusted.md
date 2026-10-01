---
id: "java-en-function-desedekeyspec-isparityadjusted"
language: "java"
lang: "en"
category: "function"
name: "DESedeKeySpec.isParityAdjusted"
signature: "public static boolean isParityAdjusted(byte[] key, int offset) throws InvalidKeyException"
title: "DESedeKeySpec.isParityAdjusted"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/DESedeKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DESedeKeySpec.isParityAdjusted

```java
public static boolean isParityAdjusted(byte[] key, int offset) throws InvalidKeyException
```

Checks if the given DES-EDE key, starting at offset
 inclusive, is parity-adjusted.

**参数**

- **key** — a byte array which holds the key value
- **offset** — the offset into the byte array

**返回**

- true if the given DES-EDE key is parity-adjusted, false otherwise

**异常**

- **InvalidKeyException** — if the given key material is null, or starting at offset inclusive, is shorter than 24 bytes.
- **ArrayIndexOutOfBoundsException** — if offset is negative.
