---
id: "java-en-function-sealedobject-getobject"
language: "java"
lang: "en"
category: "function"
name: "SealedObject.getObject"
signature: "public final Object getObject(Key key) throws IOException, ClassNotFoundException, NoSuchAlgorithmException, InvalidKeyException"
title: "SealedObject.getObject"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SealedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SealedObject.getObject

```java
public final Object getObject(Key key) throws IOException, ClassNotFoundException, NoSuchAlgorithmException, InvalidKeyException
```

Retrieves the original (encapsulated) object.

 

This method creates a cipher for the algorithm that had been used in
 the sealing operation.
 If the default provider package provides an implementation of that
 algorithm, a `Cipher` object containing that
 implementation is used.
 If the algorithm is not available in the default package, other
 packages are searched.
 The `Cipher` object is initialized for decryption,
 using the given
 `key` and the parameters (if any) that had been used in the
 sealing operation.

 

The encapsulated object is unsealed and de-serialized, before it is
 returned.

**参数**

- **key** — the key used to unseal the object.

**返回**

- the original object.

**异常**

- **IOException** — if an error occurs during de-serialization.
- **ClassNotFoundException** — if an error occurs during de-serialization.
- **NoSuchAlgorithmException** — if the algorithm to unseal the object is not available.
- **InvalidKeyException** — if the given key cannot be used to unseal the object (e.g., it has the wrong algorithm).
- **NullPointerException** — if `key` is null.
