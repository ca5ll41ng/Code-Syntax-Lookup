---
id: "java-en-function-java-security-cert-certpath"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPath"
title: "CertPath"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath

An immutable sequence of certificates (a certification path).
 

 This is an abstract class that defines the methods common to all
 `CertPath`s. Subclasses can handle different kinds of
 certificates (X.509, PGP, etc.).
 

 All `CertPath` objects have a type, a list of
 `Certificate`s, and one or more supported encodings. Because the
 `CertPath` class is immutable, a `CertPath` cannot
 change in any externally visible way after being constructed. This
 stipulation applies to all public fields and methods of this class and any
 added or overridden by subclasses.
 

 The type is a `String` that identifies the type of
 `Certificate`s in the certification path. For each
 certificate `cert` in a certification path `certPath`,
 `cert.getType().equals(certPath.getType())` must be
 `true`.
 

 The list of `Certificate`s is an ordered `List` of
 zero or more `Certificate`s. This `List` and all
 of the `Certificate`s contained in it must be immutable.
 

 Each `CertPath` object must support one or more encodings
 so that the object can be translated into a byte array for storage or
 transmission to other parties. Preferably, these encodings should be
 well-documented standards (such as PKCS#7). One of the encodings supported
 by a `CertPath` is considered the default encoding. This
 encoding is used if no encoding is explicitly requested (for the
 `getEncoded` method, for instance).
 

 All `CertPath` objects are also `Serializable`.
 `CertPath` objects are resolved into an alternate
 `CertPathRep CertPathRep` object during serialization. This allows
 a `CertPath` object to be serialized into an equivalent
 representation regardless of its underlying implementation.
 

 `CertPath` objects can be created with a
 `CertificateFactory` or they can be returned by other classes,
 such as a `CertPathBuilder`.
 

 By convention, X.509 `CertPath`s (consisting of
 `X509Certificate`s), are ordered starting with the target
 certificate and ending with a certificate issued by the trust anchor. That
 is, the issuer of one certificate is the subject of the following one. The
 certificate representing the `TrustAnchor TrustAnchor` should not be
 included in the certification path. Unvalidated X.509 `CertPath`s
 may not follow these conventions. PKIX `CertPathValidator`s will
 detect any departure from these conventions that cause the certification
 path to be invalid and throw a `CertPathValidatorException`.

 

 Every implementation of the Java platform is required to support the
 following standard `CertPath` encodings:
 
 
- `PKCS7`
 
- `PkiPath`
 

 These encodings are described in the 
 CertPath Encodings section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other encodings are supported.
 

 **Concurrent Access**
 

 All `CertPath` objects must be thread-safe. That is, multiple
 threads may concurrently invoke the methods defined in this class on a
 single `CertPath` object (or more than one) with no
 ill effects. This is also true for the `List` returned by
 `CertPath.getCertificates`.
 

 Requiring `CertPath` objects to be immutable and thread-safe
 allows them to be passed around to various pieces of code without worrying
 about coordinating access.  Providing this thread-safety is
 generally not difficult, since the `CertPath` and
 `List` objects in question are immutable.

**参见**

- CertificateFactory
- CertPathBuilder

> *Since 1.4*
