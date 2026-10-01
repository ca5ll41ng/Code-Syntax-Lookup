---
id: "java-en-function-javax-naming-ldap-extendedrequest"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.ExtendedRequest"
title: "ExtendedRequest"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedRequest

This interface represents an LDAPv3 extended operation request as defined in
 RFC 2251.
 
```

     ExtendedRequest ::= [APPLICATION 23] SEQUENCE {
              requestName      [0] LDAPOID,
              requestValue     [1] OCTET STRING OPTIONAL }
 
```

 It comprises an object identifier string and an optional ASN.1 BER
 encoded value.

 The methods in this class are used by the service provider to construct
 the bits to send to the LDAP server. Applications typically only deal with
 the classes that implement this interface, supplying them with
 any information required for a particular extended operation request.
 It would then pass such a class as an argument to the
 `LdapContext.extendedOperation()` method for performing the
 LDAPv3 extended operation.

 For example, suppose the LDAP server supported a 'get time' extended operation.
 It would supply GetTimeRequest and GetTimeResponse classes:

```

 public class GetTimeRequest implements ExtendedRequest {
     public GetTimeRequest() {... };
     public ExtendedResponse createExtendedResponse(String id,
         byte[] berValue, int offset, int length)
         throws NamingException {
         return new GetTimeResponse(id, berValue, offset, length);
     }
     ...
 }
 public class GetTimeResponse implements ExtendedResponse {
     long time;
     public GetTimeResponse(String id, byte[] berValue, int offset,
         int length) throws NamingException {
         time =      ... // decode berValue to get time
     }
     public java.util.Date getDate() { return new java.util.Date(time) };
     public long getTime() { return time };
     ...
 }

```

 A program would use then these classes as follows:

```

 GetTimeResponse resp =
     (GetTimeResponse) ectx.extendedOperation(new GetTimeRequest());
 long time = resp.getTime();

```

**参见**

- ExtendedResponse
- LdapContext#extendedOperation

> *Since 1.3*
