---
id: "java-en-function-x509crlselector-setissuers"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.setIssuers"
signature: "public void setIssuers(Collection<X500Principal> issuers)"
title: "X509CRLSelector.setIssuers"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.setIssuers

```java
public void setIssuers(Collection<X500Principal> issuers)
```

Sets the issuerNames criterion. The issuer distinguished name in the
 `X509CRL` must match at least one of the specified
 distinguished names. If `null`, any issuer distinguished name
 will do.
 

 This method allows the caller to specify, with a single method call,
 the complete set of issuer names which `X509CRLs` may contain.
 The specified value replaces the previous value for the issuerNames
 criterion.
 

 The `names` parameter (if not `null`) is a
 `Collection` of `X500Principal`s.
 

 Note that the `names` parameter can contain duplicate
 distinguished names, but they may be removed from the
 `Collection` of names returned by the
 `getIssuers getIssuers` method.
 

 Note that a copy is performed on the `Collection` to
 protect against subsequent modifications.

**参数**

- **issuers** — a `Collection` of X500Principals (or `null`)

**参见**

- #getIssuers

> *Since 1.5*
