---
id: "java-en-function-cipherspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineInit"
signature: "protected abstract void engineInit(int opmode, Key key, SecureRandom random) throws InvalidKeyException"
title: "CipherSpi.engineInit"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineInit

```java
protected abstract void engineInit(int opmode, Key key, SecureRandom random) throws InvalidKeyException
```

Initializes this `CipherSpi` object with a key and a source
 of randomness.

 

The `CipherSpi` object is initialized for one of the
 following four operations:
 encryption, decryption, key wrapping or key unwrapping, depending on
 the value of `opmode`.

 

If this cipher requires any algorithm parameters that cannot be
 derived from the given `key`, the underlying cipher
 implementation is supposed to generate the required parameters itself
 (using provider-specific default or random values) if it is being
 initialized for encryption or key wrapping, and raise an
 `InvalidKeyException` if it is being
 initialized for decryption or key unwrapping.
 The generated parameters can be retrieved using
 `engineGetParameters() engineGetParameters` or
 `engineGetIV() engineGetIV` (if the parameter is an IV).

 

If this cipher requires algorithm parameters that cannot be
 derived from the input parameters, and there are no reasonable
 provider-specific default values, initialization will
 necessarily fail.

 

If this cipher (including its feedback or padding scheme)
 requires any random bytes (e.g., for parameter generation), it will get
 them from `random`.

 

Note that when a `CipherSpi` object is initialized, it loses all
 previously-acquired state. In other words, initializing a
 `CipherSpi` object is equivalent to creating a new instance
 of that `CipherSpi` object and initializing it.

**参数**

- **opmode** — the operation mode of this `CipherSpi` object (this is one of the following: `ENCRYPT_MODE`, `DECRYPT_MODE`, `WRAP_MODE` or `UNWRAP_MODE`)
- **key** — the encryption key
- **random** — the source of randomness

**异常**

- **InvalidKeyException** — if the given key is inappropriate for initializing this cipher, or requires algorithm parameters that cannot be determined from the given key
- **UnsupportedOperationException** — if `opmode` is `WRAP_MODE` or `UNWRAP_MODE` is not implemented by the cipher
