---
id: "java-en-function-document-importnode"
language: "java"
lang: "en"
category: "function"
name: "Document.importNode"
signature: "public Node importNode(Node importedNode, boolean deep) throws DOMException"
title: "Document.importNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.importNode

```java
public Node importNode(Node importedNode, boolean deep) throws DOMException
```

Imports a node from another document to this document, without altering
 or removing the source node from the original document; this method
 creates a new copy of the source node. The returned node has no
 parent; (parentNode is null).
 
For all nodes, importing a node creates a node object owned by the
 importing document, with attribute values identical to the source
 node's nodeName and nodeType, plus the
 attributes related to namespaces (prefix,
 localName, and namespaceURI). As in the
 cloneNode operation, the source node is not altered.
 User data associated to the imported node is not carried over.
 However, if any UserDataHandlers has been specified
 along with the associated data these handlers will be called with the
 appropriate parameters before this method returns.
 
Additional information is copied as appropriate to the
 nodeType, attempting to mirror the behavior expected if
 a fragment of XML or HTML source was copied from one document to
 another, recognizing that the two documents may have different DTDs
 in the XML case. The following list describes the specifics for each
 type of node.
 
 ATTRIBUTE_NODE
 The ownerElement attribute
 is set to null and the specified flag is
 set to true on the generated Attr. The
 descendants of the source Attr are recursively imported
 and the resulting nodes reassembled to form the corresponding subtree.
 Note that the deep parameter has no effect on
 Attr nodes; they always carry their children with them
 when imported.
 DOCUMENT_FRAGMENT_NODE
 If the deep option
 was set to true, the descendants of the source
 DocumentFragment are recursively imported and the
 resulting nodes reassembled under the imported
 DocumentFragment to form the corresponding subtree.
 Otherwise, this simply generates an empty
 DocumentFragment.
 DOCUMENT_NODE
 Document
 nodes cannot be imported.
 DOCUMENT_TYPE_NODE
 DocumentType
 nodes cannot be imported.
 ELEMENT_NODE
 Specified attribute nodes of the source element are imported, and the generated
 Attr nodes are attached to the generated
 Element. Default attributes are not copied, though if the document being imported into defines default
 attributes for this element name, those are assigned. If the
 importNode deep parameter was set to
 true, the descendants of the source element are
 recursively imported and the resulting nodes reassembled to form the
 corresponding subtree.
 ENTITY_NODE
 Entity nodes can be
 imported, however in the current release of the DOM the
 DocumentType is readonly. Ability to add these imported
 nodes to a DocumentType will be considered for addition
 to a future release of the DOM.On import, the publicId,
 systemId, and notationName attributes are
 copied. If a deep import is requested, the descendants
 of the the source Entity are recursively imported and
 the resulting nodes reassembled to form the corresponding subtree.
 
 ENTITY_REFERENCE_NODE
 Only the EntityReference itself is
 copied, even if a deep import is requested, since the
 source and destination documents might have defined the entity
 differently. If the document being imported into provides a
 definition for this entity name, its value is assigned.
 NOTATION_NODE
 
 Notation nodes can be imported, however in the current
 release of the DOM the DocumentType is readonly. Ability
 to add these imported nodes to a DocumentType will be
 considered for addition to a future release of the DOM.On import, the
 publicId and systemId attributes are copied.
 Note that the deep parameter has no effect on this type
 of nodes since they cannot have any children.
 
 PROCESSING_INSTRUCTION_NODE
 The imported node copies its
 target and data values from those of the
 source node.Note that the deep parameter has no effect
 on this type of nodes since they cannot have any children.
 TEXT_NODE,
 CDATA_SECTION_NODE, COMMENT_NODE
 These three types of nodes inheriting
 from CharacterData copy their data and
 length attributes from those of the source node.Note
 that the deep parameter has no effect on these types of
 nodes since they cannot have any children.

**参数**

- **importedNode** — The node to import.
- **deep** — If true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above. This has no effect on nodes that cannot have any children, and on Attr, and EntityReference nodes.

**返回**

- The imported node that belongs to this Document.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the type of node being imported is not supported.  INVALID_CHARACTER_ERR: Raised if one of the imported names is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute. This may happen when importing an XML 1.1 [XML 1.1] element into an XML 1.0 document, for instance.

> *Since 1.4, DOM Level 2*
