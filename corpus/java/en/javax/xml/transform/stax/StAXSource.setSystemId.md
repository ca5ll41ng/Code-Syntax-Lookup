---
id: "java-en-function-staxsource-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "StAXSource.setSystemId"
signature: "public void setSystemId(final String systemId)"
title: "StAXSource.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXSource.setSystemId

```java
public void setSystemId(final String systemId)
```

In the context of a StAXSource, it is not appropriate
 to explicitly set the system identifier.
 The XMLStreamReader or XMLEventReader
 used to construct this StAXSource determines the
 system identifier of the XML source.

 

An `UnsupportedOperationException` is **always**
 thrown by this method.

**参数**

- **systemId** — Ignored.

**异常**

- **UnsupportedOperationException** — Is **always** thrown by this method.
