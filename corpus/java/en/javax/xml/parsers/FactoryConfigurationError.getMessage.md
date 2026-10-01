---
id: "java-en-function-factoryconfigurationerror-getmessage"
language: "java"
lang: "en"
category: "function"
name: "FactoryConfigurationError.getMessage"
signature: "public String getMessage ()"
title: "FactoryConfigurationError.getMessage"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/FactoryConfigurationError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FactoryConfigurationError.getMessage

```java
public String getMessage ()
```

Return the message (if any) for this error . If there is no
 message for the exception and there is an encapsulated
 exception then the message of that exception, if it exists will be
 returned. Else the name of the encapsulated exception will be
 returned.

**返回**

- The error message.
