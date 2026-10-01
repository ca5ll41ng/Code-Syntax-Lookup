---
id: "java-en-function-saxtransformerfactory-feature"
language: "java"
lang: "en"
category: "function"
name: "SAXTransformerFactory.FEATURE"
signature: "public static final String FEATURE = \"http://javax.xml.transform.sax.SAXTransformerFactory/feature\""
title: "SAXTransformerFactory.FEATURE"
directive: "field"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXTransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXTransformerFactory.FEATURE

```java
public static final String FEATURE = "http://javax.xml.transform.sax.SAXTransformerFactory/feature"
```

If `getFeature`
 returns true when passed this value as an argument,
 the TransformerFactory returned from
 `newInstance` may
 be safely cast to a SAXTransformerFactory.
