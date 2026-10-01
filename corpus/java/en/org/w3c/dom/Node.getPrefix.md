---
id: "java-en-function-node-getprefix"
language: "java"
lang: "en"
category: "function"
name: "Node.getPrefix"
signature: "public String getPrefix()"
title: "Node.getPrefix"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getPrefix

```java
public String getPrefix()
```

The namespace prefix of this node, or null if it is
 unspecified. When it is defined to be null, setting it
 has no effect, including if the node is read-only.
 
Note that setting this attribute, when permitted, changes the
 nodeName attribute, which holds the qualified name, as
 well as the tagName and name attributes of
 the Element and Attr interfaces, when
 applicable.
 
Setting the prefix to null makes it unspecified,
 setting it to an empty string is implementation dependent.
 
Note also that changing the prefix of an attribute that is known to
 have a default value, does not make a new attribute with the default
 value and the original prefix appear, since the
 namespaceURI and localName do not change.
 
For nodes of any type other than ELEMENT_NODE and
 ATTRIBUTE_NODE and nodes created with a DOM Level 1
 method, such as createElement from the
 Document interface, this is always null.

> *Since 1.4, DOM Level 2*
