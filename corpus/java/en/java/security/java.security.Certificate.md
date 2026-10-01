---
id: "java-en-function-java-security-certificate"
language: "java"
lang: "en"
category: "function"
name: "java.security.Certificate"
title: "Certificate"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate

This is an interface of abstract methods for managing a
 variety of identity certificates.
 An identity certificate is a guarantee by a principal that
 a public key is that of another principal.  (A principal represents
 an entity such as an individual user, a group, or a corporation.)

 

In particular, this interface is intended to be a common
 abstraction for constructs that have different formats but
 important common uses.  For example, different types of
 certificates, such as X.509 certificates and PGP certificates,
 share general certificate functionality (the need to encode and
 decode certificates) and some types of information, such as a
 public key, the principal whose key it is, and the guarantor
 guaranteeing that the public key is that of the specified
 principal. So an implementation of X.509 certificates and an
 implementation of PGP certificates can both utilize the `Certificate`
 interface, even though their formats and additional types and
 amounts of information stored are different.

 

**Important**: This interface is useful for cataloging and
 grouping objects sharing certain common uses. It does not have any
 semantics of its own. In particular, a `Certificate` object does not
 make any statement as to the validity of the binding. It is
 the duty of the application implementing this interface to verify
 the certificate and satisfy itself of its validity.

**参见**

- java.security.cert.Certificate

> *Since 1.1*

> **⚠ Deprecated** — This class is deprecated and subject to removal in a future version of Java SE. It has been replaced by `java.security.cert.Certificate` and related classes.
