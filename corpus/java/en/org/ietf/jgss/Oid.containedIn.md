---
id: "java-en-function-oid-containedin"
language: "java"
lang: "en"
category: "function"
name: "Oid.containedIn"
signature: "public boolean containedIn(Oid[] oids)"
title: "Oid.containedIn"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/Oid.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Oid.containedIn

```java
public boolean containedIn(Oid[] oids)
```

A utility method to test if this Oid value is contained within the
 supplied Oid array.

**参数**

- **oids** — the array of Oid's to search

**返回**

- true if the array contains this Oid value, false otherwise
