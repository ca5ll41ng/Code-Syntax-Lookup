---
id: "java-en-function-policynode-getvalidpolicy"
language: "java"
lang: "en"
category: "function"
name: "PolicyNode.getValidPolicy"
signature: "String getValidPolicy()"
title: "PolicyNode.getValidPolicy"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode.getValidPolicy

```java
String getValidPolicy()
```

Returns the valid policy represented by this node.

**返回**

- the `String` OID of the valid policy represented by this node. For the root node, this method always returns the special anyPolicy OID: "2.5.29.32.0".
