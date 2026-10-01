---
id: "java-en-function-xmlfilterimpl-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "XMLFilterImpl.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.processingInstruction

```java
public void processingInstruction (String target, String data) throws SAXException
```

Filter a processing instruction event.

**参数**

- **target** — The processing instruction target.
- **data** — The text following the target.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
