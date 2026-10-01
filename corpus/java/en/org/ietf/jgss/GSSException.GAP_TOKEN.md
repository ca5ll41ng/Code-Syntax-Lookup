---
id: "java-en-function-gssexception-gap_token"
language: "java"
lang: "en"
category: "function"
name: "GSSException.GAP_TOKEN"
signature: "public static final int GAP_TOKEN = 22"
title: "GSSException.GAP_TOKEN"
directive: "field"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.GAP_TOKEN

```java
public static final int GAP_TOKEN = 22
```

An expected per-message token was not received.  This is a
 fatal error code that may occur during context establishment.
 It is not used to indicate supplementary status values.
 The MessageProp object is used for that purpose.
