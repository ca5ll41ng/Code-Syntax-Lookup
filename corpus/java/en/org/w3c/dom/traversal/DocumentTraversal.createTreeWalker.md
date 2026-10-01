---
id: "java-en-function-documenttraversal-createtreewalker"
language: "java"
lang: "en"
category: "function"
name: "DocumentTraversal.createTreeWalker"
signature: "public TreeWalker createTreeWalker(Node root, int whatToShow, NodeFilter filter, boolean entityReferenceExpansion) throws DOMException"
title: "DocumentTraversal.createTreeWalker"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/DocumentTraversal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentTraversal.createTreeWalker

```java
public TreeWalker createTreeWalker(Node root, int whatToShow, NodeFilter filter, boolean entityReferenceExpansion) throws DOMException
```

Create a new TreeWalker over the subtree rooted at the
 specified node.

**参数**

- **root** — The node which will serve as the root for the TreeWalker. The whatToShow flags and the NodeFilter are not considered when setting this value; any node type will be accepted as the root. The currentNode of the TreeWalker is initialized to this node, whether or not it is visible. The root functions as a stopping point for traversal methods that look upward in the document structure, such as parentNode and nextNode. The root must not be null.
- **whatToShow** — This flag specifies which node types may appear in the logical view of the tree presented by the TreeWalker. See the description of NodeFilter for the set of possible SHOW_ values.These flags can be combined using OR.
- **filter** — The NodeFilter to be used with this TreeWalker, or null to indicate no filter.
- **entityReferenceExpansion** — If this flag is false, the contents of EntityReference nodes are not presented in the logical view.

**返回**

- The newly created TreeWalker.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the specified root is null.
