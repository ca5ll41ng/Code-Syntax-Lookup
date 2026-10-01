---
id: "java-en-function-sslparameters-setservernames"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setServerNames"
signature: "public final void setServerNames(List<SNIServerName> serverNames)"
title: "SSLParameters.setServerNames"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setServerNames

```java
public final void setServerNames(List<SNIServerName> serverNames)
```

Sets the desired `SNIServerName`s of the Server Name
 Indication (SNI) parameter.
 

 This method is only useful to `SSLSocket`s or `SSLEngine`s
 operating in client mode.
 

 Note that the `serverNames` list is cloned
 to protect against subsequent modification.

**参数**

- **serverNames** — the list of desired `SNIServerName`s (or null)

**异常**

- **NullPointerException** — if the `serverNames` contains `null` element
- **IllegalArgumentException** — if the `serverNames` contains more than one name of the same name type

**参见**

- SNIServerName
- #getServerNames()

> *Since 1.8*
