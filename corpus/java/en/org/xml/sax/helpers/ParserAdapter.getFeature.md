---
id: "java-en-function-parseradapter-getfeature"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.getFeature"
signature: "public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ParserAdapter.getFeature"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.getFeature

```java
public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Check a parser feature flag.

 

The only features recognized are namespaces and
 namespace-prefixes.

**参数**

- **name** — The feature name, as a complete URI.

**返回**

- The current feature value.

**异常**

- **SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **SAXNotSupportedException** — If the feature is not currently readable.

**参见**

- org.xml.sax.XMLReader#setFeature
