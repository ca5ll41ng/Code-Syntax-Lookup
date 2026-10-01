---
id: "python-en-function-asyncio-protocol-subprocesstransport-get_pipe_transport"
language: "python"
lang: "en"
category: "function"
name: "SubprocessTransport.get_pipe_transport"
signature: "SubprocessTransport.get_pipe_transport(fd)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.get_pipe_transport"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.get_pipe_transport

Return the transport for the communication pipe corresponding to the
integer file descriptor *fd*:

* `0`: writable streaming transport of the standard input (*stdin*),
  or `None` if the subprocess was not created with `stdin=PIPE`
* `1`: readable streaming transport of the standard output (*stdout*),
  or `None` if the subprocess was not created with `stdout=PIPE`
* `2`: readable streaming transport of the standard error (*stderr*),
  or `None` if the subprocess was not created with `stderr=PIPE`
* other *fd*: `None`
