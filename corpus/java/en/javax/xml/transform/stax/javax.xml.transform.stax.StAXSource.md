---
id: "java-en-function-javax-xml-transform-stax-staxsource"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.stax.StAXSource"
title: "StAXSource"
directive: "type"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXSource

Acts as a holder for an XML `Source` in the
 form of a StAX reader,i.e.
 `XMLStreamReader` or `XMLEventReader`.
 StAXSource can be used in all cases that accept
 a Source, e.g. `javax.xml.transform.Transformer`,
 `javax.xml.validation.Validator` which accept
 Source as input.

 

StAXSources are consumed during processing
 and are not reusable.

**参见**

- JSR 173: Streaming API for XML
- XMLStreamReader
- XMLEventReader

> *Since 1.6*
