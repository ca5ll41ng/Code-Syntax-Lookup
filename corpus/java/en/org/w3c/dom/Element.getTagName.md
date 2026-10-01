---
id: "java-en-function-element-gettagname"
language: "java"
lang: "en"
category: "function"
name: "Element.getTagName"
signature: "public String getTagName()"
title: "Element.getTagName"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getTagName

```java
public String getTagName()
```

The name of the element. If Node.localName is different
 from null, this attribute is a qualified name. For
 example, in:
 
```
 &lt;elementExample id="demo"&gt; ...
 &lt;/elementExample&gt; , 
```

  tagName has the value
 "elementExample". Note that this is case-preserving in
 XML, as are all of the operations of the DOM. The HTML DOM returns
 the tagName of an HTML element in the canonical
 uppercase form, regardless of the case in the source HTML document.
