---
id: "java-en-function-java-security-keyfactory"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyFactory"
title: "KeyFactory"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactory

Key factories are used to convert keys (opaque
 cryptographic keys of type `Key`) into key specifications
 (transparent representations of the underlying key material), and vice
 versa.

 

 Key factories are bidirectional. That is, they allow you to build an
 opaque key object from a given key specification (key material), or to
 retrieve the underlying key material of a key object in a suitable format.

 

 Multiple compatible key specifications may exist for the same key.
 For example, a DSA public key may be specified using
 `DSAPublicKeySpec` or
 `X509EncodedKeySpec`. A key factory can be used to translate
 between compatible key specifications.

 

 The following is an example of how to use a key factory in order to
 instantiate a DSA public key from its encoding.
 Assume Alice has received a digital signature from Bob.
 Bob also sent her his public key (in encoded format) to verify
 his signature. Alice then performs the following actions:

 
```

 X509EncodedKeySpec bobPubKeySpec = new X509EncodedKeySpec(bobEncodedPubKey);
 KeyFactory keyFactory = KeyFactory.getInstance("DSA");
 PublicKey bobPubKey = keyFactory.generatePublic(bobPubKeySpec);
 Signature sig = Signature.getInstance("DSA");
 sig.initVerify(bobPubKey);
 sig.update(data);
 sig.verify(signature);
 
```

 

 Every implementation of the Java platform is required to support the
 following standard `KeyFactory` algorithms:
 
 
- `DiffieHellman`
 
- `DSA`
 
- `EC`
 
- `RSA`
 
- `RSASSA-PSS`
 
- `X25519`
 

 These algorithms are described in the 
 KeyFactory section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- Key
- PublicKey
- PrivateKey
- java.security.spec.KeySpec
- java.security.spec.DSAPublicKeySpec
- java.security.spec.X509EncodedKeySpec

> *Since 1.2*
