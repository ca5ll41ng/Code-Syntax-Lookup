---
id: "java-en-function-xmlfilterimpl-setfeature"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.setFeature"
signature: "public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLFilterImpl.setFeature"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.setFeature

```java
public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a feature.

 

This will always fail if the parent is null.

**参数**

- **name** — The feature name.
- **value** — The requested feature value.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the feature value can't be assigned or retrieved from the parent.
- **org.xml.sax.SAXNotSupportedException** — When the parent recognizes the feature name but cannot set the requested value.
