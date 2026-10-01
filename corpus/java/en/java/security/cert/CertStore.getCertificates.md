---
id: "java-en-function-certstore-getcertificates"
language: "java"
lang: "en"
category: "function"
name: "CertStore.getCertificates"
signature: "public final Collection<? extends Certificate> getCertificates (CertSelector selector) throws CertStoreException"
title: "CertStore.getCertificates"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.getCertificates

```java
public final Collection<? extends Certificate> getCertificates (CertSelector selector) throws CertStoreException
```

Returns a `Collection` of `Certificate`s that
 match the specified selector. If no `Certificate`s
 match the selector, an empty `Collection` will be returned.
 

 For some `CertStore` types, the resulting
 `Collection` may not contain **all** of the
 `Certificate`s that match the selector. For instance,
 an LDAP `CertStore` may not search all entries in the
 directory. Instead, it may just search entries that are likely to
 contain the `Certificate`s it is looking for.
 

 Some `CertStore` implementations (especially LDAP
 `CertStore`s) may throw a `CertStoreException`
 unless a non-null `CertSelector` is provided that
 includes specific criteria that can be used to find the certificates.
 Issuer and/or subject names are especially useful criteria.

**参数**

- **selector** — A `CertSelector` used to select which `Certificate`s should be returned. Specify `null` to return all `Certificate`s (if supported).

**返回**

- A `Collection` of `Certificate`s that match the specified selector (never `null`)

**异常**

- **CertStoreException** — if an exception occurs
