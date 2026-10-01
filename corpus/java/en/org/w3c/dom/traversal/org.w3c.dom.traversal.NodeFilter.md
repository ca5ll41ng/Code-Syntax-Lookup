---
id: "java-en-function-org-w3c-dom-traversal-nodefilter"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.traversal.NodeFilter"
title: "NodeFilter"
directive: "type"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter

Filters are objects that know how to "filter out" nodes. If a
 NodeIterator or TreeWalker is given a
 NodeFilter, it applies the filter before it returns the next
 node. If the filter says to accept the node, the traversal logic returns
 it; otherwise, traversal looks for the next node and pretends that the
 node that was rejected was not there.
 

The DOM does not provide any filters. NodeFilter is just an
 interface that users can implement to provide their own filters.
 

NodeFilters do not need to know how to traverse from node
 to node, nor do they need to know anything about the data structure that
 is being traversed. This makes it very easy to write filters, since the
 only thing they have to know how to do is evaluate a single node. One
 filter may be used with a number of different kinds of traversals,
 encouraging code reuse.
 

See also the Document Object Model (DOM) Level 2 Traversal and Range Specification.

> *Since 9, DOM Level 2*
