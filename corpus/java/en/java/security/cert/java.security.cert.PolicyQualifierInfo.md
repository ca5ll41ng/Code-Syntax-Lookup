---
id: "java-en-function-java-security-cert-policyqualifierinfo"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PolicyQualifierInfo"
title: "PolicyQualifierInfo"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyQualifierInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyQualifierInfo

An immutable policy qualifier represented by the ASN.1 PolicyQualifierInfo
 structure.

 

The ASN.1 definition is as follows:
 
```

   PolicyQualifierInfo ::= SEQUENCE {
        policyQualifierId       PolicyQualifierId,
        qualifier               ANY DEFINED BY policyQualifierId }
 
```

 

 A certificate policies extension, if present in an X.509 version 3
 certificate, contains a sequence of one or more policy information terms,
 each of which consists of an object identifier (OID) and optional
 qualifiers. In an end-entity certificate, these policy information terms
 indicate the policy under which the certificate has been issued and the
 purposes for which the certificate may be used. In a CA certificate, these
 policy information terms limit the set of policies for certification paths
 which include this certificate.
 

 A `Set` of `PolicyQualifierInfo` objects are returned
 by the `getPolicyQualifiers PolicyNode.getPolicyQualifiers`
 method. This allows applications with specific policy requirements to
 process and validate each policy qualifier. Applications that need to
 process policy qualifiers should explicitly set the
 `policyQualifiersRejected` flag to false (by calling the
 `setPolicyQualifiersRejected
 PKIXParameters.setPolicyQualifiersRejected` method) before validating
 a certification path.

 

Note that the PKIX certification path validation algorithm specifies
 that any policy qualifier in a certificate policies extension that is
 marked critical must be processed and validated. Otherwise, the
 certification path must be rejected. If the
 `policyQualifiersRejected` flag is set to false, it is up to
 the application to validate all policy qualifiers in this manner in order
 to be PKIX compliant.

 

**Concurrent Access**

 

All `PolicyQualifierInfo` objects must be immutable and
 thread-safe. That is, multiple threads may concurrently invoke the
 methods defined in this class on a single `PolicyQualifierInfo`
 object (or more than one) with no ill effects. Requiring
 `PolicyQualifierInfo` objects to be immutable and thread-safe
 allows them to be passed around to various pieces of code without
 worrying about coordinating access.

> *Since 1.4*
