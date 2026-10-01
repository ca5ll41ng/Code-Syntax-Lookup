---
id: "java-en-function-javax-security-sasl-saslserver"
language: "java"
lang: "en"
category: "function"
name: "javax.security.sasl.SaslServer"
title: "SaslServer"
directive: "type"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer

Performs SASL authentication as a server.
 

 A server such an LDAP server gets an instance of this
 class in order to perform authentication defined by a specific SASL
 mechanism. Invoking methods on the `SaslServer` instance
 generates challenges according to the SASL
 mechanism implemented by the `SaslServer`.
 As the authentication proceeds, the instance
 encapsulates the state of a SASL server's authentication exchange.
 

 Here's an example of how an LDAP server might use a `SaslServer`.
 It first gets an instance of a `SaslServer` for the SASL mechanism
 requested by the client:
 
```

 SaslServer ss = Sasl.createSaslServer(mechanism,
     "ldap", myFQDN, props, callbackHandler);
 
```

 It can then proceed to use the server for authentication.
 For example, suppose the LDAP server received an LDAP BIND request
 containing the name of the SASL mechanism and an (optional) initial
 response. It then might use the server as follows:
 
```
`while (!ss.isComplete()) {
     try {
         byte[] challenge = ss.evaluateResponse(response);
         if (ss.isComplete()) {
             status = ldap.sendBindResponse(mechanism, challenge, SUCCESS);
         ` else {
             status = ldap.sendBindResponse(mechanism, challenge,
                 SASL_BIND_IN_PROGRESS);
             response = ldap.readBindRequest();
         }
     } catch (SaslException e) {
         status = ldap.sendErrorResponse(e);
         break;
     }
 }
 if (ss.isComplete() && status == SUCCESS) {
     String qop = (String) sc.getNegotiatedProperty(Sasl.QOP);
     if (qop != null
         && (qop.equalsIgnoreCase("auth-int")
             || qop.equalsIgnoreCase("auth-conf"))) {

         // Use SaslServer.wrap() and SaslServer.unwrap() for future
         // communication with client
         ldap.in = new SecureInputStream(ss, ldap.in);
         ldap.out = new SecureOutputStream(ss, ldap.out);
     }
 }
 }
```

**参见**

- Sasl
- SaslServerFactory

> *Since 1.5*
