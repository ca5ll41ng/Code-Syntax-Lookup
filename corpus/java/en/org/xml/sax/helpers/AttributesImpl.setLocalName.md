---
id: "java-en-function-attributesimpl-setlocalname"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setLocalName"
signature: "public void setLocalName (int index, String localName)"
title: "AttributesImpl.setLocalName"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setLocalName

```java
public void setLocalName (int index, String localName)
```

Set the local name of a specific attribute.

**参数**

- **index** — The index of the attribute (zero-based).
- **localName** — The attribute's local name, or the empty string for none.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
