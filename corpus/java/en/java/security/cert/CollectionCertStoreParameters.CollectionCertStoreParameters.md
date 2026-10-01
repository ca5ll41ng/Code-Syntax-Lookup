---
id: "java-en-function-collectioncertstoreparameters-collectioncertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "CollectionCertStoreParameters.CollectionCertStoreParameters"
signature: "public CollectionCertStoreParameters(Collection<?> collection)"
title: "CollectionCertStoreParameters.CollectionCertStoreParameters"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CollectionCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollectionCertStoreParameters.CollectionCertStoreParameters

```java
public CollectionCertStoreParameters(Collection<?> collection)
```

Creates an instance of `CollectionCertStoreParameters`
 which will allow certificates and CRLs to be retrieved from the
 specified `Collection`. If the specified
 `Collection` contains an object that is not a
 `Certificate` or `CRL`, that object will be
 ignored by the Collection `CertStore`.
 

 The `Collection` is **not** copied. Instead, a
 reference is used. This allows the caller to subsequently add or
 remove `Certificates` or `CRL`s from the
 `Collection`, thus changing the set of
 `Certificates` or `CRL`s available to the
 Collection `CertStore`. The Collection `CertStore`
 will not modify the contents of the `Collection`.
 

 If the `Collection` will be modified by one thread while
 another thread is calling a method of a Collection `CertStore`
 that has been initialized with this `Collection`, the
 `Collection` must have fail-fast iterators.

**参数**

- **collection** — a `Collection` of `Certificate`s and `CRL`s

**异常**

- **NullPointerException** — if `collection` is `null`
