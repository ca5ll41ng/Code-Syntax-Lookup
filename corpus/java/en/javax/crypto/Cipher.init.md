---
id: "java-en-function-cipher-init"
language: "java"
lang: "en"
category: "function"
name: "Cipher.init"
signature: "public final void init(int opmode, Key key) throws InvalidKeyException"
title: "Cipher.init"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.init

```java
public final void init(int opmode, Key key) throws InvalidKeyException
```

Initializes this `Cipher` object with a key.

 

The `Cipher` object is initialized for one of the following four
 operations:
 encryption, decryption, key wrapping or key unwrapping, depending
 on the value of `opmode`.

 

If this cipher requires any algorithm parameters that cannot be
 derived from the given `key`, the underlying cipher
 implementation is supposed to generate the required parameters itself
 (using provider-specific default or random values) if it is being
 initialized for encryption or key wrapping, and raise an
 `InvalidKeyException` if it is being
 initialized for decryption or key unwrapping.
 The generated parameters can be retrieved using
 `getParameters() getParameters` or
 `getIV() getIV` (if the parameter is an IV).

 

If this cipher requires algorithm parameters that cannot be
 derived from the input parameters, and there are no reasonable
 provider-specific default values, initialization will
 necessarily fail.

 

If this cipher (including its feedback or padding scheme)
 requires any random bytes (e.g., for parameter generation), it will get
 them using the `java.security.SecureRandom`
 implementation of the highest-priority
 installed provider as the source of randomness.
 (If none of the installed providers supply an implementation of
 SecureRandom, a system-provided source of randomness will be used.)

 

Note that when a `Cipher` object is initialized, it loses all
 previously-acquired state. In other words, initializing a `Cipher`
 object is equivalent to creating a new instance of that `Cipher`
 object and initializing it.

**参数**

- **opmode** — the operation mode of this `Cipher` object (this is one of the following: `ENCRYPT_MODE`, `DECRYPT_MODE`, `WRAP_MODE` or `UNWRAP_MODE`)
- **key** — the key

**异常**

- **InvalidKeyException** — if the given key is inappropriate for initializing this cipher, or requires algorithm parameters that cannot be determined from the given key, or if the given key has a keysize that exceeds the maximum allowable keysize (as determined from the configured jurisdiction policy files)
- **UnsupportedOperationException** — if `opmode` is `WRAP_MODE` or `UNWRAP_MODE` but the mode is not implemented by the underlying `CipherSpi`
- **InvalidParameterException** — if `opmode` is not one of the recognized values
