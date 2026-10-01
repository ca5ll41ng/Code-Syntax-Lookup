---
id: "java-en-function-javax-naming-ldap-extendedresponse"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.ExtendedResponse"
title: "ExtendedResponse"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedResponse

This interface represents an LDAP extended operation response as defined in
 RFC 2251.
 
```

     ExtendedResponse ::= [APPLICATION 24] SEQUENCE {
          COMPONENTS OF LDAPResult,
          responseName     [10] LDAPOID OPTIONAL,
          response         [11] OCTET STRING OPTIONAL }
 
```

 It comprises an optional object identifier and an optional ASN.1 BER
 encoded value.

 The methods in this class can be used by the application to get low
 level information about the extended operation response. However, typically,
 the application will be using methods specific to the class that
 implements this interface. Such a class should have decoded the BER buffer
 in the response and should provide methods that allow the user to
 access that data in the response in a type-safe and friendly manner.

 For example, suppose the LDAP server supported a 'get time' extended operation.
 It would supply GetTimeRequest and GetTimeResponse classes.
 The GetTimeResponse class might look like:

```

 public class GetTimeResponse implements ExtendedResponse {
     public java.util.Date getDate() {...};
     public long getTime() {...};
     ....
 }

```

 A program would use then these classes as follows:

```

 GetTimeResponse resp =
     (GetTimeResponse) ectx.extendedOperation(new GetTimeRequest());
 java.util.Date now = resp.getDate();

```

**参见**

- ExtendedRequest

> *Since 1.3*
