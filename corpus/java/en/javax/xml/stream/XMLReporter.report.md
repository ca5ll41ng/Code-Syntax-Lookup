---
id: "java-en-function-xmlreporter-report"
language: "java"
lang: "en"
category: "function"
name: "XMLReporter.report"
signature: "public void report(String message, String errorType, Object relatedInformation, Location location) throws XMLStreamException"
title: "XMLReporter.report"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLReporter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReporter.report

```java
public void report(String message, String errorType, Object relatedInformation, Location location) throws XMLStreamException
```

Report the desired message in an application specific format.
 Only warnings and non-fatal errors should be reported through
 this interface.
 Fatal errors should be thrown as XMLStreamException.

**参数**

- **message** — the error message
- **errorType** — an implementation defined error type
- **relatedInformation** — information related to the error, if available
- **location** — the location of the error, if available

**异常**

- **XMLStreamException** — if an error occurs
