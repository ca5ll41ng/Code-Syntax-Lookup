---
id: "java-en-function-java-security-identity"
language: "java"
lang: "en"
category: "function"
name: "java.security.Identity"
title: "Identity"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity

This class represents identities: real-world objects such as people,
 companies or organizations whose identities can be authenticated using
 their public keys. Identities may also be more abstract (or concrete)
 constructs, such as daemon threads or smart cards.

 

All `Identity` objects have a name and a public key. Names are
 immutable. Identities may also be scoped. That is, if an `Identity` is
 specified to have a particular scope, then the name and public
 key of the `Identity` are unique within that scope.

 

An `Identity` also has a set of certificates (all certifying its own
 public key). The Principal names specified in these certificates need
 not be the same, only the key.

 

An `Identity` can be subclassed, to include postal and email
 addresses, telephone numbers, images of faces and logos, and so on.

**参见**

- IdentityScope
- Signer
- Principal

> *Since 1.1*

> **⚠ Deprecated** — This class is deprecated and subject to removal in a future version of Java SE. It has been replaced by `java.security.KeyStore`, the `java.security.cert` package, and `java.security.Principal`.
