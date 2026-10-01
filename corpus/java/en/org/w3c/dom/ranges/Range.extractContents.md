---
id: "java-en-function-range-extractcontents"
language: "java"
lang: "en"
category: "function"
name: "Range.extractContents"
signature: "public DocumentFragment extractContents() throws DOMException"
title: "Range.extractContents"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.extractContents

```java
public DocumentFragment extractContents() throws DOMException
```

Moves the contents of a Range from the containing document or document
 fragment to a new DocumentFragment.

**返回**

- A DocumentFragment containing the extracted contents.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if any portion of the content of the Range is read-only or any of the nodes which contain any of the content of the Range are read-only.  HIERARCHY_REQUEST_ERR: Raised if a DocumentType node would be extracted into the new DocumentFragment.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
