---
id: "java-en-function-documentbuilderfactory-newdocumentbuilder"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.newDocumentBuilder"
signature: "public abstract DocumentBuilder newDocumentBuilder() throws ParserConfigurationException"
title: "DocumentBuilderFactory.newDocumentBuilder"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.newDocumentBuilder

```java
public abstract DocumentBuilder newDocumentBuilder() throws ParserConfigurationException
```

Creates a new instance of a `javax.xml.parsers.DocumentBuilder`
 using the currently configured parameters.

**返回**

- A new instance of a DocumentBuilder.

**异常**

- **ParserConfigurationException** — if a DocumentBuilder cannot be created which satisfies the configuration requested.
