---
id: "java-en-function-attributesimpl-removeattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.removeAttribute"
signature: "public void removeAttribute (int index)"
title: "AttributesImpl.removeAttribute"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.removeAttribute

```java
public void removeAttribute (int index)
```

Remove an attribute from the list.

**参数**

- **index** — The index of the attribute (zero-based).

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
