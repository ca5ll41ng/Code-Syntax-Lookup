---
id: "java-en-function-context-url_pkg_prefixes"
language: "java"
lang: "en"
category: "function"
name: "Context.URL_PKG_PREFIXES"
signature: "String URL_PKG_PREFIXES = \"java.naming.factory.url.pkgs\""
title: "Context.URL_PKG_PREFIXES"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.URL_PKG_PREFIXES

```java
String URL_PKG_PREFIXES = "java.naming.factory.url.pkgs"
```

Constant that holds the name of the environment property
 for specifying the list of package prefixes to use when
 loading in URL context factories. The value
 of the property should be a colon-separated list of package
 prefixes for the class name of the factory class that will create
 a URL context factory.
 This property may be specified in the environment, a system property,
 or one or more resource files.
 The prefix `com.sun.jndi.url` is always appended to
 the possibly empty list of package prefixes.

 

 The value of this constant is "java.naming.factory.url.pkgs".

**参见**

- javax.naming.spi.NamingManager#getObjectInstance
- javax.naming.spi.NamingManager#getURLContext
- javax.naming.spi.ObjectFactory
- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
