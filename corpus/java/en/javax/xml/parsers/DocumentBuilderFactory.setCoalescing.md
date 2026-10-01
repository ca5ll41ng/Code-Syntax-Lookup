---
id: "java-en-function-documentbuilderfactory-setcoalescing"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setCoalescing"
signature: "public void setCoalescing(boolean coalescing)"
title: "DocumentBuilderFactory.setCoalescing"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setCoalescing

```java
public void setCoalescing(boolean coalescing)
```

Specifies that the parser produced by this code will
 convert CDATA nodes to Text nodes and append it to the
 adjacent (if any) text node. By default the value of this is set to
 `false`

**参数**

- **coalescing** — true if the parser produced will convert CDATA nodes to Text nodes and append it to the adjacent (if any) text node; false otherwise.
