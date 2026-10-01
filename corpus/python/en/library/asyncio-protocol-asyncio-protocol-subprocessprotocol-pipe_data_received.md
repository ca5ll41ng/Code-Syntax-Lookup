---
id: "python-en-function-asyncio-protocol-subprocessprotocol-pipe_data_received"
language: "python"
lang: "en"
category: "function"
name: "SubprocessProtocol.pipe_data_received"
signature: "SubprocessProtocol.pipe_data_received(fd, data)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessProtocol.pipe_data_received"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessProtocol.pipe_data_received

Called when the child process writes data into its stdout or stderr
pipe.

*fd* is the integer file descriptor of the pipe.

*data* is a non-empty bytes object containing the received data.
