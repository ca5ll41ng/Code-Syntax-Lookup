---
id: "java-en-function-java-security-cert-policynode"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PolicyNode"
title: "PolicyNode"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode

An immutable valid policy tree node as defined by the PKIX certification
 path validation algorithm.

 

One of the outputs of the PKIX certification path validation
 algorithm is a valid policy tree, which includes the policies that
 were determined to be valid, how this determination was reached,
 and any policy qualifiers encountered. This tree is of depth
 n, where n is the length of the certification
 path that has been validated.

 

Most applications will not need to examine the valid policy tree.
 They can achieve their policy processing goals by setting the
 policy-related parameters in `PKIXParameters`. However,
 the valid policy tree is available for more sophisticated applications,
 especially those that process policy qualifiers.

 

`getPolicyTree()
 PKIXCertPathValidatorResult.getPolicyTree` returns the root node of the
 valid policy tree. The tree can be traversed using the
 `getChildren getChildren` and `getParent getParent` methods.
 Data about a particular node can be retrieved using other methods of
 `PolicyNode`.

 

**Concurrent Access**
 

All `PolicyNode` objects must be immutable and
 thread-safe. Multiple threads may concurrently invoke the methods defined
 in this class on a single `PolicyNode` object (or more than one)
 with no ill effects. This stipulation applies to all public fields and
 methods of this class and any added or overridden by subclasses.

> *Since 1.4*
