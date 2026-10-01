---
id: "python-en-function-socketserver-threadingmixin"
language: "python"
lang: "en"
category: "function"
name: "ThreadingMixIn"
directive: "class"
module: "socketserver"
source_url: "https://docs.python.org/3/library/socketserver.html#socketserver.ThreadingMixIn"
license: "PSF"
updated: "2026-10-01"
---

# ThreadingMixIn

Forking and threading versions of each type of server can be created
using these mix-in classes.  For instance, `ThreadingUDPServer`
is created as follows::

   class ThreadingUDPServer(ThreadingMixIn, UDPServer):
       pass

The mix-in class comes first, since it overrides a method defined in
`UDPServer`.  Setting the various attributes also changes the
behavior of the underlying server mechanism.

`ForkingMixIn` and the Forking classes mentioned below are
only available on POSIX platforms that support `~os.fork`.

attribute:: block_on_close

attribute:: max_children

attribute:: daemon_threads

> *Changed in 3.7*: :meth:`ForkingMixIn.server_close <BaseServer.server_close>` and :meth:`ThreadingMixIn.server_close <BaseServer.server_close>` now waits until all child processes and non-daemonic threads complete. Add a new :attr:`ForkingMixIn.block_on_close <block_on_close>` class attribute to opt-in for the pre-3.7 behaviour.
