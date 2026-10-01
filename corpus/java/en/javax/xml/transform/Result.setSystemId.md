---
id: "java-en-function-result-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "Result.setSystemId"
signature: "public void setSystemId(String systemId)"
title: "Result.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Result.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Result.setSystemId

```java
public void setSystemId(String systemId)
```

Set the system identifier for this Result.

 

If the Result is not to be written to a file, the system identifier is optional.
 The application may still want to provide one, however, for use in error messages
 and warnings, or to resolve relative output identifiers.

**参数**

- **systemId** — The system identifier as a URI string.
