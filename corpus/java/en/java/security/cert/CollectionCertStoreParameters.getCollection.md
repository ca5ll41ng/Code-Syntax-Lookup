---
id: "java-en-function-collectioncertstoreparameters-getcollection"
language: "java"
lang: "en"
category: "function"
name: "CollectionCertStoreParameters.getCollection"
signature: "public Collection<?> getCollection()"
title: "CollectionCertStoreParameters.getCollection"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CollectionCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollectionCertStoreParameters.getCollection

```java
public Collection<?> getCollection()
```

Returns the `Collection` from which `Certificate`s
 and `CRL`s are retrieved. This is **not** a copy of the
 `Collection`, it is a reference. This allows the caller to
 subsequently add or remove `Certificates` or
 `CRL`s from the `Collection`.

**返回**

- the `Collection` (never null)
