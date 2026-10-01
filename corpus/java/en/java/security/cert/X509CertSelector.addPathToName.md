---
id: "java-en-function-x509certselector-addpathtoname"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.addPathToName"
signature: "public void addPathToName(int type, String name) throws IOException"
title: "X509CertSelector.addPathToName"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.addPathToName

```java
public void addPathToName(int type, String name) throws IOException
```

Adds a name to the pathToNames criterion. The `X509Certificate`
 must not include name constraints that would prohibit building a
 path to the specified name.
 

 This method allows the caller to add a name to the set of names which
 the `X509Certificates`'s name constraints must permit.
 The specified name is added to any previous value for the
 pathToNames criterion.  If the name is a duplicate, it may be ignored.
 

 The name is provided in string format. RFC 822, DNS, and URI names
 use the well-established string formats for those types (subject to
 the restrictions included in RFC 5280). IPv4 address names are
 supplied using dotted quad notation. OID address names are represented
 as a series of nonnegative integers separated by periods. And
 directory names (distinguished names) are supplied in RFC 2253 format.
 No standard string format is defined for otherNames, X.400 names,
 EDI party names, IPv6 address names, or any other type of names. They
 should be specified using the
 `addPathToName(int type, byte [] name)
 addPathToName` method.
 

 **Note:** for distinguished names, use
 `addPathToName` instead.
 This method should not be relied on as it can fail to match some
 certificates because of a loss of encoding information in the RFC 2253
 String form of some distinguished names.

**参数**

- **type** — the name type (0-8, as specified in RFC 5280, section 4.2.1.6)
- **name** — the name in string form

**异常**

- **IOException** — if a parsing error occurs
