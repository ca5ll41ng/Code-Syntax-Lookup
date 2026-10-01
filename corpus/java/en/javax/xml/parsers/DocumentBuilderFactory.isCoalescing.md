---
id: "java-en-function-documentbuilderfactory-iscoalescing"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.isCoalescing"
signature: "public boolean isCoalescing()"
title: "DocumentBuilderFactory.isCoalescing"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.isCoalescing

```java
public boolean isCoalescing()
```

Indicates whether or not the factory is configured to produce
 parsers which converts CDATA nodes to Text nodes and appends it to
 the adjacent (if any) Text node.

**返回**

- true if the factory is configured to produce parsers which converts CDATA nodes to Text nodes and appends it to the adjacent (if any) Text node; false otherwise.
