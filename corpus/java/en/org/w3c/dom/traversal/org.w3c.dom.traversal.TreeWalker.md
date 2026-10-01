---
id: "java-en-function-org-w3c-dom-traversal-treewalker"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.traversal.TreeWalker"
title: "TreeWalker"
directive: "type"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker

TreeWalker objects are used to navigate a document tree or
 subtree using the view of the document defined by their
 whatToShow flags and filter (if any). Any function which
 performs navigation using a TreeWalker will automatically
 support any view defined by a TreeWalker.
 

Omitting nodes from the logical view of a subtree can result in a
 structure that is substantially different from the same subtree in the
 complete, unfiltered document. Nodes that are siblings in the
 TreeWalker view may be children of different, widely
 separated nodes in the original view. For instance, consider a
 NodeFilter that skips all nodes except for Text nodes and
 the root node of a document. In the logical view that results, all text
 nodes will be siblings and appear as direct children of the root node, no
 matter how deeply nested the structure of the original document.
 

See also the Document Object Model (DOM) Level 2 Traversal and Range Specification.

> *Since 9, DOM Level 2*
