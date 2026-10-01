---
id: "java-en-function-java-security-cert-uricertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.URICertStoreParameters"
title: "URICertStoreParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/URICertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URICertStoreParameters

Parameters used as input for `CertStore` algorithms which use
 information contained in a URI to retrieve certificates and CRLs.
 

 This class is used to provide necessary configuration parameters
 through a URI as defined in RFC 5280 to implementations of
 `CertStore` algorithms.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertStore
- java.net.URI

> *Since 9*
