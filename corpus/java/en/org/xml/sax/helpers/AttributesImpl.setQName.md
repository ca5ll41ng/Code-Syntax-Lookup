---
id: "java-en-function-attributesimpl-setqname"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setQName"
signature: "public void setQName (int index, String qName)"
title: "AttributesImpl.setQName"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setQName

```java
public void setQName (int index, String qName)
```

Set the qualified name of a specific attribute.

**参数**

- **index** — The index of the attribute (zero-based).
- **qName** — The attribute's qualified name, or the empty string for none.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
