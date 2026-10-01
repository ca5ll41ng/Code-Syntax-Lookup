---
id: "python-en-function-asyncio-eventloop-loop-subprocess_shell-protocol_factory-cmd"
language: "python"
lang: "en"
category: "function"
name: "loop.subprocess_shell(protocol_factory, cmd, *, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.subprocess_shell(protocol_factory, cmd, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.subprocess_shell(protocol_factory, cmd, *, \

Create a subprocess from *cmd*, which can be a `str` or a
`bytes` string encoded to the
`filesystem encoding`,
using the platform's "shell" syntax.

This is similar to the standard library `subprocess.Popen`
class called with `shell=True`.

The *protocol_factory* must be a callable returning a subclass of the
`SubprocessProtocol` class.

See `~loop.subprocess_exec` for more details about
the remaining arguments.

Returns a pair of `(transport, protocol)`, where *transport*
conforms to the `SubprocessTransport` base class and
*protocol* is an object instantiated by the *protocol_factory*.

If the transport is closed or is garbage collected, the child process
is killed if it is still running.
