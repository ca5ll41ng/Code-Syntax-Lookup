---
id: "java-en-function-element-removeattribute"
language: "java"
lang: "en"
category: "function"
name: "Element.removeAttribute"
signature: "public void removeAttribute(String name) throws DOMException"
title: "Element.removeAttribute"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.removeAttribute

```java
public void removeAttribute(String name) throws DOMException
```

Removes an attribute by name. If a default value for the removed
 attribute is defined in the DTD, a new attribute immediately appears
 with the default value as well as the corresponding namespace URI,
 local name, and prefix when applicable. The implementation may handle
 default values from other schemas similarly but applications should
 use Document.normalizeDocument() to guarantee this
 information is up-to-date.
 
If no attribute with this name is found, this method has no effect.
 
To remove an attribute by local name and namespace URI, use the
 removeAttributeNS method.

**参数**

- **name** — The name of the attribute to remove.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
