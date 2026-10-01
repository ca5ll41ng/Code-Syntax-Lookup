---
id: "java-en-function-xmlreaderadapter-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "XMLReaderAdapter.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.processingInstruction

```java
public void processingInstruction (String target, String data) throws SAXException
```

Adapt a SAX2 processing instruction event.

**参数**

- **target** — The processing instruction target.
- **data** — The remainder of the processing instruction

**异常**

- **org.xml.sax.SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.ContentHandler#processingInstruction
