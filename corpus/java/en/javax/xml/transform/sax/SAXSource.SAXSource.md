---
id: "java-en-function-saxsource-saxsource"
language: "java"
lang: "en"
category: "function"
name: "SAXSource.SAXSource"
signature: "public SAXSource()"
title: "SAXSource.SAXSource"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXSource.SAXSource

```java
public SAXSource()
```

Zero-argument default constructor.  If this constructor is used, and
 no SAX source is set using
 `setInputSource` , then the
 Transformer will
 create an empty source `org.xml.sax.InputSource` using
 `InputSource`.

**参见**

- javax.xml.transform.Transformer#transform(Source xmlSource, Result outputTarget)
