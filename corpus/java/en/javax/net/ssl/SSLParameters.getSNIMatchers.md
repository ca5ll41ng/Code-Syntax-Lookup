---
id: "java-en-function-sslparameters-getsnimatchers"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getSNIMatchers"
signature: "public final Collection<SNIMatcher> getSNIMatchers()"
title: "SSLParameters.getSNIMatchers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getSNIMatchers

```java
public final Collection<SNIMatcher> getSNIMatchers()
```

Returns a `Collection` containing all `SNIMatcher`s of the
 Server Name Indication (SNI) parameter, or null if none has been set.
 

 This method is only useful to `SSLSocket`s or `SSLEngine`s
 operating in server mode.
 

 For better interoperability, providers generally will not define
 default matchers so that by default servers will ignore the SNI
 extension and continue the handshake.

**返回**

- null or an immutable collection of non-null `SNIMatcher`s

**参见**

- SNIMatcher
- #setSNIMatchers(Collection)

> *Since 1.8*
