---
id: "java-en-function-domresult-getnode"
language: "java"
lang: "en"
category: "function"
name: "DOMResult.getNode"
signature: "public Node getNode()"
title: "DOMResult.getNode"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMResult.getNode

```java
public Node getNode()
```

Get the node that will contain the result DOM tree.

 

If no node was set via
 `DOMResult`,
 `DOMResult`,
 `DOMResult`,
 `DOMResult` or
 `setNode`,
 then the node will be set by the transformation, and may be obtained from this method once the transformation is complete.
 Calling this method before the transformation will return `null`.

**返回**

- The node to which the transformation will be appended.
