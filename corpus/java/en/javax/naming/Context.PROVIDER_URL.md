---
id: "java-en-function-context-provider_url"
language: "java"
lang: "en"
category: "function"
name: "Context.PROVIDER_URL"
signature: "String PROVIDER_URL = \"java.naming.provider.url\""
title: "Context.PROVIDER_URL"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.PROVIDER_URL

```java
String PROVIDER_URL = "java.naming.provider.url"
```

Constant that holds the name of the environment property
 for specifying configuration information for the service provider
 to use. The value of the property should contain a URL string
 (e.g. "ldap://somehost:389").
 This property may be specified in the environment, a system property,
 or a resource file.
 If it is not specified in any of these sources,
 the default configuration is determined by the service provider.

 

 The value of this constant is "java.naming.provider.url".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
