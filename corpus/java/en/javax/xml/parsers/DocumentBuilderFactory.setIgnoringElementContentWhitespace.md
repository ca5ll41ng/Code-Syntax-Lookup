---
id: "java-en-function-documentbuilderfactory-setignoringelementcontentwhitespace"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setIgnoringElementContentWhitespace"
signature: "public void setIgnoringElementContentWhitespace(boolean whitespace)"
title: "DocumentBuilderFactory.setIgnoringElementContentWhitespace"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setIgnoringElementContentWhitespace

```java
public void setIgnoringElementContentWhitespace(boolean whitespace)
```

Specifies that the parsers created by this  factory must eliminate
 whitespace in element content (sometimes known loosely as
 'ignorable whitespace') when parsing XML documents (see XML Rec
 2.10). Note that only whitespace which is directly contained within
 element content that has an element only content model (see XML
 Rec 3.2.1) will be eliminated. Due to reliance on the content model
 this setting requires the parser to be in validating mode. By default
 the value of this is set to `false`.

**参数**

- **whitespace** — true if the parser created must eliminate whitespace in the element content when parsing XML documents; false otherwise.
