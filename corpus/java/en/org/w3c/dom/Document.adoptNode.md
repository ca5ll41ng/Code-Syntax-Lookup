---
id: "java-en-function-document-adoptnode"
language: "java"
lang: "en"
category: "function"
name: "Document.adoptNode"
signature: "public Node adoptNode(Node source) throws DOMException"
title: "Document.adoptNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.adoptNode

```java
public Node adoptNode(Node source) throws DOMException
```

Attempts to adopt a node from another document to this document. If
 supported, it changes the ownerDocument of the source
 node, its children, as well as the attached attribute nodes if there
 are any. If the source node has a parent it is first removed from the
 child list of its parent. This effectively allows moving a subtree
 from one document to another (unlike importNode() which
 create a copy of the source node instead of moving it). When it
 fails, applications should use Document.importNode()
 instead. Note that if the adopted node is already part of this
 document (i.e. the source and target document are the same), this
 method still has the effect of removing the source node from the
 child list of its parent, if any. The following list describes the
 specifics for each type of node.
 
 ATTRIBUTE_NODE
 The
 ownerElement attribute is set to null and
 the specified flag is set to true on the
 adopted Attr. The descendants of the source
 Attr are recursively adopted.
 DOCUMENT_FRAGMENT_NODE
 The
 descendants of the source node are recursively adopted.
 DOCUMENT_NODE
 
 Document nodes cannot be adopted.
 DOCUMENT_TYPE_NODE
 
 DocumentType nodes cannot be adopted.
 ELEMENT_NODE
 Specified attribute nodes of the source element are adopted. Default attributes
 are discarded, though if the document being adopted into defines
 default attributes for this element name, those are assigned. The
 descendants of the source element are recursively adopted.
 ENTITY_NODE
 
 Entity nodes cannot be adopted.
 ENTITY_REFERENCE_NODE
 Only
 the EntityReference node itself is adopted, the
 descendants are discarded, since the source and destination documents
 might have defined the entity differently. If the document being
 imported into provides a definition for this entity name, its value
 is assigned.
 NOTATION_NODE
 Notation nodes cannot be
 adopted.
 PROCESSING_INSTRUCTION_NODE, TEXT_NODE, CDATA_SECTION_NODE,
 COMMENT_NODE
 These nodes can all be adopted. No specifics.
 
 

**Note:**  Since it does not create new nodes unlike the
 Document.importNode() method, this method does not raise
 an INVALID_CHARACTER_ERR exception, and applications
 should use the Document.normalizeDocument() method to
 check if an imported name is not an XML name according to the XML
 version in use.

**参数**

- **source** — The node to move into this document.

**返回**

- The adopted node, or null if this operation fails, such as when the source node comes from a different implementation.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the source node is of type DOCUMENT, DOCUMENT_TYPE.  NO_MODIFICATION_ALLOWED_ERR: Raised when the source node is readonly.

> *Since 1.5, DOM Level 3*
