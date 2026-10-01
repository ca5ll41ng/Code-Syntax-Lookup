---
id: "java-en-function-gsscontext-requestconf"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestConf"
signature: "void requestConf(boolean state) throws GSSException"
title: "GSSContext.requestConf"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestConf

```java
void requestConf(boolean state) throws GSSException
```

Requests that data confidentiality be enabled
 for the wrap method. This request can only be made on
 the context initiator's side, and it has to be done prior to the
 first call to initSecContext.

 Not all mechanisms support confidentiality and other mechanisms
 might enable it even if the application doesn't request
 it. The application may check to see if the request was honored with
 the `getConfState() getConfState` method. If confidentiality
 is enabled, only then will the mechanism honor a request for privacy
 in the `MessageProp(int, boolean) MessageProp`
 object that is passed in to the wrap method.

 Enabling confidentiality will also automatically enable
 integrity.

**参数**

- **state** — a boolean value indicating whether confidentiality should be enabled or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getConfState()
- #getIntegState()
- #requestInteg(boolean)
- MessageProp
