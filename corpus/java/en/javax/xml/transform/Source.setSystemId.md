---
id: "java-en-function-source-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "Source.setSystemId"
signature: "public void setSystemId(String systemId)"
title: "Source.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Source.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Source.setSystemId

```java
public void setSystemId(String systemId)
```

Set the system identifier for this Source.

 

The system identifier is optional if the source does not
 get its data from a URL, but it may still be useful to provide one.
 The application can use a system identifier, for example, to resolve
 relative URIs and to include in error messages and warnings.

**参数**

- **systemId** — The system identifier as a URL string.
