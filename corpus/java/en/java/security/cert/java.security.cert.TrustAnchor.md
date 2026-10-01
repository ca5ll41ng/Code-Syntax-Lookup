---
id: "java-en-function-java-security-cert-trustanchor"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.TrustAnchor"
title: "TrustAnchor"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/TrustAnchor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustAnchor

A trust anchor or most-trusted Certification Authority (CA).
 

 This class represents a "most-trusted CA", which is used as a trust anchor
 for validating X.509 certification paths. A most-trusted CA includes the
 public key of the CA, the CA's name, and any constraints upon the set of
 paths which may be validated using this key. These parameters can be
 specified in the form of a trusted `X509Certificate` or as
 individual parameters.
 

 **Concurrent Access**
 

All `TrustAnchor` objects must be immutable and
 thread-safe. That is, multiple threads may concurrently invoke the
 methods defined in this class on a single `TrustAnchor`
 object (or more than one) with no ill effects. Requiring
 `TrustAnchor` objects to be immutable and thread-safe
 allows them to be passed around to various pieces of code without
 worrying about coordinating access. This stipulation applies to all
 public fields and methods of this class and any added or overridden
 by subclasses.

**参见**

- PKIXParameters#PKIXParameters(Set)
- PKIXBuilderParameters#PKIXBuilderParameters(Set, CertSelector)

> *Since 1.4*
