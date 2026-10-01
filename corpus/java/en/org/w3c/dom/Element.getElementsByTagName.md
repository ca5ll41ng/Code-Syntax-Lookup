---
id: "java-en-function-element-getelementsbytagname"
language: "java"
lang: "en"
category: "function"
name: "Element.getElementsByTagName"
signature: "public NodeList getElementsByTagName(String name)"
title: "Element.getElementsByTagName"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getElementsByTagName

```java
public NodeList getElementsByTagName(String name)
```

Returns a NodeList of all descendant Elements
 with a given tag name, in document order.

**参数**

- **name** — The name of the tag to match on. The special value "*" matches all tags.

**返回**

- A list of matching Element nodes.
