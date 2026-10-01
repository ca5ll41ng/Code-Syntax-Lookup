---
id: "java-en-function-attributesimpl-setvalue"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setValue"
signature: "public void setValue (int index, String value)"
title: "AttributesImpl.setValue"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setValue

```java
public void setValue (int index, String value)
```

Set the value of a specific attribute.

**参数**

- **index** — The index of the attribute (zero-based).
- **value** — The attribute's value.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
