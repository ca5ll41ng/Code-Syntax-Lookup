---
id: "java-en-function-starttlsrequest-createextendedresponse"
language: "java"
lang: "en"
category: "function"
name: "StartTlsRequest.createExtendedResponse"
signature: "public ExtendedResponse createExtendedResponse(String id, byte[] berValue, int offset, int length) throws NamingException"
title: "StartTlsRequest.createExtendedResponse"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsRequest.createExtendedResponse

```java
public ExtendedResponse createExtendedResponse(String id, byte[] berValue, int offset, int length) throws NamingException
```

Creates an extended response object that corresponds to the
 LDAP StartTLS extended request.
 

 The result must be a concrete subclass of StartTlsResponse
 and must have a public zero-argument constructor.
 

 This method locates the implementation class by locating
 configuration files that have the name:
 `META-INF/services/javax.naming.ldap.StartTlsResponse
 `
 The configuration files and their corresponding implementation classes must
 be accessible to the calling thread's context class loader.
 

 Each configuration file should contain a list of fully-qualified class
 names, one per line.  Space and tab characters surrounding each name, as
 well as blank lines, are ignored.  The comment character is `'#'`
 (`0x23`); on each line all characters following the first comment
 character are ignored.  The file must be encoded in UTF-8.
 

 This method will return an instance of the first implementation
 class that it is able to load and instantiate successfully from
 the list of class names collected from the configuration files.
 This method uses the calling thread's context classloader to find the
 configuration files and to load the implementation class.
 

 If no class can be found in this way, this method will use
 an implementation-specific way to locate an implementation.
 If none is found, a NamingException is thrown.

**参数**

- **id** — The object identifier of the extended response. Its value must be "1.3.6.1.4.1.1466.20037" or null. Both values are equivalent.
- **berValue** — The possibly null ASN.1 BER encoded value of the extended response. This is the raw BER bytes including the tag and length of the response value. It does not include the response OID. Its value is ignored because a Start TLS response is not expected to contain any response value.
- **offset** — The starting position in berValue of the bytes to use. Its value is ignored because a Start TLS response is not expected to contain any response value.
- **length** — The number of bytes in berValue to use. Its value is ignored because a Start TLS response is not expected to contain any response value.

**返回**

- The StartTLS extended response object.

**异常**

- **NamingException** — If a naming exception was encountered while creating the StartTLS extended response object.
