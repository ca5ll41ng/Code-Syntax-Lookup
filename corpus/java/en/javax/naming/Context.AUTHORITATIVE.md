---
id: "java-en-function-context-authoritative"
language: "java"
lang: "en"
category: "function"
name: "Context.AUTHORITATIVE"
signature: "String AUTHORITATIVE = \"java.naming.authoritative\""
title: "Context.AUTHORITATIVE"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.AUTHORITATIVE

```java
String AUTHORITATIVE = "java.naming.authoritative"
```

Constant that holds the name of the environment property for
 specifying the authoritativeness of the service requested.
 If the value of the property is the string "true", it means
 that the access is to the most authoritative source (i.e. bypass
 any cache or replicas). If the value is anything else,
 the source need not be (but may be) authoritative.
 If unspecified, the value defaults to "false".

 

 The value of this constant is "java.naming.authoritative".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
