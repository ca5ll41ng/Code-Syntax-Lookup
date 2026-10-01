---
id: "python-en-function-socketserver-baseserver"
language: "python"
lang: "en"
category: "function"
name: "BaseServer"
signature: "BaseServer(server_address, RequestHandlerClass)"
directive: "class"
module: "socketserver"
source_url: "https://docs.python.org/3/library/socketserver.html#socketserver.BaseServer"
license: "PSF"
updated: "2026-10-01"
---

# BaseServer

This is the superclass of all Server objects in the module.  It defines the
interface, given below, but does not implement most of the methods, which is
done in subclasses.  The two parameters are stored in the respective
`server_address` and `RequestHandlerClass` attributes.

method:: fileno()

method:: handle_request()

method:: serve_forever(poll_interval=0.5)

method:: service_actions()

method:: shutdown()

method:: server_close()

attribute:: address_family

attribute:: RequestHandlerClass

attribute:: server_address

attribute:: socket

The server classes support the following class variables:

.. XXX should class variables be covered before instance variables, or vice versa?

attribute:: allow_reuse_address

attribute:: request_queue_size

attribute:: socket_type

attribute:: timeout

There are various server methods that can be overridden by subclasses of base
server classes like `TCPServer`; these methods aren't useful to external
users of the server object.

.. XXX should the default implementations of these be documented, or should
   it be assumed that the user will look at socketserver.py?

method:: finish_request(request, client_address)

method:: get_request()

method:: handle_error(request, client_address)

method:: handle_timeout()

method:: process_request(request, client_address)

.. Is there any point in documenting the following two functions?
   What would the purpose of overriding them be: initializing server
   instance variables, adding new network families?

method:: server_activate()

method:: server_bind()

method:: verify_request(request, client_address)

> *Changed in 3.6*: Support for the :term:`context manager` protocol was added.  Exiting the context manager is equivalent to calling :meth:`server_close`.
