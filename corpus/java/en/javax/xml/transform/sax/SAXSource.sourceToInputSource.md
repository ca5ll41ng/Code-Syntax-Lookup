---
id: "java-en-function-saxsource-sourcetoinputsource"
language: "java"
lang: "en"
category: "function"
name: "SAXSource.sourceToInputSource"
signature: "public static InputSource sourceToInputSource(Source source)"
title: "SAXSource.sourceToInputSource"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXSource.sourceToInputSource

```java
public static InputSource sourceToInputSource(Source source)
```

Attempt to obtain a SAX InputSource object from a Source
 object.

**参数**

- **source** — Must be a non-null Source reference.

**返回**

- An InputSource, or null if Source can not be converted.
