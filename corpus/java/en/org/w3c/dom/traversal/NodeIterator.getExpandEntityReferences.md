---
id: "java-en-function-nodeiterator-getexpandentityreferences"
language: "java"
lang: "en"
category: "function"
name: "NodeIterator.getExpandEntityReferences"
signature: "public boolean getExpandEntityReferences()"
title: "NodeIterator.getExpandEntityReferences"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeIterator.getExpandEntityReferences

```java
public boolean getExpandEntityReferences()
```

The value of this flag determines whether the children of entity
 reference nodes are visible to the NodeIterator. If
 false, these children  and their descendants will be rejected. Note
 that this rejection takes precedence over whatToShow and
 the filter. Also note that this is currently the only situation where
 NodeIterators may reject a complete subtree rather than
 skipping individual nodes.
 

 
 To produce a view of the document that has entity references
 expanded and does not expose the entity reference node itself, use
 the whatToShow flags to hide the entity reference node
 and set expandEntityReferences to true when creating the
 NodeIterator. To produce a view of the document that has
 entity reference nodes but no entity expansion, use the
 whatToShow flags to show the entity reference node and
 set expandEntityReferences to false.
