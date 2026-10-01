---
id: "python-en-function-asyncio-protocol-subprocessprotocol-process_exited"
language: "python"
lang: "en"
category: "function"
name: "SubprocessProtocol.process_exited"
signature: "SubprocessProtocol.process_exited()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessProtocol.process_exited"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessProtocol.process_exited

Called when the child process has exited.

It can be called before `~SubprocessProtocol.pipe_data_received` and
`~SubprocessProtocol.pipe_connection_lost` methods.
