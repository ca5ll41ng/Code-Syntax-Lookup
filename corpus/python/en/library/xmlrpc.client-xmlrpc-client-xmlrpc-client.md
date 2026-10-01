---
id: "python-en-function-xmlrpc-client-xmlrpc-client"
language: "python"
lang: "en"
category: "function"
name: "xmlrpc.client"
title: "Example of Client Usage"
directive: "module"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#module-xmlrpc.client"
license: "PSF"
updated: "2026-10-01"
---

# Example of Client Usage

.. _xmlrpc-client-example:

**Example of Client Usage**

::

   # simple test program (from the XML-RPC specification)
   from xmlrpc.client import ServerProxy, Error

   # server = ServerProxy("http://localhost:8000") # local server
   with ServerProxy("http://betty.userland.com") as proxy:

       print(proxy)

       try:
           print(proxy.examples.getStateName(41))
       except Error as v:
           print("ERROR", v)

To access an XML-RPC server through a HTTP proxy, you need to define a custom
transport.  The following example shows how::

   import http.client
   import xmlrpc.client

   class ProxiedTransport(xmlrpc.client.Transport):

       def set_proxy(self, host, port=None, headers=None):
           self.proxy = host, port
           self.proxy_headers = headers

       def make_connection(self, host):
           connection = http.client.HTTPConnection(*self.proxy)
           connection.set_tunnel(host, headers=self.proxy_headers)
           self._connection = host, connection
           return connection

   transport = ProxiedTransport()
   transport.set_proxy('proxy-server', 8080)
   server = xmlrpc.client.ServerProxy('http://betty.userland.com', transport=transport)
   print(server.examples.getStateName(41))

**Example of Client and Server Usage**

See `simplexmlrpcserver-example`.

#### Footnotes

.. [#] This approach has been first presented in `a discussion on xmlrpc.com
   <https://web.archive.org/web/20060624230303/http://www.xmlrpc.com/discuss/msgReader$1208?mode=topic>`_.
.. the link now points to webarchive since the one at
.. http://www.xmlrpc.com/discuss/msgReader%241208 is broken (and webadmin
.. doesn't reply)
