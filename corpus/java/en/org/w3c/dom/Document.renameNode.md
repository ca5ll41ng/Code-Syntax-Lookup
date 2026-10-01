---
id: "java-en-function-document-renamenode"
language: "java"
lang: "en"
category: "function"
name: "Document.renameNode"
signature: "public Node renameNode(Node n, String namespaceURI, String qualifiedName) throws DOMException"
title: "Document.renameNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.renameNode

```java
public Node renameNode(Node n, String namespaceURI, String qualifiedName) throws DOMException
```

Rename an existing node of type ELEMENT_NODE or
 ATTRIBUTE_NODE.
 
When possible this simply changes the name of the given node,
 otherwise this creates a new node with the specified name and
 replaces the existing node with the new node as described below.
 
If simply changing the name of the given node is not possible, the
 following operations are performed: a new node is created, any
 registered event listener is registered on the new node, any user
 data attached to the old node is removed from that node, the old node
 is removed from its parent if it has one, the children are moved to
 the new node, if the renamed node is an Element its
 attributes are moved to the new node, the new node is inserted at the
 position the old node used to have in its parent's child nodes list
 if it has one, the user data that was attached to the old node is
 attached to the new node.
 
When the node being renamed is an Element only the
 specified attributes are moved, default attributes originated from
 the DTD are updated according to the new element name. In addition,
 the implementation may update default attributes from other schemas.
 Applications should use Document.normalizeDocument() to
 guarantee these attributes are up-to-date.
 
When the node being renamed is an Attr that is
 attached to an Element, the node is first removed from
 the Element attributes map. Then, once renamed, either
 by modifying the existing node or creating a new one as described
 above, it is put back.
 
In addition,
 
 
-  a user data event NODE_RENAMED is fired,
 
 
- 
 when the implementation supports the feature "MutationNameEvents",
 each mutation operation involved in this method fires the appropriate
 event, and in the end the event {
 http://www.w3.org/2001/xml-events,
 DOMElementNameChanged} or {
 http://www.w3.org/2001/xml-events,
 DOMAttributeNameChanged} is fired.

**参数**

- **n** — The node to rename.
- **namespaceURI** — The new namespace URI.
- **qualifiedName** — The new qualified name.

**返回**

- The renamed node. This is either the specified node or the new node that was created to replace the specified node.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised when the type of the specified node is neither ELEMENT_NODE nor ATTRIBUTE_NODE, or if the implementation does not support the renaming of the document element.  INVALID_CHARACTER_ERR: Raised if the new qualified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  WRONG_DOCUMENT_ERR: Raised when the specified node was created from a different document than this document.  NAMESPACE_ERR: Raised if the qualifiedName is a malformed qualified name, if the qualifiedName has a prefix and the namespaceURI is null, or if the qualifiedName has a prefix that is "xml" and the namespaceURI is different from " http://www.w3.org/XML/1998/namespace" [XML Namespaces] . Also raised, when the node being renamed is an attribute, if the qualifiedName, or its prefix, is "xmlns" and the namespaceURI is different from "http://www.w3.org/2000/xmlns/".

> *Since 1.5, DOM Level 3*
