---
id: "java-en-function-java-security-identityscope"
language: "java"
lang: "en"
category: "function"
name: "java.security.IdentityScope"
title: "IdentityScope"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/IdentityScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityScope

This class represents a scope for identities. It is an Identity
 itself, and therefore has a name and can have a scope. It can also
 optionally have a public key and associated certificates.

 

An `IdentityScope` can contain `Identity` objects of all
 kinds, including signers. All types of `Identity` objects can be
 retrieved, added, and removed using the same methods. Note that it is
 possible, and in fact expected, that different types of identity scopes will
 apply different policies for their various operations on the
 various types of Identities.

 

There is a one-to-one mapping between keys and identities, and
 there can only be one copy of one key per scope. For example, suppose
 **Acme Software, Inc** is a software publisher known to a user.
 Suppose it is an Identity, that is, it has a public key, and a set of
 associated certificates. It is named in the scope using the name
 "Acme Software". No other named Identity in the scope has the same
 public  key. Of course, none has the same name as well.

**参见**

- Identity
- Signer
- Principal
- Key

> *Since 1.1*

> **⚠ Deprecated** — This class is deprecated and subject to removal in a future version of Java SE. It has been replaced by `java.security.KeyStore`, the `java.security.cert` package, and `java.security.Principal`.
