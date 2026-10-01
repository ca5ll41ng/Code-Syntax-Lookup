---
id: "java-en-function-context-dns_url"
language: "java"
lang: "en"
category: "function"
name: "Context.DNS_URL"
signature: "String DNS_URL = \"java.naming.dns.url\""
title: "Context.DNS_URL"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.DNS_URL

```java
String DNS_URL = "java.naming.dns.url"
```

Constant that holds the name of the environment property
 for specifying the DNS host and domain names to use for the
 JNDI URL context (for example, "dns://somehost/wiz.com").
 This property may be specified in the environment, a system property,
 or a resource file.
 If it is not specified in any of these sources
 and the program attempts to use a JNDI URL containing a DNS name,
 a `ConfigurationException` will be thrown.

 

 The value of this constant is "java.naming.dns.url".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
