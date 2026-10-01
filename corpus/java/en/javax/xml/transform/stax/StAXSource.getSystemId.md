---
id: "java-en-function-staxsource-getsystemid"
language: "java"
lang: "en"
category: "function"
name: "StAXSource.getSystemId"
signature: "public String getSystemId()"
title: "StAXSource.getSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXSource.getSystemId

```java
public String getSystemId()
```

Get the system identifier used by this
 StAXSource.

 

The XMLStreamReader or XMLEventReader
 used to construct this StAXSource is queried to determine
 the system identifier of the XML source.

 

The system identifier may be null or
 an empty "" String.

**返回**

- System identifier used by this StAXSource.
