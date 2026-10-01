---
id: "java-en-function-saxsource-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "SAXSource.setSystemId"
signature: "public void setSystemId(String systemId)"
title: "SAXSource.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXSource.setSystemId

```java
public void setSystemId(String systemId)
```

Set the system identifier for this Source.  If an input source
 has already been set, it will set the system ID or that
 input source, otherwise it will create a new input source.

 

The system identifier is optional if there is a byte stream
 or a character stream, but it is still useful to provide one,
 since the application can use it to resolve relative URIs
 and can include it in error messages and warnings (the parser
 will attempt to open a connection to the URI only if
 no byte stream or character stream is specified).

**参数**

- **systemId** — The system identifier as a URI string.
