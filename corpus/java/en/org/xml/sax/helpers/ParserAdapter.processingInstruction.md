---
id: "java-en-function-parseradapter-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "ParserAdapter.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.processingInstruction

```java
public void processingInstruction (String target, String data) throws SAXException
```

Adapter implementation method; do not call.
 Adapt a SAX1 processing instruction event.

**参数**

- **target** — The processing instruction target.
- **data** — The remainder of the processing instruction

**异常**

- **SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.DocumentHandler#processingInstruction
