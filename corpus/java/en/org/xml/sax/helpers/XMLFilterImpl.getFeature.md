---
id: "java-en-function-xmlfilterimpl-getfeature"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.getFeature"
signature: "public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLFilterImpl.getFeature"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.getFeature

```java
public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a feature.

 

This will always fail if the parent is null.

**参数**

- **name** — The feature name.

**返回**

- The current value of the feature.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the feature value can't be assigned or retrieved from the parent.
- **org.xml.sax.SAXNotSupportedException** — When the parent recognizes the feature name but cannot determine its value at this time.
