---
id: "java-en-function-lsparserfilter-startelement"
language: "java"
lang: "en"
category: "function"
name: "LSParserFilter.startElement"
signature: "public short startElement(Element elementArg)"
title: "LSParserFilter.startElement"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParserFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParserFilter.startElement

```java
public short startElement(Element elementArg)
```

The parser will call this method after each Element start
 tag has been scanned, but before the remainder of the
 Element is processed. The intent is to allow the
 element, including any children, to be efficiently skipped. Note that
 only element nodes are passed to the startElement
 function.
 
The element node passed to startElement for filtering
 will include all of the Element's attributes, but none of the
 children nodes. The Element may not yet be in place in the document
 being constructed (it may not have a parent node.)
 
A startElement filter function may access or change
 the attributes for the Element. Changing Namespace declarations will
 have no effect on namespace resolution by the parser.
 
For efficiency, the Element node passed to the filter may not be
 the same one as is actually placed in the tree if the node is
 accepted. And the actual node (node object identity) may be reused
 during the process of reading in and filtering a document.

**参数**

- **elementArg** — The newly encountered element. At the time this method is called, the element is incomplete - it will have its attributes, but no children.

**返回**

- -  FILTER_ACCEPT if the Element should be included in the DOM document being built.   - FILTER_REJECT if the Element and all of its children should be rejected.   -  FILTER_SKIP if the Element should be skipped. All of its children are inserted in place of the skipped Element node.   - FILTER_INTERRUPT if the filter wants to stop the processing of the document. Interrupting the processing of the document does no longer guarantee that the resulting DOM tree is XML well-formed. The Element is rejected.   Returning any other values will result in unspecified behavior.
