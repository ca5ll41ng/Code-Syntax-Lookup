---
id: "java-en-function-java-security-cert-collectioncertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CollectionCertStoreParameters"
title: "CollectionCertStoreParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CollectionCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollectionCertStoreParameters

Parameters used as input for the Collection `CertStore`
 algorithm.
 

 This class is used to provide necessary configuration parameters
 to implementations of the Collection `CertStore`
 algorithm. The only parameter included in this class is the
 `Collection` from which the `CertStore` will
 retrieve certificates and CRLs.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- java.util.Collection
- CertStore

> *Since 1.4*
