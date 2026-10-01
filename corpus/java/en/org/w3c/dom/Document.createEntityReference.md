---
id: "java-en-function-document-createentityreference"
language: "java"
lang: "en"
category: "function"
name: "Document.createEntityReference"
signature: "public EntityReference createEntityReference(String name) throws DOMException"
title: "Document.createEntityReference"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createEntityReference

```java
public EntityReference createEntityReference(String name) throws DOMException
```

Creates an EntityReference object. In addition, if the
 referenced entity is known, the child list of the
 EntityReference node is made the same as that of the
 corresponding Entity node.
 

**Note:** If any descendant of the Entity node has
 an unbound namespace prefix, the corresponding descendant of the
 created EntityReference node is also unbound; (its
 namespaceURI is null). The DOM Level 2 and
 3 do not support any mechanism to resolve namespace prefixes in this
 case.

**参数**

- **name** — The name of the entity to reference.Unlike Document.createElementNS or Document.createAttributeNS, no namespace well-formed checking is done on the entity name. Applications should invoke Document.normalizeDocument() with the parameter " namespaces" set to true in order to ensure that the entity name is namespace well-formed.

**返回**

- The new EntityReference object.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  NOT_SUPPORTED_ERR: Raised if this document is an HTML document.
