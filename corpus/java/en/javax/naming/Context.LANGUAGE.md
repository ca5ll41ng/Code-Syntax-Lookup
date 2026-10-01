---
id: "java-en-function-context-language"
language: "java"
lang: "en"
category: "function"
name: "Context.LANGUAGE"
signature: "String LANGUAGE = \"java.naming.language\""
title: "Context.LANGUAGE"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.LANGUAGE

```java
String LANGUAGE = "java.naming.language"
```

Constant that holds the name of the environment property for
 specifying the preferred language to use with the service.
 The value of the property is a colon-separated list of language
 tags as defined in RFC 1766.
 If this property is unspecified,
 the language preference is determined by the service provider.

 

 The value of this constant is "java.naming.language".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
