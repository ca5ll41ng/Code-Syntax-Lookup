---
id: "java-en-function-snihostname-equals"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.equals"
signature: "public boolean equals(Object other)"
title: "SNIHostName.equals"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.equals

```java
public boolean equals(Object other)
```

Compares this server name to the specified object.
 

 Per RFC 6066, DNS
 hostnames are case-insensitive.  Two server hostnames are equal if,
 and only if, they have the same name type, and the hostnames are
 equal in a case-independent comparison.

      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**参数**

- **other** — the other server name object to compare with.

**返回**

- true if, and only if, the `other` is considered equal to this instance
