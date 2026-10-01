---
id: "java-en-function-sealedobject-sealedobject"
language: "java"
lang: "en"
category: "function"
name: "SealedObject.SealedObject"
signature: "public SealedObject(Serializable object, Cipher c) throws IOException, IllegalBlockSizeException"
title: "SealedObject.SealedObject"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SealedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SealedObject.SealedObject

```java
public SealedObject(Serializable object, Cipher c) throws IOException, IllegalBlockSizeException
```

Constructs a `SealedObject` from any `Serializable` object.

 

The given object is serialized, and its serialized contents are
 encrypted using the given `Cipher` object, which must be fully
 initialized.

 

Any algorithm parameters that may be used in the encryption
 operation are stored inside the new `SealedObject`.

**参数**

- **object** — the object to be sealed; can be `null`.
- **c** — the cipher used to seal the object.

**异常**

- **NullPointerException** — if the given cipher is `null`.
- **IOException** — if an error occurs during serialization
- **IllegalBlockSizeException** — if the given cipher is a block cipher, no padding has been requested, and the total input length (i.e., the length of the serialized object contents) is not a multiple of the cipher's block size
