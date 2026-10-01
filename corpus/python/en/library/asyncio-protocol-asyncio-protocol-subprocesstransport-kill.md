---
id: "python-en-function-asyncio-protocol-subprocesstransport-kill"
language: "python"
lang: "en"
category: "function"
name: "SubprocessTransport.kill"
signature: "SubprocessTransport.kill()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.kill"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.kill

Kill the subprocess.

On POSIX systems, the function sends SIGKILL to the subprocess.
On Windows, this method is an alias for `terminate`.

See also `subprocess.Popen.kill`.
