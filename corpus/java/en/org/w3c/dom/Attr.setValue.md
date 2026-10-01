---
id: "java-en-function-attr-setvalue"
language: "java"
lang: "en"
category: "function"
name: "Attr.setValue"
signature: "public void setValue(String value) throws DOMException"
title: "Attr.setValue"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Attr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attr.setValue

```java
public void setValue(String value) throws DOMException
```

On retrieval, the value of the attribute is returned as a string.
 Character and general entity references are replaced with their
 values. See also the method getAttribute on the
 Element interface.
 
On setting, this creates a Text node with the unparsed
 contents of the string, i.e. any characters that an XML processor
 would recognize as markup are instead treated as literal text. See
 also the method Element.setAttribute().
 
 Some specialized implementations, such as some [SVG 1.1]
 implementations, may do normalization automatically, even after
 mutation; in such case, the value on retrieval may differ from the
 value on setting.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised when the node is readonly.
