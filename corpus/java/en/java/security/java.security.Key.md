---
id: "java-en-function-java-security-key"
language: "java"
lang: "en"
category: "function"
name: "java.security.Key"
title: "Key"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Key.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Key

The `Key` interface is the top-level interface for all keys. It
 defines the functionality shared by all `Key` objects. All keys
 have three characteristics:

 

 
- An Algorithm

 

This is the key algorithm for that key. The key algorithm is usually
 an encryption or asymmetric operation algorithm (such as DSA or
 RSA), which will work with those algorithms and with related
 algorithms (such as MD5 with RSA, SHA-1 with RSA, Raw DSA, etc.)
 The name of the algorithm of a key is obtained using the
 `getAlgorithm() getAlgorithm` method.

 
- An Encoded Form

 

This is an external encoded form for the key used when a standard
 representation of the key is needed outside the Java Virtual Machine,
 as when transmitting the key to some other party. The key
 is encoded according to a standard format (such as
 X.509 `SubjectPublicKeyInfo` or PKCS#8), and
 is returned using the `getEncoded() getEncoded` method.
 Note: The syntax of the ASN.1 type `SubjectPublicKeyInfo`
 is defined as follows:

 
```

 SubjectPublicKeyInfo ::= SEQUENCE {
   algorithm AlgorithmIdentifier,
   subjectPublicKey BIT STRING }

 AlgorithmIdentifier ::= SEQUENCE {
   algorithm OBJECT IDENTIFIER,
   parameters ANY DEFINED BY algorithm OPTIONAL }
 
```

 For more information, see
 RFC 5280:
 Internet X.509 Public Key Infrastructure Certificate and CRL Profile.

 
- A Format

 

This is the name of the format of the encoded key. It is returned
 by the `getFormat() getFormat` method.

 

 Keys are generally obtained through key generators, certificates,
 key stores or other classes used to manage keys.
 Keys may also be obtained from key specifications (transparent
 representations of the underlying key material) through the use of a key
 factory (see `KeyFactory`).

 

 A Key should use KeyRep as its serialized representation.
 Note that a serialized Key may contain sensitive information
 which should not be exposed in untrusted environments.  See the
 
 Security Appendix
 of the Java Object Serialization Specification for more information.

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- PublicKey
- PrivateKey
- KeyPair
- KeyPairGenerator
- KeyFactory
- KeyRep
- java.security.spec.KeySpec

> *Since 1.1*
