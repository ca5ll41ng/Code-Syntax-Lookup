---
id: "java-en-function-snihostname-getasciiname"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.getAsciiName"
signature: "public String getAsciiName()"
title: "SNIHostName.getAsciiName"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.getAsciiName

```java
public String getAsciiName()
```

Returns the `US_ASCII`-compliant hostname of
 this `SNIHostName` object.
 

 Note that, per
 RFC 6066, the
 returned hostname may be an internationalized domain name that
 contains A-labels. See
 RFC 5890
 for more information about the detailed A-label specification.

      RFC 5890: Internationalized Domain Names for Applications (IDNA): Definitions and Document Framework
      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**返回**

- the `US_ASCII`-compliant hostname of this `SNIHostName` object
