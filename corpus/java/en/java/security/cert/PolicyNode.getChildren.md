---
id: "java-en-function-policynode-getchildren"
language: "java"
lang: "en"
category: "function"
name: "PolicyNode.getChildren"
signature: "Iterator<? extends PolicyNode> getChildren()"
title: "PolicyNode.getChildren"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode.getChildren

```java
Iterator<? extends PolicyNode> getChildren()
```

Returns an iterator over the children of this node. Any attempts to
 modify the children of this node through the
 `Iterator`'s remove method must throw an
 `UnsupportedOperationException`.

**返回**

- an iterator over the children of this node
