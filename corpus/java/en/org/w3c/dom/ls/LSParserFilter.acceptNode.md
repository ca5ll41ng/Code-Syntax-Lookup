---
id: "java-en-function-lsparserfilter-acceptnode"
language: "java"
lang: "en"
category: "function"
name: "LSParserFilter.acceptNode"
signature: "public short acceptNode(Node nodeArg)"
title: "LSParserFilter.acceptNode"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParserFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParserFilter.acceptNode

```java
public short acceptNode(Node nodeArg)
```

This method will be called by the parser at the completion of the
 parsing of each node. The node and all of its descendants will exist
 and be complete. The parent node will also exist, although it may be
 incomplete, i.e. it may have additional children that have not yet
 been parsed. Attribute nodes are never passed to this function.
 
From within this method, the new node may be freely modified -
 children may be added or removed, text nodes modified, etc. The state
 of the rest of the document outside this node is not defined, and the
 affect of any attempt to navigate to, or to modify any other part of
 the document is undefined.
 
For validating parsers, the checks are made on the original
 document, before any modification by the filter. No validity checks
 are made on any document modifications made by the filter.
 
If this new node is rejected, the parser might reuse the new node
 and any of its descendants.

**参数**

- **nodeArg** — The newly constructed element. At the time this method is called, the element is complete - it has all of its children (and their children, recursively) and attributes, and is attached as a child to its parent.

**返回**

- -  FILTER_ACCEPT if this Node should be included in the DOM document being built.   - FILTER_REJECT if the Node and all of its children should be rejected.   -  FILTER_SKIP if the Node should be skipped and the Node should be replaced by all the children of the Node.   - FILTER_INTERRUPT if the filter wants to stop the processing of the document. Interrupting the processing of the document does no longer guarantee that the resulting DOM tree is XML well-formed. The Node is accepted and will be the last completely parsed node.
