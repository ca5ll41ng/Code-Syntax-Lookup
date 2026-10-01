---
id: "java-en-function-org-w3c-dom-elementtraversal"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ElementTraversal"
title: "ElementTraversal"
directive: "type"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ElementTraversal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ElementTraversal

The `ElementTraversal` interface is a set of read-only attributes
 which allow an author to easily navigate between elements in a document.
 

 In conforming implementations of Element Traversal, all objects that
 implement `Element` must also implement the `ElementTraversal`
 interface. Four of the methods,
 `getFirstElementChild`, `getLastElementChild`,
 `getPreviousElementSibling`, and `getNextElementSibling`,
 each provides a live reference to another element with the defined
 relationship to the current element, if the related element exists. The
 fifth method, `getChildElementCount`, exposes the number of child
 elements of an element, for preprocessing before navigation.

**参见**

- Element Traversal Specification

> *Since 9*
