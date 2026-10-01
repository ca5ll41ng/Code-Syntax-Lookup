---
id: "java-en-function-org-w3c-dom-domexception"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.DOMException"
title: "DOMException"
directive: "type"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMException

DOM operations only raise exceptions in "exceptional" circumstances, i.e.,
 when an operation is impossible to perform (either for logical reasons,
 because data is lost, or because the implementation has become unstable).
 In general, DOM methods return specific error values in ordinary
 processing situations, such as out-of-bound errors when using
 NodeList.
 

Implementations should raise other exceptions under other circumstances.
 For example, implementations should raise an implementation-dependent
 exception if a null argument is passed when null
  was not expected.
 

Some languages and object systems do not support the concept of
 exceptions. For such systems, error conditions may be indicated using
 native error reporting mechanisms. For some bindings, for example,
 methods may return error codes similar to those listed in the
 corresponding method descriptions.
 

See also the Document Object Model (DOM) Level 3 Core Specification.

> *Since 1.4, DOM Level 2*
