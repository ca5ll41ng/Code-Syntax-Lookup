---
id: "java-en-function-documenttype-getentities"
language: "java"
lang: "en"
category: "function"
name: "DocumentType.getEntities"
signature: "public NamedNodeMap getEntities()"
title: "DocumentType.getEntities"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DocumentType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentType.getEntities

```java
public NamedNodeMap getEntities()
```

A NamedNodeMap containing the general entities, both
 external and internal, declared in the DTD. Parameter entities are
 not contained. Duplicates are discarded. For example in:
 
```
&lt;!DOCTYPE
 ex SYSTEM "ex.dtd" [ &lt;!ENTITY foo "foo"&gt; &lt;!ENTITY bar
 "bar"&gt; &lt;!ENTITY bar "bar2"&gt; &lt;!ENTITY % baz "baz"&gt;
 ]&gt; &lt;ex/&gt;
```

  the interface provides access to foo
 and the first declaration of bar but not the second
 declaration of bar or baz. Every node in
 this map also implements the Entity interface.
 
The DOM Level 2 does not support editing entities, therefore
 entities cannot be altered in any way.
