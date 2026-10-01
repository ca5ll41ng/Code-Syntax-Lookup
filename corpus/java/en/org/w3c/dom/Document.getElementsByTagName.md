---
id: "java-en-function-document-getelementsbytagname"
language: "java"
lang: "en"
category: "function"
name: "Document.getElementsByTagName"
signature: "public NodeList getElementsByTagName(String tagname)"
title: "Document.getElementsByTagName"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getElementsByTagName

```java
public NodeList getElementsByTagName(String tagname)
```

Returns a NodeList of all the Elements in
 document order with a given tag name and are contained in the
 document.

**参数**

- **tagname** — The name of the tag to match on. The special value "*" matches all tags. For XML, the tagname parameter is case-sensitive, otherwise it depends on the case-sensitivity of the markup language in use.

**返回**

- A new NodeList object containing all the matched Elements.
