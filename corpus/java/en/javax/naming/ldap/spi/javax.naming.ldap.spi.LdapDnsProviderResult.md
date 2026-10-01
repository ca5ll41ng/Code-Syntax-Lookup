---
id: "java-en-function-javax-naming-ldap-spi-ldapdnsproviderresult"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.spi.LdapDnsProviderResult"
title: "LdapDnsProviderResult"
directive: "type"
module: "java.naming/javax.naming.ldap.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/spi/LdapDnsProviderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapDnsProviderResult

The result of a DNS lookup for an LDAP URL.

 

 This class is used by an `LdapDnsProvider` to return the result
 of a DNS lookup for a given LDAP URL. The result consists of a domain name
 and its associated LDAP server endpoints.

 

 A `null` `domainName` is equivalent to and represented
 by an empty string.

> *Since 12*
