---
id: "java-en-function-ldapdnsproviderresult-getdomainname"
language: "java"
lang: "en"
category: "function"
name: "LdapDnsProviderResult.getDomainName"
signature: "public String getDomainName()"
title: "LdapDnsProviderResult.getDomainName"
directive: "method"
module: "java.naming/javax.naming.ldap.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/spi/LdapDnsProviderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapDnsProviderResult.getDomainName

```java
public String getDomainName()
```

Returns the domain name resolved from the LDAP URL. This method returns
 the empty string if the `LdapDnsProviderResult` is created with a
 null domain name.

**返回**

- the resolved domain name
