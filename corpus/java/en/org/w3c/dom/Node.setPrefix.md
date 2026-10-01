---
id: "java-en-function-node-setprefix"
language: "java"
lang: "en"
category: "function"
name: "Node.setPrefix"
signature: "public void setPrefix(String prefix) throws DOMException"
title: "Node.setPrefix"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.setPrefix

```java
public void setPrefix(String prefix) throws DOMException
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

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified prefix contains an illegal character according to the XML version in use specified in the Document.xmlVersion attribute.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NAMESPACE_ERR: Raised if the specified prefix is malformed per the Namespaces in XML specification, if the namespaceURI of this node is null, if the specified prefix is "xml" and the namespaceURI of this node is different from " http://www.w3.org/XML/1998/namespace", if this node is an attribute and the specified prefix is "xmlns" and the namespaceURI of this node is different from "http://www.w3.org/2000/xmlns/", or if this node is an attribute and the qualifiedName of this node is "xmlns" [XML Namespaces] .

> *Since 1.4, DOM Level 2*
