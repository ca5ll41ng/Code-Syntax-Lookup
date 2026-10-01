---
id: "java-en-function-policynode-iscritical"
language: "java"
lang: "en"
category: "function"
name: "PolicyNode.isCritical"
signature: "boolean isCritical()"
title: "PolicyNode.isCritical"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode.isCritical

```java
boolean isCritical()
```

Returns the criticality indicator of the certificate policy extension
 in the most recently processed certificate.

**返回**

- `true` if extension marked critical, `false` otherwise. For the root node, `false` is always returned.
