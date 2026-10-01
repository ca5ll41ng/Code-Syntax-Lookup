---
id: "java-en-function-documenttraversal-createnodeiterator"
language: "java"
lang: "en"
category: "function"
name: "DocumentTraversal.createNodeIterator"
signature: "public NodeIterator createNodeIterator(Node root, int whatToShow, NodeFilter filter, boolean entityReferenceExpansion) throws DOMException"
title: "DocumentTraversal.createNodeIterator"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/DocumentTraversal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentTraversal.createNodeIterator

```java
public NodeIterator createNodeIterator(Node root, int whatToShow, NodeFilter filter, boolean entityReferenceExpansion) throws DOMException
```

Create a new NodeIterator over the subtree rooted at the
 specified node.

**参数**

- **root** — The node which will be iterated together with its children. The NodeIterator is initially positioned just before this node. The whatToShow flags and the filter, if any, are not considered when setting this position. The root must not be null.
- **whatToShow** — This flag specifies which node types may appear in the logical view of the tree presented by the NodeIterator. See the description of NodeFilter for the set of possible SHOW_ values.These flags can be combined using OR.
- **filter** — The NodeFilter to be used with this NodeIterator, or null to indicate no filter.
- **entityReferenceExpansion** — The value of this flag determines whether entity reference nodes are expanded.

**返回**

- The newly created NodeIterator.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the specified root is null.
