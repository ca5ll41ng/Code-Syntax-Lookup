---
id: "java-en-function-starttlsresponse-close"
language: "java"
lang: "en"
category: "function"
name: "StartTlsResponse.close"
signature: "public abstract void close() throws IOException"
title: "StartTlsResponse.close"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsResponse.close

```java
public abstract void close() throws IOException
```

Closes the TLS connection gracefully and reverts back to the underlying
 connection.

**异常**

- **IOException** — If an IO error was encountered while closing the TLS connection
