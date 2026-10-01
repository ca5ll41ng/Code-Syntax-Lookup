---
id: "java-en-function-attributelistimpl-addattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeListImpl.addAttribute"
signature: "public void addAttribute (String name, String type, String value)"
title: "AttributeListImpl.addAttribute"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributeListImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListImpl.addAttribute

```java
public void addAttribute (String name, String type, String value)
```

Add an attribute to an attribute list.

 

This method is provided for SAX parser writers, to allow them
 to build up an attribute list incrementally before delivering
 it to the application.

**参数**

- **name** — The attribute name.
- **type** — The attribute type ("NMTOKEN" for an enumeration).
- **value** — The attribute value (must not be null).

**参见**

- #removeAttribute
- org.xml.sax.DocumentHandler#startElement
