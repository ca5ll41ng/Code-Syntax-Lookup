---
id: "java-en-function-javax-security-auth-x500-x500principal"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.x500.X500Principal"
title: "X500Principal"
directive: "type"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal

This class represents an X.500 `Principal`.
 `X500Principal`s are represented by distinguished names such as
 "CN=Duke, OU=JavaSoft, O=Sun Microsystems, C=US".

 

 This class can be instantiated by using a string representation
 of the distinguished name, or by using the ASN.1 DER encoded byte
 representation of the distinguished name.  The current specification
 for the string representation of a distinguished name is defined in
 RFC 2253: Lightweight
 Directory Access Protocol (v3): UTF-8 String Representation of
 Distinguished Names. This class, however, accepts string formats from
 both RFC 2253 and RFC 1779:
 A String Representation of Distinguished Names, and also recognizes
 attribute type keywords whose OIDs (Object Identifiers) are defined in
 RFC 5280: Internet X.509
 Public Key Infrastructure Certificate and CRL Profile.

 

 The string representation for this `X500Principal`
 can be obtained by calling the `getName` methods.

 

 Note that the `getSubjectX500Principal` and
 `getIssuerX500Principal` methods of
 `X509Certificate` return X500Principals representing the
 issuer and subject fields of the certificate.

      RFC 1779: A String Representation of Distinguished Names
      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names
      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- java.security.cert.X509Certificate

> *Since 1.4*
