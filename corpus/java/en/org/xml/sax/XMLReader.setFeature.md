---
id: "java-en-function-xmlreader-setfeature"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setFeature"
signature: "public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLReader.setFeature"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setFeature

```java
public void setFeature (String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a feature flag.

 

The feature name is any fully-qualified URI.  It is
 possible for an XMLReader to expose a feature value but
 to be unable to change the current value.
 Some feature values may be immutable or mutable only
 in specific contexts, such as before, during, or after
 a parse.

 

All XMLReaders are required to support setting
 http://xml.org/sax/features/namespaces to true and
 http://xml.org/sax/features/namespace-prefixes to false.

**参数**

- **name** — The feature name, which is a fully-qualified URI.
- **value** — The requested value of the feature (true or false).

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **org.xml.sax.SAXNotSupportedException** — When the XMLReader recognizes the feature name but cannot set the requested value.

**参见**

- #getFeature
