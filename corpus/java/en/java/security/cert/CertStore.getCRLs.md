---
id: "java-en-function-certstore-getcrls"
language: "java"
lang: "en"
category: "function"
name: "CertStore.getCRLs"
signature: "public final Collection<? extends CRL> getCRLs(CRLSelector selector) throws CertStoreException"
title: "CertStore.getCRLs"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.getCRLs

```java
public final Collection<? extends CRL> getCRLs(CRLSelector selector) throws CertStoreException
```

Returns a `Collection` of `CRL`s that
 match the specified selector. If no `CRL`s
 match the selector, an empty `Collection` will be returned.
 

 For some `CertStore` types, the resulting
 `Collection` may not contain **all** of the
 `CRL`s that match the selector. For instance,
 an LDAP `CertStore` may not search all entries in the
 directory. Instead, it may just search entries that are likely to
 contain the `CRL`s it is looking for.
 

 Some `CertStore` implementations (especially LDAP
 `CertStore`s) may throw a `CertStoreException`
 unless a non-null `CRLSelector` is provided that
 includes specific criteria that can be used to find the CRLs.
 Issuer names and/or the certificate to be checked are especially useful.

**参数**

- **selector** — A `CRLSelector` used to select which `CRL`s should be returned. Specify `null` to return all `CRL`s (if supported).

**返回**

- A `Collection` of `CRL`s that match the specified selector (never `null`)

**异常**

- **CertStoreException** — if an exception occurs
