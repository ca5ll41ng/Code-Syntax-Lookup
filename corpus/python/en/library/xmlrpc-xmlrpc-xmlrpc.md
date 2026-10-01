---
id: "python-en-function-xmlrpc-xmlrpc"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B411"],"cwe":["CWE-20"],"note":"Using {name} to parse untrusted XML data is known to be vulnerable to XML attacks. Use defusedxml.xmlrpc.monkey_patch() function to monkey-patch xmlrpclib and mitigate XML vulnerabilities."}
name: "xmlrpc"
title: "`xmlrpc` --- XMLRPC server and client modules"
directive: "module"
module: "xmlrpc"
source_url: "https://docs.python.org/3/library/xmlrpc.html#module-xmlrpc"
license: "PSF"
updated: "2026-10-01"
---

# `xmlrpc` --- XMLRPC server and client modules

**`xmlrpc` --- XMLRPC server and client modules**

XML-RPC is a Remote Procedure Call method that uses XML passed via HTTP as a
transport.  With it, a client can call methods with parameters on a remote
server (the server is named by a URI) and get back structured data.

`xmlrpc` is a package that collects server and client modules implementing
XML-RPC.  The modules are:

* `xmlrpc.client`
* `xmlrpc.server`
