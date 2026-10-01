---
id: "java-en-function-extendedrequest-createextendedresponse"
language: "java"
lang: "en"
category: "function"
name: "ExtendedRequest.createExtendedResponse"
signature: "public ExtendedResponse createExtendedResponse(String id, byte[] berValue, int offset, int length) throws NamingException"
title: "ExtendedRequest.createExtendedResponse"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedRequest.createExtendedResponse

```java
public ExtendedResponse createExtendedResponse(String id, byte[] berValue, int offset, int length) throws NamingException
```

Creates the response object that corresponds to this request.

 After the service provider has sent the extended operation request
 to the LDAP server, it will receive a response from the server.
 If the operation failed, the provider will throw a NamingException.
 If the operation succeeded, the provider will invoke this method
 using the data that it got back in the response.
 It is the job of this method to return a class that implements
 the ExtendedResponse interface that is appropriate for the
 extended operation request.

 For example, a Start TLS extended request class would need to know
 how to process a Start TLS extended response. It does this by creating
 a class that implements ExtendedResponse.

**参数**

- **id** — The possibly null object identifier of the response control.
- **berValue** — The possibly null ASN.1 BER encoded value of the response control. This is the raw BER bytes including the tag and length of the response value. It does not include the response OID.
- **offset** — The starting position in berValue of the bytes to use.
- **length** — The number of bytes in berValue to use.

**返回**

- A non-null object.

**异常**

- **NamingException** — if cannot create extended response due to an error.

**参见**

- ExtendedResponse
