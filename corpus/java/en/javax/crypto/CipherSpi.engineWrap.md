---
id: "java-en-function-cipherspi-enginewrap"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineWrap"
signature: "protected byte[] engineWrap(Key key) throws IllegalBlockSizeException, InvalidKeyException"
title: "CipherSpi.engineWrap"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineWrap

```java
protected byte[] engineWrap(Key key) throws IllegalBlockSizeException, InvalidKeyException
```

Wrap a key.

 

This concrete method has been added to this previously-defined
 abstract class. (For backwards compatibility, it cannot be abstract.)
 It may be overridden by a provider to wrap a key.
 Such an override is expected to throw an
 `IllegalBlockSizeException` or `InvalidKeyException`
 (under the specified circumstances), if the given key cannot be wrapped.
 If this method is not overridden, it always throws an
 `UnsupportedOperationException`.

**参数**

- **key** — the key to be wrapped

**返回**

- the wrapped key

**异常**

- **IllegalBlockSizeException** — if this cipher is a block cipher, no padding has been requested, and the length of the encoding of the key to be wrapped is not a multiple of the block size
- **InvalidKeyException** — if it is impossible or unsafe to wrap the key with this cipher (e.g., a hardware protected key is being passed to a software-only cipher)
- **UnsupportedOperationException** — if this method is not supported
