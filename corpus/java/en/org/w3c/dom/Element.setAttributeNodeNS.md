---
id: "java-en-function-element-setattributenodens"
language: "java"
lang: "en"
category: "function"
name: "Element.setAttributeNodeNS"
signature: "public Attr setAttributeNodeNS(Attr newAttr) throws DOMException"
title: "Element.setAttributeNodeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setAttributeNodeNS

```java
public Attr setAttributeNodeNS(Attr newAttr) throws DOMException
```

Adds a new attribute. If an attribute with that local name and that
 namespace URI is already present in the element, it is replaced by
 the new one. Replacing an attribute node by itself has no effect.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **newAttr** — The Attr node to add to the attribute list.

**返回**

- If the newAttr attribute replaces an existing attribute with the same local name and namespace URI, the replaced Attr node is returned, otherwise null is returned.

**异常**

- **DOMException** — WRONG_DOCUMENT_ERR: Raised if newAttr was created from a different document than the one that created the element.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  INUSE_ATTRIBUTE_ERR: Raised if newAttr is already an attribute of another Element object. The DOM user must explicitly clone Attr nodes to re-use them in other elements.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
