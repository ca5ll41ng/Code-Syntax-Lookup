---
id: "java-en-function-sslparameters-getservernames"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getServerNames"
signature: "public final List<SNIServerName> getServerNames()"
title: "SSLParameters.getServerNames"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getServerNames

```java
public final List<SNIServerName> getServerNames()
```

Returns a `List` containing all `SNIServerName`s of the
 Server Name Indication (SNI) parameter, or null if none has been set.
 

 This method is only useful to `SSLSocket`s or `SSLEngine`s
 operating in client mode.
 

 For SSL/TLS/DTLS connections, the underlying SSL/TLS/DTLS provider
 may specify a default value for a certain server name type.  In
 client mode, it is recommended that, by default, providers should
 include the server name indication whenever the server can be located
 by a supported server name type.
 

 It is recommended that providers initialize default Server Name
 Indications when creating `SSLSocket`/`SSLEngine`s.
 In the following examples, the server name may be represented by an
 instance of `SNIHostName` which has been initialized with the
 hostname "www.example.com" and type
 `SNI_HOST_NAME`.

 
```

     Socket socket =
         sslSocketFactory.createSocket("www.example.com", 443);
 
```

 or
 
```

     SSLEngine engine =
         sslContext.createSSLEngine("www.example.com", 443);
 
```

**返回**

- null or an immutable list of non-null `SNIServerName`s

**参见**

- List
- #setServerNames(List)

> *Since 1.8*
