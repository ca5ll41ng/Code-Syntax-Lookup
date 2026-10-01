---
id: "java-en-function-node-isequalnode"
language: "java"
lang: "en"
category: "function"
name: "Node.isEqualNode"
signature: "public boolean isEqualNode(Node arg)"
title: "Node.isEqualNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.isEqualNode

```java
public boolean isEqualNode(Node arg)
```

Tests whether two nodes are equal.
 
This method tests for equality of nodes, not sameness (i.e.,
 whether the two nodes are references to the same object) which can be
 tested with Node.isSameNode(). All nodes that are the
 same will also be equal, though the reverse may not be true.
 
Two nodes are equal if and only if the following conditions are
 satisfied:
 
 
- The two nodes are of the same type.
 
 
- The following string
 attributes are equal: nodeName, localName,
 namespaceURI, prefix, nodeValue
 . This is: they are both null, or they have the same
 length and are character for character identical.
 
 
- The
 attributes NamedNodeMaps are equal. This
 is: they are both null, or they have the same length and
 for each node that exists in one map there is a node that exists in
 the other map and is equal, although not necessarily at the same
 index.
 
 
- The childNodes NodeLists are equal.
 This is: they are both null, or they have the same
 length and contain equal nodes at the same index. Note that
 normalization can affect equality; to avoid this, nodes should be
 normalized before being compared.
 
 

 
For two DocumentType nodes to be equal, the following
 conditions must also be satisfied:
 
 
- The following string attributes
 are equal: publicId, systemId,
 internalSubset.
 
 
- The entities
 NamedNodeMaps are equal.
 
 
- The notations
 NamedNodeMaps are equal.
 
 

 
On the other hand, the following do not affect equality: the
 ownerDocument, baseURI, and
 parentNode attributes, the specified
 attribute for Attr nodes, the schemaTypeInfo
  attribute for Attr and Element nodes, the
 Text.isElementContentWhitespace attribute for
 Text nodes, as well as any user data or event listeners
 registered on the nodes.
 

**Note:**  As a general rule, anything not mentioned in the
 description above is not significant in consideration of equality
 checking. Note that future versions of this specification may take
 into account more attributes and implementations conform to this
 specification are expected to be updated accordingly.

**参数**

- **arg** — The node to compare equality with.

**返回**

- Returns true if the nodes are equal, false otherwise.

> *Since 1.5, DOM Level 3*
