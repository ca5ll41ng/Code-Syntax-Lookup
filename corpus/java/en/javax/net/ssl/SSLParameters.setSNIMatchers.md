---
id: "java-en-function-sslparameters-setsnimatchers"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setSNIMatchers"
signature: "public final void setSNIMatchers(Collection<SNIMatcher> matchers)"
title: "SSLParameters.setSNIMatchers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setSNIMatchers

```java
public final void setSNIMatchers(Collection<SNIMatcher> matchers)
```

Sets the `SNIMatcher`s of the Server Name Indication (SNI)
 parameter.
 

 This method is only useful to `SSLSocket`s or `SSLEngine`s
 operating in server mode.
 

 Note that the `matchers` collection is cloned to protect
 against subsequent modification.

**参数**

- **matchers** — the collection of `SNIMatcher`s (or null)

**异常**

- **NullPointerException** — if the `matchers` contains `null` element
- **IllegalArgumentException** — if the `matchers` contains more than one name of the same name type

**参见**

- Collection
- SNIMatcher
- #getSNIMatchers()

> *Since 1.8*
