---
id: "java-en-function-unsolicitednotification-getexception"
language: "java"
lang: "en"
category: "function"
name: "UnsolicitedNotification.getException"
signature: "public NamingException getException()"
title: "UnsolicitedNotification.getException"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/UnsolicitedNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsolicitedNotification.getException

```java
public NamingException getException()
```

Retrieves the exception as constructed using information
 sent by the server.

**返回**

- A possibly null exception as constructed using information sent by the server. If null, a "success" status was indicated by the server.
