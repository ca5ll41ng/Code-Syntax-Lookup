---
id: "java-en-function-cipher-wrap"
language: "java"
lang: "en"
category: "function"
name: "Cipher.wrap"
signature: "public final byte[] wrap(Key key) throws IllegalBlockSizeException, InvalidKeyException"
title: "Cipher.wrap"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.wrap

```java
public final byte[] wrap(Key key) throws IllegalBlockSizeException, InvalidKeyException
```

Wrap a key.

**参数**

- **key** — the key to be wrapped

**返回**

- the wrapped key

**异常**

- **IllegalStateException** — if this `Cipher` object is in a wrong state (e.g., has not been initialized, or is not in `WRAP_MODE`)
- **IllegalBlockSizeException** — if this cipher is a block cipher, no padding has been requested, and the length of the encoding of the key to be wrapped is not a multiple of the block size
- **InvalidKeyException** — if it is impossible or unsafe to wrap the key with this cipher (e.g., a hardware protected key is being passed to a software-only cipher)
- **UnsupportedOperationException** — if the corresponding method in the `CipherSpi` is not supported
