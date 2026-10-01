---
id: "java-en-function-parseradapter-setfeature"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.setFeature"
signature: "public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ParserAdapter.setFeature"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.setFeature

```java
public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set a feature flag for the parser.

 

The only features recognized are namespaces and
 namespace-prefixes.

**参数**

- **name** — The feature name, as a complete URI.
- **value** — The requested feature value.

**异常**

- **SAXNotRecognizedException** — If the feature can't be assigned or retrieved.
- **SAXNotSupportedException** — If the feature can't be assigned that value.

**参见**

- org.xml.sax.XMLReader#setFeature
