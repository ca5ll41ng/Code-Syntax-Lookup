---
id: "java-en-function-gssexception-duplicate_token"
language: "java"
lang: "en"
category: "function"
name: "GSSException.DUPLICATE_TOKEN"
signature: "public static final int DUPLICATE_TOKEN = 19"
title: "GSSException.DUPLICATE_TOKEN"
directive: "field"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.DUPLICATE_TOKEN

```java
public static final int DUPLICATE_TOKEN = 19
```

The token was a duplicate of an earlier token.
 This is a fatal error code that may occur during
 context establishment.  It is not used to indicate
 supplementary status values. The MessageProp object is
 used for that purpose.
