---
id: "java-en-function-policynode-getexpectedpolicies"
language: "java"
lang: "en"
category: "function"
name: "PolicyNode.getExpectedPolicies"
signature: "Set<String> getExpectedPolicies()"
title: "PolicyNode.getExpectedPolicies"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode.getExpectedPolicies

```java
Set<String> getExpectedPolicies()
```

Returns the set of expected policies that would satisfy this
 node's valid policy in the next certificate to be processed.

**返回**

- an immutable `Set` of expected policy `String` OIDs. For the root node, this method always returns a `Set` with one element, the special anyPolicy OID: "2.5.29.32.0".
