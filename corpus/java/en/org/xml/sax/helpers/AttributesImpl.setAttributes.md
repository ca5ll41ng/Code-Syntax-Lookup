---
id: "java-en-function-attributesimpl-setattributes"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setAttributes"
signature: "public void setAttributes (Attributes atts)"
title: "AttributesImpl.setAttributes"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setAttributes

```java
public void setAttributes (Attributes atts)
```

Copy an entire Attributes object.

 

It may be more efficient to reuse an existing object
 rather than constantly allocating new ones.

**参数**

- **atts** — The attributes to copy.
