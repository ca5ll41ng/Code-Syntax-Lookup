---
id: "java-en-function-node-getnamespaceuri"
language: "java"
lang: "en"
category: "function"
name: "Node.getNamespaceURI"
signature: "public String getNamespaceURI()"
title: "Node.getNamespaceURI"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getNamespaceURI

```java
public String getNamespaceURI()
```

The namespace URI of this node, or null if it is
 unspecified (see ).
 
This is not a computed value that is the result of a namespace
 lookup based on an examination of the namespace declarations in
 scope. It is merely the namespace URI given at creation time.
 
For nodes of any type other than ELEMENT_NODE and
 ATTRIBUTE_NODE and nodes created with a DOM Level 1
 method, such as Document.createElement(), this is always
 null.
 

**Note:** Per the Namespaces in XML Specification [XML Namespaces]
  an attribute does not inherit its namespace from the element it is
 attached to. If an attribute is not explicitly given a namespace, it
 simply has no namespace.

> *Since 1.4, DOM Level 2*
