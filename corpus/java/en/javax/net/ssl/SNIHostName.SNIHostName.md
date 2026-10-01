---
id: "java-en-function-snihostname-snihostname"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.SNIHostName"
signature: "public SNIHostName(String hostname)"
title: "SNIHostName.SNIHostName"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.SNIHostName

```java
public SNIHostName(String hostname)
```

Creates an `SNIHostName` using the specified hostname.
 

 Note that per RFC 6066,
 the encoded server name value of a hostname is
 `US_ASCII`-compliant.  In this method,
 `hostname` can be a user-friendly Internationalized Domain Name
 (IDN).  `toASCII` is used to enforce the
 restrictions on ASCII characters in hostnames (see
 RFC 3490,
 RFC 1122,
 RFC 1123) and
 translate the `hostname` into ASCII Compatible Encoding (ACE), as:
 
```

     IDN.toASCII(hostname, IDN.USE_STD3_ASCII_RULES);
 
```

 

 The `hostname` argument is illegal if it:
 
 
-  `hostname` is empty,
 
-  `hostname` ends with a trailing dot,
 
-  `hostname` is not a valid Internationalized
      Domain Name (IDN) compliant with the RFC 3490 specification.
 

      RFC 1122: Requirements for Internet Hosts - Communication Layers
      RFC 1123: Requirements for Internet Hosts - Application and Support
      RFC 3490: Internationalizing Domain Names in Applications (IDNA)
      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**参数**

- **hostname** — the hostname of this server name

**异常**

- **NullPointerException** — if `hostname` is `null`
- **IllegalArgumentException** — if `hostname` is illegal
