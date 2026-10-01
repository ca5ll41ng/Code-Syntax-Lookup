---
id: "java-en-function-lsparser-parsewithcontext"
language: "java"
lang: "en"
category: "function"
name: "LSParser.parseWithContext"
signature: "public Node parseWithContext(LSInput input, Node contextArg, short action) throws DOMException, LSException"
title: "LSParser.parseWithContext"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser.parseWithContext

```java
public Node parseWithContext(LSInput input, Node contextArg, short action) throws DOMException, LSException
```

Parse an XML fragment from a resource identified by a
 LSInput and insert the content into an existing document
 at the position specified with the context and
 action arguments. When parsing the input stream, the
 context node (or its parent, depending on where the result will be
 inserted) is used for resolving unbound namespace prefixes. The
 context node's ownerDocument node (or the node itself if
 the node of type DOCUMENT_NODE) is used to resolve
 default attributes and entity references.
 
 As the new data is inserted into the document, at least one
 mutation event is fired per new immediate child or sibling of the
 context node.
 
 If the context node is a Document node and the action
 is ACTION_REPLACE_CHILDREN, then the document that is
 passed as the context node will be changed such that its
 xmlEncoding, documentURI,
 xmlVersion, inputEncoding,
 xmlStandalone, and all other such attributes are set to
 what they would be set to if the input source was parsed using
 LSParser.parse().
 
 This method is always synchronous, even if the
 LSParser is asynchronous (LSParser.async is
 true).
 
 If an error occurs while parsing, the caller is notified through
 the ErrorHandler instance associated with the
 "error-handler"
 parameter of the DOMConfiguration.
 
 When calling parseWithContext, the values of the
 following configuration parameters will be ignored and their default
 values will always be used instead:
 "validate",
 "validate-if-schema",
 and
 "element-content-whitespace".
 Other parameters will be treated normally, and the parser is expected
 to call the LSParserFilter just as if a whole document
 was parsed.

**参数**

- **input** — The LSInput from which the source document is to be read. The source document must be an XML fragment, i.e. anything except a complete XML document (except in the case where the context node of type DOCUMENT_NODE, and the action is ACTION_REPLACE_CHILDREN), a DOCTYPE (internal subset), entity declaration(s), notation declaration(s), or XML or text declaration(s).
- **contextArg** — The node that is used as the context for the data that is being parsed. This node must be a Document node, a DocumentFragment node, or a node of a type that is allowed as a child of an Element node, e.g. it cannot be an Attribute node.
- **action** — This parameter describes which action should be taken between the new set of nodes being inserted and the existing children of the context node. The set of possible actions is defined in ACTION_TYPES above.

**返回**

- Return the node that is the result of the parse operation. If the result is more than one top-level node, the first one is returned.

**异常**

- **DOMException** — HIERARCHY_REQUEST_ERR: Raised if the content cannot replace, be inserted before, after, or as a child of the context node (see also Node.insertBefore or Node.replaceChild in [DOM Level 3 Core] ).  NOT_SUPPORTED_ERR: Raised if the LSParser doesn't support this method, or if the context node is of type Document and the DOM implementation doesn't support the replacement of the DocumentType child or Element child.  NO_MODIFICATION_ALLOWED_ERR: Raised if the context node is a read only node and the content is being appended to its child list, or if the parent node of the context node is read only node and the content is being inserted in its child list.  INVALID_STATE_ERR: Raised if the LSParser.busy attribute is true.
- **LSException** — PARSE_ERR: Raised if the LSParser was unable to load the XML fragment. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
