---
id: "java-en-function-javax-crypto-sealedobject"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.SealedObject"
title: "SealedObject"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SealedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SealedObject

This class enables a programmer to create an object and protect its
 confidentiality with a cryptographic algorithm.

 

 Given any `Serializable` object, one can create a
 `SealedObject` that encapsulates the original object, in serialized
 format (i.e., a "deep copy"), and seals (encrypts) its serialized contents,
 using a cryptographic algorithm such as AES, to protect its
 confidentiality.  The encrypted content can later be decrypted (with
 the corresponding algorithm using the correct decryption key) and
 de-serialized, yielding the original object.

 

 Note that the `Cipher` object must be fully initialized with
 the correct algorithm, key, padding scheme, etc., before being applied
 to a `SealedObject`.

 

 The original object that was sealed can be recovered in two different
 ways:

 

 
- by using the `getObject(javax.crypto.Cipher) getObject`
 method that takes a `Cipher` object.

 

 This method requires a fully initialized `Cipher` object,
 initialized with the
 exact same algorithm, key, padding scheme, etc., that were used to seal the
 object.

 

 This approach has the advantage that the party who unseals the
 sealed object does not require knowledge of the decryption key. For example,
 after one party has initialized the cipher object with the required
 decryption key, it could hand over the cipher object to
 another party who then unseals the sealed object.

 
- by using one of the
 `getObject(java.security.Key) getObject` methods
 that take a `Key` object.

 

 In this approach, the `getObject` method creates a cipher
 object for the appropriate decryption algorithm and initializes it with the
 given decryption key and the algorithm parameters (if any) that were stored
 in the sealed object.

 

 This approach has the advantage that the party who
 unseals the object does not need to keep track of the parameters (e.g., an
 IV) that were used to seal the object.

**参见**

- Cipher

> *Since 1.4*
