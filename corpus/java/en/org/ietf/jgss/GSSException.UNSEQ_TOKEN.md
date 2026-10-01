---
id: "java-en-function-gssexception-unseq_token"
language: "java"
lang: "en"
category: "function"
name: "GSSException.UNSEQ_TOKEN"
signature: "public static final int UNSEQ_TOKEN = 21"
title: "GSSException.UNSEQ_TOKEN"
directive: "field"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.UNSEQ_TOKEN

```java
public static final int UNSEQ_TOKEN = 21
```

A later token has already been processed.  This is a
 fatal error code that may occur during context establishment.
 It is not used to indicate supplementary status values.
 The MessageProp object is used for that purpose.
