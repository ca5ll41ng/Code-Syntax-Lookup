---
id: "java-en-function-java-security-cert-certstore"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertStore"
title: "CertStore"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore

A class for retrieving `Certificate`s and `CRL`s
 from a repository.
 

 This class uses a provider-based architecture.
 To create a `CertStore`, call one of the static
 `getInstance` methods, passing in the type of
 `CertStore` desired, any applicable initialization parameters
 and optionally the name of the provider desired.
 

 Once the `CertStore` has been created, it can be used to
 retrieve `Certificate`s and `CRL`s by calling its
 `getCertificates(CertSelector selector) getCertificates` and
 `getCRLs(CRLSelector selector) getCRLs` methods.
 

 Unlike a `java.security.KeyStore KeyStore`, which provides access
 to a cache of private keys and trusted certificates, a
 `CertStore` is designed to provide access to a potentially
 vast repository of untrusted certificates and CRLs. For example, an LDAP
 implementation of `CertStore` provides access to certificates
 and CRLs stored in one or more directories using the LDAP protocol and the
 schema as defined in the RFC service attribute.

 

 Every implementation of the Java platform is required to support the
 following standard `CertStore` type:
 
 
- `Collection`
 

 This type is described in the 
 CertStore section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other types are supported.

 

 **Concurrent Access**
 

 All public methods of `CertStore` objects must be thread-safe.
 That is, multiple threads may concurrently invoke these methods on a
 single `CertStore` object (or more than one) with no
 ill effects. This allows a `CertPathBuilder` to search for a
 CRL while simultaneously searching for further certificates, for instance.
 

 The static methods of this class are also guaranteed to be thread-safe.
 Multiple threads may concurrently invoke the static methods defined in
 this class with no ill effects.

> *Since 1.4*
