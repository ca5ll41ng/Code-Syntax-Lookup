---
id: "java-en-function-staxresult-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "StAXResult.setSystemId"
signature: "public void setSystemId(final String systemId)"
title: "StAXResult.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXResult.setSystemId

```java
public void setSystemId(final String systemId)
```

In the context of a StAXResult, it is not appropriate
 to explicitly set the system identifier.
 The XMLEventWriter or XMLStreamWriter
 used to construct this StAXResult determines the
 system identifier of the XML result.

 

An `UnsupportedOperationException` is **always**
 thrown by this method.

**参数**

- **systemId** — Ignored.

**异常**

- **UnsupportedOperationException** — Is **always** thrown by this method.
