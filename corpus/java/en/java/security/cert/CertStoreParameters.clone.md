---
id: "java-en-function-certstoreparameters-clone"
language: "java"
lang: "en"
category: "function"
name: "CertStoreParameters.clone"
signature: "Object clone()"
title: "CertStoreParameters.clone"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStoreParameters.clone

```java
Object clone()
```

Makes a copy of this `CertStoreParameters`.
 

 The precise meaning of "copy" may depend on the class of
 the `CertStoreParameters` object. A typical implementation
 performs a "deep copy" of this object, but this is not an absolute
 requirement. Some implementations may perform a "shallow copy" of some
 or all of the fields of this object.
 

 Note that the `CertStore.getInstance` methods make a copy
 of the specified `CertStoreParameters`. A deep copy
 implementation of `clone` is safer and more robust, as it
 prevents the caller from corrupting a shared `CertStore` by
 subsequently modifying the contents of its initialization parameters.
 However, a shallow copy implementation of `clone` is more
 appropriate for applications that need to hold a reference to a
 parameter contained in the `CertStoreParameters`. For example,
 a shallow copy clone allows an application to release the resources of
 a particular `CertStore` initialization parameter immediately,
 rather than waiting for the garbage collection mechanism. This should
 be done with the utmost care, since the `CertStore` may still
 be in use by other threads.
 

 Each subclass should state the precise behavior of this method so
 that users and developers know what to expect.

**返回**

- a copy of this `CertStoreParameters`
