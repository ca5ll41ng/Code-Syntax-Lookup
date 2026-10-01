---
id: "java-en-function-java-security-cert-ldapcertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.LDAPCertStoreParameters"
title: "LDAPCertStoreParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/LDAPCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LDAPCertStoreParameters

Parameters used as input for the LDAP `CertStore` algorithm.
 

 This class is used to provide necessary configuration parameters (server
 name and port number) to implementations of the LDAP `CertStore`
 algorithm. However, if you are retrieving certificates or CRLs from
 an ldap URI as specified by RFC 5280, use the
 `java.security.cert.URICertStoreParameters URICertStoreParameters`
 instead, as the URI may contain additional information such as the
 distinguished name that will help the LDAP CertStore find the specific
 certificates and CRLs.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertStore

> *Since 1.4*
